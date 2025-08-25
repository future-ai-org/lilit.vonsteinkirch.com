'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import AnimatedStars from '../components/AnimatedStars';
import Link from 'next/link';
import { parseEther } from 'viem';
import QRCode from 'qrcode';
import { walletAddresses, amountOptions } from './walletAddresses';

const blockchainConfig = {
  bitcoin: {
    name: 'bitcoin',
    symbol: 'BTC',
    defaultAmount: '0.00333',
    qrPrefix: 'bitcoin',
    qrSuffix: '',
    amountMultiplier: 100000000, // Convert to satoshis
    parseAmount: (amount: string) => (parseFloat(amount) * 100000000).toString()
  },
  ethereum: {
    name: 'ethereum',
    symbol: 'ETH',
    defaultAmount: '0.0333',
    qrPrefix: 'ethereum',
    qrSuffix: '@1',
    amountMultiplier: 1, // No conversion needed for QR
    parseAmount: (amount: string) => parseEther(amount).toString()
  },
  cardano: {
    name: 'cardano',
    symbol: 'ADA',
    defaultAmount: '10',
    qrPrefix: 'cardano',
    qrSuffix: '',
    amountMultiplier: 1000000, // Convert to lovelace
    parseAmount: (amount: string) => (parseFloat(amount) * 1000000).toString()
  },
  tron: {
    name: 'tron',
    symbol: 'TRX',
    defaultAmount: '333',
    qrPrefix: 'tron',
    qrSuffix: '',
    amountMultiplier: 1000000, // Convert to sun
    parseAmount: (amount: string) => (parseFloat(amount) * 1000000).toString()
  },
  solana: {
    name: 'solana',
    symbol: 'SOL',
    defaultAmount: '0.333',
    qrPrefix: 'solana',
    qrSuffix: '',
    amountMultiplier: 1000000000, // Convert to lamports
    parseAmount: (amount: string) => (parseFloat(amount) * 1000000000).toString()
  },
  ripple: {
    name: 'ripple',
    symbol: 'XRP',
    defaultAmount: '333',
    qrPrefix: 'ripple',
    qrSuffix: '',
    amountMultiplier: 1000000, // Convert to drops
    parseAmount: (amount: string) => (parseFloat(amount) * 1000000).toString()
  },
  near: {
    name: 'near',
    symbol: 'NEAR',
    defaultAmount: '0.333',
    qrPrefix: 'near',
    qrSuffix: '',
    amountMultiplier: 1000000000000000000000000000, // Convert to yoctoNEAR
    parseAmount: (amount: string) => (parseFloat(amount) * 1000000000000000000000000000).toString()
  }
} as const;

type BlockchainType = keyof typeof blockchainConfig;

const BlockchainTab = ({ 
  chain, 
  isActive, 
  onClick 
}: { 
  chain: BlockchainType; 
  isActive: boolean; 
  onClick: () => void; 
}) => (
  <div
    role="tab"
    aria-selected={isActive}
    aria-controls={`${chain}-panel`}
    id={`${chain}-tab`}
    data-chain={chain}
    className={`waitlist-tab ${isActive ? 'waitlist-tab-active' : ''}`}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    tabIndex={0}
  >
    {chain}
  </div>
);

const BlockchainPanel = ({ 
  chain, 
  isActive, 
  selectedAmount, 
  onAmountChange, 
  qrDataUrl, 
  copied, 
  onCopy 
}: { 
  chain: BlockchainType; 
  isActive: boolean; 
  selectedAmount: string; 
  onAmountChange: (amount: string) => void; 
  qrDataUrl: string | null; 
  copied: 'address' | 'uri' | null; 
  onCopy: (text: string, which: 'address' | 'uri') => void; 
}) => {
  const config = blockchainConfig[chain];
  const amounts = amountOptions[chain];
  
  return (
    <div 
      id={`${chain}-panel`}
      role="tabpanel"
      aria-labelledby={`${chain}-tab`}
      className={`waitlist-tab-panel ${isActive ? '' : 'hidden'}`}
    >
      <div className="waitlist-grid">
        <div className="waitlist-section">
          <span className="waitlist-label">
            {chain} wallet
          </span>
          <div className="waitlist-recipient-row">
            <code className="waitlist-code">
              {walletAddresses[chain].address}
            </code>
            <button
              type="button"
              onClick={() => onCopy(walletAddresses[chain].address, 'address')}
              className="waitlist-copy-button"
            >
              {copied === 'address' ? 'copied' : 'copy'}
            </button>
          </div>
        </div>

        <div className="waitlist-section">
          <span className="waitlist-label">chose the amount you would like to commit</span>
          <div className="waitlist-amount-options">
            {amounts.map((amt) => (
              <button
                key={amt}
                type="button"
                className={`waitlist-amount-button ${amt === selectedAmount ? 'waitlist-amount-button-selected' : ''}`}
                onClick={() => onAmountChange(amt)}
              >
                {amt} {config.symbol}
              </button>
            ))}
          </div>
        </div>

        {qrDataUrl && isActive && (
          <div className="waitlist-qr-section">
            <span className="waitlist-qr-label">scan to transfer (or use your wallet directly)</span>
            <Image
              src={qrDataUrl}
              alt={`${chain} payment qr`}
              width={240}
              height={240}
              className="waitlist-qr-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function WaitlistPage() {
  const [copied, setCopied] = useState<'address' | 'uri' | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [selectedChain, setSelectedChain] = useState<BlockchainType>('bitcoin');
  const [selectedAmount, setSelectedAmount] = useState<string>('0.00333');

  const currentConfig = useMemo(() => blockchainConfig[selectedChain], [selectedChain]);

  useEffect(() => {
    setSelectedAmount(currentConfig.defaultAmount);
  }, [currentConfig.defaultAmount]);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const config = blockchainConfig[selectedChain];
        let linkForQr: string;
        
        if (selectedChain === 'ethereum') {
          const weiValue = parseEther(selectedAmount).toString();
          linkForQr = `${config.qrPrefix}:${walletAddresses[selectedChain].address}${config.qrSuffix}?value=${weiValue}`;
        } else {
          const convertedAmount = config.parseAmount(selectedAmount);
          linkForQr = `${config.qrPrefix}:${walletAddresses[selectedChain].address}?amount=${convertedAmount}`;
        }
        
        const qrData = await QRCode.toDataURL(linkForQr, { margin: 1, scale: 6 });
        setQrDataUrl(qrData);
      } catch (error) {
        setQrDataUrl(null);
      }
    };

    generateQR();
  }, [selectedChain, selectedAmount]);

  const handleCopy = useCallback((text: string, which: 'address' | 'uri') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    });
  }, []);

  const handleChainChange = useCallback((chain: BlockchainType) => {
    setSelectedChain(chain);
  }, []);

  const handleAmountChange = useCallback((amount: string) => {
    setSelectedAmount(amount);
  }, []);

  return (
    <div className="values-page waitlist-page">
      <AnimatedStars />
      <div className="waitlist-container">
        <h1 className="values-title title-glow waitlist-title-spacing">
          <span className="values-title-text">become one of our first members</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="waitlist-card">
          <div className="waitlist-card-inner">
            <p className="waitlist-description">
              <br></br>
              <span className="rainbow-text rainbow-text-big">gm, anon </span>
              
              <br />
              
              <span className="rainbow-text rainbow-text-big">[ send a 333 support signal to our project ]</span> 
              <br /><br />
              once we&#39;re ready to add you as a member, we&#39;ll drop a <span className="rainbow-text">cryptographic message</span> with 
              instructions for logging in to our revolutionary predictive platform.
              the amount doesn&#39;t matter — we don&#39;t judge humans by how many bytes they own in this simulation.
              pitch in whatever you can or choose, and you&#39;re on the waitlist.

              <br /><br />
            </p>

            <div className="waitlist-tabs" role="tablist" aria-label="Select blockchain network">
              {(Object.keys(blockchainConfig) as BlockchainType[]).map((chain) => (
                <BlockchainTab
                  key={chain}
                  chain={chain}
                  isActive={selectedChain === chain}
                  onClick={() => handleChainChange(chain)}
                />
              ))}
            </div>

            <div className="waitlist-content-box">
              {(Object.keys(blockchainConfig) as BlockchainType[]).map((chain) => (
                <BlockchainPanel
                  key={chain}
                  chain={chain}
                  isActive={selectedChain === chain}
                  selectedAmount={selectedAmount}
                  onAmountChange={handleAmountChange}
                  qrDataUrl={qrDataUrl}
                  copied={copied}
                  onCopy={handleCopy}
                />
              ))}
            </div>

            <div className="waitlist-back-link-container">
              <Link href="/" className="waitlist-link">← back home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



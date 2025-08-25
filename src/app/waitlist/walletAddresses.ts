export const walletAddresses = {
  ethereum: {
    address: '0xf02F114C145d68d802aa15d19162FBd89f339d69',
  },
  cardano: {
    address: 'addr1q8p7ecsn2ytgvc5e2sff7ufz07w6p4n8s3kvc4r23c9jcgy03uvd8uszlrez8wnm9lp5af2ft02mhnxpfry26utywc6qfldput'
  },
  bitcoin: {
    address: 'bc1q6nu6hzcx2tarrmkw38y3md9djflcac8fg62am0'
  },
  tron: {
    address: 'TJT5kh6bkioRhcZA99rhih7N1TYQrFatx5'
  },
  solana: {
    address: 'FgLKXa6U4MVsZjjMuNCpeL4UVHp9R2bU31RdoSzzqWoD'
  },
  ripple: {
    address: 'rLnfh5WAivTi4uo7ZZtBtvnwrKio34KMN8'
  },
  near: {
    address: '830f8d7c407b66d4da421cc192e2578858225d067b45123c5471535b0fd330a4'
  }
} as const;

export const amountOptions = {
  ethereum: ['0.0333', '0.333', '3.33', '33.3', '333'] as const,
  cardano: ['33.3', '333', '3333', '33333', '333333'] as const,
  bitcoin: ['0.00333', '0.0333', '0.333', '3.33', '33.3'] as const,
  tron: ['333', '3333', '33333', '333333', '3333333'] as const,
  solana: ['0.333', '3.33', '33.3', '333', '3333'] as const,
  ripple: ['33.3', '333', '3333', '33333', '333333'] as const,
  near: ['0.333', '3.33', '33.3', '333', '3333'] as const
} as const;


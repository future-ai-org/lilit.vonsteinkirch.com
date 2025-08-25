'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function VisionLink() {
  const pathname = usePathname()
  const isVisionPage = pathname === '/vision'

  return (
    <div className="vision-link-container">
      <Link 
        href={isVisionPage ? "/" : "/vision"}
        className="values-link glow-link"
      >
        <span className="nav-link-label">{isVisionPage ? "home" : "our vision"}</span>
      </Link>
    </div>
  )
}

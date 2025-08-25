'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ValuesLink() {
  const pathname = usePathname()
  const isValuesPage = pathname === '/values'

  return (
    <div className="values-link-container">
      <Link 
        href={isValuesPage ? "/" : "/values"}
        className="values-link glow-link"
      >
        <span className="nav-link-label">{isValuesPage ? "home" : "our values"}</span>
      </Link>
    </div>
  )
} 

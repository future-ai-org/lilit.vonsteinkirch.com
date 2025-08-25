'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StarTeamLink() {
  const pathname = usePathname()
  const isJobsPage = pathname === '/careers'

  return (
    <div className="starteam-link-container">
      <Link 
        href={isJobsPage ? "/" : "/careers"}
        className="values-link values-link-lg glow-link"
      >
        <span className="nav-link-label">{isJobsPage ? "home" : "our spaceship"}</span>
      </Link>
    </div>
  )
} 

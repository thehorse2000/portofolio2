'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-darkBg border-b-4 border-black h-20`}>
      <div className="mx-auto h-full w-container max-w-full px-5">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl text-secondary hover:opacity-80 transition-opacity">
            {"{A}mr"}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link href="#about" className="font-heading hover:-translate-y-1 transition-transform">
              About
            </Link>
            <Link href="#projects" className="font-heading hover:-translate-y-1 transition-transform">
              Projects
            </Link>
            <Link href="#contact" className="font-heading hover:-translate-y-1 transition-transform">
              Contact
            </Link>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
} 
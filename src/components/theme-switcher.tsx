'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on server-side to prevent hydration mismatch
  }

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="stroke-text hidden h-6 w-6 w500:h-4 w500:w-4 dark:inline" />
      <Moon className="stroke-text inline h-6 w-6 w500:h-4 w500:w-4 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

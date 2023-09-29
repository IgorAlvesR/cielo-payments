import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      data-testid="button-theme"
      className="dark:border dark:border-zinc-900 dark:hover:bg-zinc-900"
      variant="outline"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <MdDarkMode className="h-4 w-4" />
      ) : (
        <BsSun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

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
      className="border border-zinc-800 bg-zinc-100 dark:bg-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-300 dark:text-zinc-800"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <MdDarkMode className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
      ) : (
        <BsSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

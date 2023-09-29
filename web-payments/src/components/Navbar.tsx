import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { ModeToggle } from './mode-toggle'
import { useTheme } from './ThemeProvider'

export function Navbar() {
  const location = useLocation()
  const activeRoute = location.pathname

  const { theme } = useTheme()
  return (
    <header className="fixed inset-x-0 top-0 w-full z-10 flex sm:h-16 px-12  justify-center border border-zinc-100 dark:border-zinc-800 bg-background dark:bg-zinc-800">
      <div className="text-xs sm:text-sm max-w-6xl flex flex-col items-center justify-between sm:flex-row flex-1">
        <Link to="/">
          <Logo color={theme === 'dark' ? '#FFF' : '#000'} />
        </Link>
        <div className="flex items-center gap-8 py-2 sm:flex-row">
          <nav
            aria-label="Menu de navegação"
            className="w-full flex justify-center sm:justify-end"
          >
            <ul className="flex items-center gap-6 uppercase font-semibold sm:gap-10">
              <li className="hover:text-primary/70 duration-100 relative flex items-center">
                <Link
                  to="/"
                  className={`${
                    activeRoute === '/'
                      ? 'before:h-1 before:w-1 sm:before:h-2 sm:before:w-2 before:bg-primary before:absolute before:top-1.5 before:-left-3 before:rounded-full'
                      : ''
                  } `}
                >
                  Transações
                </Link>
              </li>
              <li className="hover:text-primary/70 duration-100 relative">
                <Link
                  to="/metrics"
                  className={`${
                    activeRoute === '/metrics'
                      ? 'before:h-1 before:w-1 sm:before:h-2 sm:before:w-2 before:bg-primary before:absolute before:top-1.5 before:-left-3 before:rounded-full'
                      : ''
                  } `}
                >
                  Métricas
                </Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

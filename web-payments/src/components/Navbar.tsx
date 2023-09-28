import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  const location = useLocation()
  const activeRoute = location.pathname

  return (
    <header className="fixed inset-x-0 top-0 w-full z-10 flex sm:h-16 px-12 bg-blue-200 justify-center dark:bg-blue-300 dark:text-zinc-800">
      <div className="max-w-6xl flex flex-col items-center justify-between sm:flex-row flex-1">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-8 flex-col py-2 sm:flex-row">
          <nav
            aria-label="Menu de navegação"
            className="w-full flex justify-center sm:justify-end"
          >
            <ul className="flex items-center gap-4 flex-col uppercase font-semibold sm:flex-row sm:gap-8">
              <li className="hover:text-zinc-800/70 duration-100">
                <Link
                  to="/"
                  className={`${
                    activeRoute === '/' ? 'text-zinc-800/70' : ''
                  } `}
                >
                  Transações
                </Link>
              </li>
              <li className="hover:text-zinc-800/70 duration-100">
                <Link
                  to="/metrics"
                  className={`${
                    activeRoute === '/metrics' ? 'text-zinc-800/70' : ''
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

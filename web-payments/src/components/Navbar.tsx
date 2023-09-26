import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <header className="flex flex-col items-center justify-between h-full sm:h-16 px-12 bg-blue-200 dark:bg-blue-300 sm:flex-row dark:text-zinc-800">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-8 flex-col py-2 sm:flex-row">
        <nav
          aria-label="Menu de navegação"
          className="w-full flex justify-center sm:justify-end"
        >
          <ul className="flex items-center gap-4 flex-col font-semibold sm:flex-row sm:gap-8">
            <li className="hover:text-blue-950">
              <Link to="/">Transações</Link>
            </li>
            <li className="hover:text-blue-950">
              <Link to="/metrics">Métricas</Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

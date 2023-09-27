import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import Router from './pages/router'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <main className="mt-[286px] sm:mt-24 max-w-7xl my-0 px-16 mx-auto">
          <Router />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

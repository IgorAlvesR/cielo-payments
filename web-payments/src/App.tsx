import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import Router from './pages/router'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <main className="mt-6 max-w-6xl my-0 mx-auto">
          <Router />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

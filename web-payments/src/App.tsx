import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Metrics } from './pages/Metrics'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <main className="mt-6 max-w-6xl my-0 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

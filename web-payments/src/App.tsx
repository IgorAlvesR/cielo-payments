import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

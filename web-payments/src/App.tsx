import { Navbar } from './components/Navbar'
import Router from './pages/router'

export function App() {
  return (
    <>
      <Navbar />
      <main className="mt-[286px] pb-24 sm:mt-24 sm:max-w-7xl my-0 sm:px-16 mx-auto">
        <Router />
      </main>
    </>
  )
}

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { BrowserRouter } from 'react-router-dom'

function renderComponent() {
  render(
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>,
  )
}

describe('Navbar test', () => {
  it('Deve renderizar uma lista de navegação contendo dois itens', () => {
    renderComponent()
    const li01 = screen.getByText('Transações')
    const li02 = screen.getByText('Métricas')

    expect(li01).toBeInTheDocument()
    expect(li02).toBeInTheDocument()
  })

  it('Deve renderizar o logo do projeto', () => {
    renderComponent()
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
  })

  it('Deve renderizar o botão que troca de tema', () => {
    renderComponent()
    const btnTheme = screen.getByTestId('button-theme')
    expect(btnTheme).toBeInTheDocument()
  })
})

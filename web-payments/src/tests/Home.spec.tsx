import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from '../pages/Home'

describe('Home test', () => {
  it('Should render `Hello in Home component', () => {
    render(<Home />)
    screen.getByText('Hello')
  })
})

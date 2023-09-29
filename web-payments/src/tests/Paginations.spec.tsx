import { expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Pagination } from '@/components/Paginations'

function renderComponent() {
  render(
    <Pagination
      data={{
        pageNumber: 10,
        pageSize: 10,
        totalElements: 300,
        numPages: 30,
        lastPage: false,
        firstPage: false,
      }}
    />,
  )
}

describe('Pagination test', () => {
  it('Deve ter 4 botões para trocar de página', () => {
    renderComponent()
    const container = screen.getByTestId('pagination-test')
    const children = container.children
    expect(children.length).toBe(4)
  })

  it('Deve renderizar o última página', () => {
    renderComponent()
    const container = screen.getByTestId('pagination-test')
    const children = container.children
    const lastPageElement = children[children.length - 1]
    const textLastPage = lastPageElement.textContent?.includes('30')
    expect(textLastPage).toBeTruthy()
  })
})

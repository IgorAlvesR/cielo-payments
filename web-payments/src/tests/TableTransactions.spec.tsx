import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TableTransactions } from '@/components/TableTransactions'
import { StatusTransaction, Transaction } from '@/types'

function renderComponent() {
  const transactions: Transaction[] = [
    {
      id: '114606514478703',
      merchantId: '2000463023',
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: '2021-05-26T1:1:55',
      paymentType: 'Crédito à vista',
      cardBrand: 'Mastercard',
      authorizationCode: '378216',
      truncatedCardNumber: '1014',
      grossAmount: 80,
      netAmount: 76.88,
      terminal: '00032668',
      administrationFee: 3.9,
      channelCode: 15,
      channel: 'Super Link / Digitada',
      withdrawAmount: 0,
      minimumMDRAmmount: -3.12,
      mdrTaxAmount: 0,
      mdrFeeAmount: -3.12,
      status: StatusTransaction.APPROVED,
    },
    {
      id: '114606514478705',
      merchantId: '2000463023',
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: '2021-05-26T12:12:55',
      paymentType: 'Crédito à vista',
      cardBrand: 'Mastercard',
      authorizationCode: '378224',
      truncatedCardNumber: '1014',
      grossAmount: 90,
      netAmount: 86.49,
      terminal: '00032668',
      administrationFee: 3.9,
      channelCode: 15,
      channel: 'Super Link / Digitada',
      withdrawAmount: 0,
      minimumMDRAmmount: -3.51,
      mdrTaxAmount: 0,
      mdrFeeAmount: -3.51,
      status: StatusTransaction.APPROVED,
    },
  ]
  render(
    <TableTransactions transactions={transactions} onClickRow={() => {}} />,
  )
}

describe('TableTransaction test', () => {
  it('Deve renderizar o título da tabela', () => {
    renderComponent()
    const titleTable = screen.getByText(/Histórico de transações/i)
    expect(titleTable).toBeInTheDocument()
  })

  it('Deve retornar a quantidade linhas da tabela', () => {
    renderComponent()
    const tRow = screen.getAllByTestId('table-transaction-row')
    expect(tRow.length).toBe(2)
  })

  it('Deve renderizar o cabeçalho da tabela', () => {
    renderComponent()
    const tRowHeader = screen.getByTestId('table-transaction-header-row')
    const tColumn = tRowHeader.children

    expect(tColumn[0]).toBeInTheDocument()
    expect(tColumn[1]).toBeInTheDocument()
    expect(tColumn[2]).toBeInTheDocument()
    expect(tColumn[3]).toBeInTheDocument()
    expect(tColumn[4]).toBeInTheDocument()
  })
})

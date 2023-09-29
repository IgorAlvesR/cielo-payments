import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ModalTransactionDetails } from '@/components/ModalTransactionDetails'
import { StatusTransaction } from '@/types'

function renderComponent(open: boolean) {
  render(
    <ModalTransactionDetails
      open={open}
      setOpen={() => !open}
      transaction={{
        id: '114606514478703',
        merchantId: '2000463023',
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: '2021-05-26T12:12:55',
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
      }}
    />,
  )
}

describe('ModalTransactionDetails test', () => {
  it('Deve renderizar o modal que exibe os detalhes da transação', () => {
    const open = true
    renderComponent(open)
    const modal = screen.getByText(/Detalhes da transação/i)
    expect(modal).toBeInTheDocument()
  })

  it('Não deve renderizar o modal que exibe os detalhes da transação', () => {
    const open = false
    renderComponent(open)
    const modal = screen.queryByText(/Detalhes da transação/i)
    expect(modal).toBeNull()
  })
})

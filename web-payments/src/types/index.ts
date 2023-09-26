export enum StatusTransaction {
  PENDING = 'Pendente',
  APPROVED = 'Aprovada',
}

export interface Transaction {
  id: string
  merchantId: string
  paymentNode: number
  cnpjRoot: number
  date: string
  paymentType: string
  cardBrand: string
  authorizationCode: string
  truncatedCardNumber: string
  grossAmount: number
  netAmount: number
  terminal: number
  administrationFee: number
  channelCode: number
  channel: string
  withdrawAmount: number
  minimumMDRAmmount: number
  mdrTaxAmount: number
  mdrFeeAmount: number
  status: StatusTransaction
}

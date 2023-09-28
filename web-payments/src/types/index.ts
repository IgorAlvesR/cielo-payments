export enum StatusTransaction {
  PENDING = 'Pendente',
  APPROVED = 'Aprovada',
  DENIED = 'Negada',
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
  terminal: string
  administrationFee: number
  channelCode: number
  channel: string
  withdrawAmount: number
  minimumMDRAmmount: number
  mdrTaxAmount: number
  mdrFeeAmount: number
  status: StatusTransaction
}

export interface routerType {
  title: string
  path: string
  element: JSX.Element
}

export interface Pagination {
  pageNumber: number
  pageSize: number
  totalElements: number
  numPages: number
  lastPage: boolean
  firstPage: boolean
}

export interface Summary {
  totalQuantity: number
  totalAmount: number
  totalNetAmount: number
  totalAverageAmount: number
  initialDate: string
  finalDate: string
}

export interface BrandsCount {
  mastercardCount: number
  visaCount: number
  eloCount: number
  hipercardCount: number
}

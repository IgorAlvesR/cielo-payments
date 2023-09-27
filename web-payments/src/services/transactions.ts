import { Pagination, Transaction } from '@/types'
import { getInstanceHttpClient } from './api'

const client = getInstanceHttpClient()

export type getTransactionResponse = {
  status: number
  data: {
    transactions: Transaction[]
  }
}

export type getPaginationResponse = {
  status: number
  data: {
    pagination: Pagination
  }
}

export async function getTransactions(): Promise<
  getTransactionResponse | Error
> {
  try {
    const { data } = await client.get('/items')
    return {
      status: 200,
      data: {
        transactions: data,
      },
    }
  } catch (error) {
    console.error(error)
    throw new Error('Não foi possível buscar por transações.')
  }
}

export async function getPagination(): Promise<getPaginationResponse | Error> {
  try {
    const { data } = await client.get('/pagination')
    return {
      status: 200,
      data: {
        pagination: data,
      },
    }
  } catch (error) {
    console.error(error)
    throw new Error('Não foi possível buscar por transações.')
  }
}

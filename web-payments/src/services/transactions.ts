import { Pagination, Summary, Transaction } from '@/types'
import { getInstanceHttpClient } from './api'

const client = getInstanceHttpClient()

export type GetTransactionResponse = {
  status: number
  data: {
    transactions: Transaction[]
  }
}

export type GetPaginationResponse = {
  status: number
  data: {
    pagination: Pagination
  }
}

export type GetSummaryResponse = {
  status: number
  data: {
    summary: Summary
  }
}

export async function getTransactions(): Promise<GetTransactionResponse> {
  try {
    const { data, status } = await client.get('/items')
    return {
      status,
      data: {
        transactions: data,
      },
    }
  } catch (error) {
    console.error(error)
    throw new Error('Não foi possível buscar por transações.')
  }
}

export async function getPagination(): Promise<GetPaginationResponse> {
  try {
    const { data, status } = await client.get('/pagination')
    return {
      status,
      data: {
        pagination: data,
      },
    }
  } catch (error) {
    console.error(error)
    throw new Error('Não foi possível buscar a paginação.')
  }
}

export async function getSummary(): Promise<GetSummaryResponse> {
  try {
    const { data } = await client.get('/summary')
    return {
      status: 200,
      data: {
        summary: data,
      },
    }
  } catch (error) {
    console.error(error)
    throw new Error('Não foi possível buscar o resumo das transações.')
  }
}

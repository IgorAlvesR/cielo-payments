import { Pagination, Summary, Transaction } from '@/types'
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

export type getSummaryResponse = {
  status: number
  data: {
    summary: Summary
  }
}

export async function getTransactions(): Promise<getTransactionResponse> {
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

export async function getPagination(): Promise<getPaginationResponse> {
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

export async function getSummary(): Promise<getSummaryResponse> {
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

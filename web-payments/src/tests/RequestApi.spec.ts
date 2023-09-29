import { expect, it, describe, beforeEach } from 'vitest'
import { getInstanceHttpClient } from '@/services/api'
import '@testing-library/jest-dom'
import { getSummary, getTransactions } from '@/services/transactions'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const restHandlers = [
  rest.get('/items', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),

  rest.get('/summary', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),
]
const server = setupServer(...restHandlers)

describe('Api test', () => {
  beforeEach(() => {
    import.meta.env.VITE_API_URL = 'http://localhost:3000'
  })

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())

  it('Não deve retornar undefined para a instância do axios', () => {
    const instance = getInstanceHttpClient()
    expect(instance).not.toBeUndefined()
  })

  it('Deve retornar status 200 ao buscar as transações', async () => {
    const response = await getTransactions()
    expect(response.status).toBe(200)
  })

  it('Deve retornar status 200 ao buscar resumo das transações', async () => {
    const response = await getSummary()
    expect(response.status).toBe(200)
  })
})

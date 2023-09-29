import { expect, it, describe, beforeEach } from 'vitest'
import { getInstanceHttpClient } from '@/services/api'
import '@testing-library/jest-dom'

describe('Api test', () => {
  beforeEach(() => {
    import.meta.env.VITE_API_URL = 'http://localhost:3000'
  })
  it('Não deve retornar undefined para a instância do axios', () => {
    const instance = getInstanceHttpClient()
    expect(instance).not.toBeUndefined()
  })
})

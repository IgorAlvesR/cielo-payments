import { getInstanceHttpClient } from '@/services/api'
import { Transaction } from '@/types'

import { useState, useEffect } from 'react'

export default function useFetch(path: string) {
  let isMounted = true
  const [data, setData] = useState<Transaction | unknown>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = getInstanceHttpClient()
        const response = await client.get(path)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }

    if (isMounted) {
      fetchData()
    }

    return () => {
      isMounted = false
    }
  }, [path])

  return { data, loading, error }
}

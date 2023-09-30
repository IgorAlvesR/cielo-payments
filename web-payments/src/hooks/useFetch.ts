import { useState, useEffect } from 'react'

export type FetchResponse<T> = {
  response: T | null
  loading: boolean
  error: Error | null
}

export default function useFetch<T>(
  serviceFn: () => Promise<T>,
): FetchResponse<T> {
  let isMounted = true
  const [response, setResponse] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceResponse = await serviceFn()
        setResponse(serviceResponse)
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
  }, [])

  return { response, loading, error }
}

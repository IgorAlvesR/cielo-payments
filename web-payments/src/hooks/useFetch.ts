import { useState, useEffect } from 'react'

export default function useFetch(serviceFn: () => unknown) {
  let isMounted = true
  const [data, setData] = useState<unknown | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serviceFn()
        setData(response)
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

  return { data, loading, error }
}

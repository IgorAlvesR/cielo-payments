import { SkeletonTable } from '@/components/SkeletonTable'
import { TableTransactions } from '@/components/TableTransactions'

import useFetch from '@/hooks/useFetch'
import { Transaction } from '@/types'

export function Home() {
  const { data, loading, error } = useFetch('/items')
  const transactions = data as Transaction[]

  if (loading) {
    return <SkeletonTable />
  }

  if (error) {
    return (
      <p className="text-center text-zinc-600 dark:text-zinc-300">
        Não foi possível carregar o histórico de transações.
      </p>
    )
  }

  if (!loading && !!transactions?.length) {
    return (
      <section>
        <TableTransactions transactions={transactions} />
      </section>
    )
  }
}

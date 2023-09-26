import { TableTransactions } from '@/components/TableTransactions'

export function Home() {
  return (
    <section>
      <TableTransactions transactions={[]} />
    </section>
  )
}

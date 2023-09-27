import { ModalTransactionDetails } from '@/components/ModalTransactionDetails'
import { SkeletonTable } from '@/components/SkeletonTable'
import { TableTransactions } from '@/components/TableTransactions'

import useFetch from '@/hooks/useFetch'
import { Transaction } from '@/types'
import { useState } from 'react'

export function Home() {
  const [openModalTransaction, setOpenModalTransaction] = useState(false)
  const { data, loading, error } = useFetch('/items')
  const transactions = data as Transaction[]
  const [transactionDetails, setTransactionDetails] = useState<Transaction>()

  function openTransactionModalDetails(transaction: Transaction) {
    setTransactionDetails(transaction)
    setOpenModalTransaction(true)
  }

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
        <TableTransactions
          transactions={transactions}
          onClickRow={openTransactionModalDetails}
        />

        {transactionDetails && (
          <ModalTransactionDetails
            open={openModalTransaction}
            transaction={transactionDetails}
            setOpen={(current: boolean) => setOpenModalTransaction(!current)}
          />
        )}
      </section>
    )
  }
}

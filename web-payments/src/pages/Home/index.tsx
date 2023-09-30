import { CardSummary } from '@/components/CardSummary'
import { ModalTransactionDetails } from '@/components/ModalTransactionDetails'
import { Pagination } from '@/components/Paginations'
import { SkeletonPagination } from '@/components/SkeletonPagination'
import { TableTransactions } from '@/components/TableTransactions'
import useFetch from '@/hooks/useFetch'
import {
  GetPaginationResponse,
  GetSummaryResponse,
  GetTransactionResponse,
  getPagination,
  getSummary,
  getTransactions,
} from '@/services/transactions'
import { Transaction } from '@/types'
import { useState } from 'react'

export function Home() {
  const [openModalTransaction, setOpenModalTransaction] = useState(false)
  const [transactionDetails, setTransactionDetails] = useState<Transaction>()

  const transactionsResponse = useFetch<GetTransactionResponse>(getTransactions)
  const paginationResponse = useFetch<GetPaginationResponse>(getPagination)
  const transactionSummaryResponse = useFetch<GetSummaryResponse>(getSummary)

  function openTransactionModalDetails(transaction: Transaction) {
    setTransactionDetails(transaction)
    setOpenModalTransaction(true)
  }

  const PaginationContainer = () => {
    if (paginationResponse.loading) {
      return <SkeletonPagination />
    }
    if (paginationResponse.response?.data) {
      return <Pagination data={paginationResponse.response.data.pagination} />
    }
    return null
  }

  if (transactionsResponse.error) {
    return (
      <p className="text-center text-zinc-600 dark:text-zinc-300">
        Não foi possível carregar o histórico de transações.
      </p>
    )
  }

  return (
    <section className="space-y-12 mt-44 sm:mt-auto">
      <CardSummary
        data={transactionSummaryResponse.response?.data.summary}
        loading={transactionSummaryResponse.loading}
      />
      <TableTransactions
        loading={transactionSummaryResponse.loading}
        transactions={transactionsResponse.response?.data.transactions}
        onClickRow={openTransactionModalDetails}
      >
        <PaginationContainer />
      </TableTransactions>
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

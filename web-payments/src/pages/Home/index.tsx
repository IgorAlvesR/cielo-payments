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

  const transactionsResponse = useFetch(getTransactions)
  const paginationResponse = useFetch(getPagination)
  const transactionSummaryResponse = useFetch(getSummary)

  const transactionsTransformed = transactionsResponse.data
    ? transformTransactionResponseFetch(transactionsResponse.data)
    : null

  const paginatioonTransformed = paginationResponse.data
    ? transformPaginationResponseFetch(paginationResponse.data)
    : null

  const transactionSummaryTransformed = transactionSummaryResponse.data
    ? transformSummaryResponseFetch(transactionSummaryResponse.data)
    : null

  function transformTransactionResponseFetch(data: unknown) {
    const response = data as GetTransactionResponse
    return response.data.transactions
  }

  function transformPaginationResponseFetch(data: unknown) {
    const response = data as GetPaginationResponse
    return response.data.pagination
  }

  function transformSummaryResponseFetch(data: unknown) {
    const response = data as GetSummaryResponse
    return response.data.summary
  }

  function openTransactionModalDetails(transaction: Transaction) {
    setTransactionDetails(transaction)
    setOpenModalTransaction(true)
  }

  const PaginationContainer = () => {
    if (paginationResponse.loading) {
      return <SkeletonPagination />
    }
    if (paginatioonTransformed) {
      return <Pagination data={paginatioonTransformed} />
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
        data={transactionSummaryTransformed}
        loading={transactionSummaryResponse.loading}
      />
      <TableTransactions
        loading={transactionSummaryResponse.loading}
        transactions={transactionsTransformed}
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

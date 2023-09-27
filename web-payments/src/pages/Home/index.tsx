import { CardSummary } from '@/components/CardSummary'
import { ModalTransactionDetails } from '@/components/ModalTransactionDetails'
import { Pagination } from '@/components/Paginations'
import { SkeletonPagination } from '@/components/SkeletonPagination'
import { SkeletonTable } from '@/components/SkeletonTable'
import { TableTransactions } from '@/components/TableTransactions'
import useFetch from '@/hooks/useFetch'
import {
  getPagination,
  getPaginationResponse,
  getSummary,
  getSummaryResponse,
  getTransactionResponse,
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
    const response = data as getTransactionResponse
    return response.data.transactions
  }

  function transformPaginationResponseFetch(data: unknown) {
    const response = data as getPaginationResponse
    return response.data.pagination
  }

  function transformSummaryResponseFetch(data: unknown) {
    const response = data as getSummaryResponse
    return response.data.summary
  }

  function openTransactionModalDetails(transaction: Transaction) {
    setTransactionDetails(transaction)
    setOpenModalTransaction(true)
  }

  const PaginationRoot = () => {
    if (paginationResponse.loading) {
      return <SkeletonPagination />
    }
    if (paginatioonTransformed) {
      return <Pagination data={paginatioonTransformed} />
    }
    return null
  }

  if (transactionsResponse.loading) {
    return <SkeletonTable />
  }

  if (transactionsResponse.error) {
    return (
      <p className="text-center text-zinc-600 dark:text-zinc-300">
        Não foi possível carregar o histórico de transações.
      </p>
    )
  }

  if (!transactionsResponse.loading && !!transactionsTransformed?.length) {
    return (
      <section className="space-y-4">
        {transactionSummaryTransformed && (
          <CardSummary
            data={transactionSummaryTransformed}
            loading={transactionSummaryResponse.loading}
          />
        )}
        <TableTransactions
          transactions={transactionsTransformed}
          onClickRow={openTransactionModalDetails}
        >
          <PaginationRoot />
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
}

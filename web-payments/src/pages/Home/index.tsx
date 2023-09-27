import { ModalTransactionDetails } from '@/components/ModalTransactionDetails'
import { Pagination } from '@/components/Paginations'
import { SkeletonPagination } from '@/components/SkeletonPagination'
import { SkeletonTable } from '@/components/SkeletonTable'
import { TableTransactions } from '@/components/TableTransactions'
import useFetch from '@/hooks/useFetch'
import {
  getPagination,
  getPaginationResponse,
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

  const transactionsTransformed = transactionsResponse.data
    ? transformTransactionResponseFetch(transactionsResponse.data)
    : null

  const paginatioonTransformed = paginationResponse.data
    ? transformPaginationResponseFetch(paginationResponse.data)
    : null

  function transformTransactionResponseFetch(data: unknown) {
    const response = data as getTransactionResponse
    return response.data.transactions
  }

  function transformPaginationResponseFetch(data: unknown) {
    const response = data as getPaginationResponse
    return response.data.pagination
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
      <section>
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

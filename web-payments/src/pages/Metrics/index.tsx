import { PieChartBrand } from '@/components/PieChartBrand'
import { PieChartStatus } from '@/components/PieChartStatus'
import useFetch from '@/hooks/useFetch'
import {
  getTransactionResponse,
  getTransactions,
} from '@/services/transactions'
import { CardBrandsReport, CardStatusReport, Transaction } from '@/types'

export function Metrics() {
  function getBrandsFilter(transactions: Transaction[]) {
    const totalizers: CardBrandsReport = {}

    transactions.forEach((transaction) => {
      if (!totalizers[transaction.cardBrand]) {
        totalizers[transaction.cardBrand] = 1
      } else {
        totalizers[transaction.cardBrand] += 1
      }
    })
    return totalizers
  }

  function getStatusFilter(transactions: Transaction[]) {
    const totalizers: CardStatusReport = {}

    transactions.forEach((transaction) => {
      if (!totalizers[transaction.status]) {
        totalizers[transaction.status] = 1
      } else {
        totalizers[transaction.status] += 1
      }
    })
    return totalizers
  }

  const transactionResponse = useFetch(getTransactions)

  if (transactionResponse.error) {
    return (
      <div className="text-zinc-600 dark:text-zinc-200 p-6 shadow-sm border border-zinc-100 dark:border-none rounded-sm dark:bg-zinc-900">
        Não há transações registradas.
      </div>
    )
  }

  const response = transactionResponse.data as getTransactionResponse

  const cardBrandsReport = transactionResponse?.data
    ? getBrandsFilter(response.data.transactions)
    : null

  const cardStatusReport = transactionResponse.data
    ? getStatusFilter(response.data.transactions)
    : null

  return (
    <div className="rounded-sm bg-white shadow-sm border dark:border-none dark:bg-zinc-800  py-12 px-4 sm:px-8 flex justify-center gap-6 flex-col lg:flex-row ">
      <div className="flex-1 shadow-sm border border-zinc-50 p-4 bg-zinc-100  rounded-sm flex justify-center items-center dark:bg-white dark:border-none ">
        <PieChartBrand
          data={cardBrandsReport}
          loading={transactionResponse.loading}
        />
      </div>

      <div className="flex-1 shadow-sm border border-zinc-50 p-4 bg-zinc-100  rounded-sm flex justify-center items-center dark:bg-white dark:border-none ">
        <PieChartStatus
          data={cardStatusReport}
          loading={transactionResponse.loading}
        />
      </div>
    </div>
  )
}

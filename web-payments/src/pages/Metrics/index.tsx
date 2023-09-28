import { PieChartBrand } from '@/components/PieChartBrand'
import { PieChartStatus } from '@/components/PieChartStatus'
import useFetch from '@/hooks/useFetch'
import {
  getTransactionResponse,
  getTransactions,
} from '@/services/transactions'
import {
  BrandsCount,
  StatusCount,
  StatusTransaction,
  Transaction,
} from '@/types'

export function Metrics() {
  function getBrandsFilter(transactions: Transaction[]): BrandsCount {
    const brands = {
      MASTERCARD: [] as string[],
      VISA: [] as string[],
      ELO: [] as string[],
      HIPERCARD: [] as string[],
    }

    transactions.forEach((transaction) => {
      if (transaction.cardBrand === 'Mastercard') {
        brands.MASTERCARD.push(transaction.cardBrand)
      } else if (transaction.cardBrand === 'Visa') {
        brands.VISA.push(transaction.cardBrand)
      } else if (transaction.cardBrand === 'Hipercard') {
        brands.HIPERCARD.push(transaction.cardBrand)
      } else {
        brands.ELO.push(transaction.cardBrand)
      }
    })

    return {
      mastercardCount: brands.MASTERCARD.length,
      visaCount: brands.VISA.length,
      eloCount: brands.ELO.length,
      hipercardCount: brands.MASTERCARD.length,
    }
  }

  function getStatusFilter(transactions: Transaction[]): StatusCount {
    const status = {
      APPROVED: [] as string[],
      DENIED: [] as string[],
      PENDING: [] as string[],
    }

    transactions.forEach((transaction) => {
      if (transaction.status === StatusTransaction.DENIED) {
        status.DENIED.push(transaction.status)
      } else if (transaction.status === StatusTransaction.PENDING) {
        status.PENDING.push(transaction.status)
      } else {
        status.APPROVED.push(transaction.status)
      }
    })

    return {
      approvedCount: status.APPROVED.length,
      deniedCount: status.DENIED.length,
      pending: status.PENDING.length,
    }
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

  const brandsCount = transactionResponse?.data
    ? getBrandsFilter(response.data.transactions)
    : null

  const statusCount = transactionResponse.data
    ? getStatusFilter(response.data.transactions)
    : null

  return (
    <div className="rounded-sm bg-white shadow-sm border dark:border-none dark:bg-zinc-800  py-8 px-12 flex justify-center gap-8 ">
      <div className="flex-1 shadow-sm border border-zinc-50 p-4 bg-zinc-100  rounded-sm flex justify-center items-center dark:bg-white dark:border-none ">
        <PieChartBrand
          data={brandsCount}
          loading={transactionResponse.loading}
        />
      </div>

      <div className="flex-1 shadow-sm border border-zinc-50 p-4 bg-zinc-100  rounded-sm flex justify-center items-center dark:bg-white dark:border-none ">
        <PieChartStatus
          data={statusCount}
          loading={transactionResponse.loading}
        />
      </div>
    </div>
  )
}

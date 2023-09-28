import { PieChartBrand } from '@/components/PieChartBrand'
import useFetch from '@/hooks/useFetch'
import {
  getTransactionResponse,
  getTransactions,
} from '@/services/transactions'
import { BrandsCount, Transaction } from '@/types'

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

export function Metrics() {
  const transactionResponse = useFetch(getTransactions)

  if (transactionResponse.error) {
    return (
      <div className="text-zinc-600 dark:text-zinc-200 p-6 shadow-sm border border-zinc-100 dark:border-none rounded-sm dark:bg-zinc-900">
        Não há transações registradas.
      </div>
    )
  }

  let brandsCount
  if (transactionResponse.data) {
    const response = transactionResponse.data as getTransactionResponse
    brandsCount = getBrandsFilter(response.data.transactions)
  }

  return (
    <div className="rounded-sm bg-white shadow-sm border dark:border-none dark:bg-zinc-800  py-8 px-12 flex flex-col gap-8 ">
      <div className="shadow-sm border border-zinc-50 p-4 bg-zinc-100 max-w-md rounded-sm flex justify-center items-center dark:bg-white dark:border-none ">
        <PieChartBrand
          data={brandsCount}
          loading={transactionResponse.loading}
        />
      </div>
    </div>
  )
}

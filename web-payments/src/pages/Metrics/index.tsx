import { PieChartBrand } from '@/components/PieChartBrand'
import { PieChartStatus } from '@/components/PieChartStatus'
import { useTheme } from '@/components/ThemeProvider'
import useFetch from '@/hooks/useFetch'
import {
  GetTransactionResponse,
  getTransactions,
} from '@/services/transactions'
import { CardBrandsReport, StatusReport, Transaction } from '@/types'

export function Metrics() {
  const { theme } = useTheme()
  const labelColorPieChart = theme === 'dark' ? '#fff' : '#000'

  const transactionResponse = useFetch(getTransactions)

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
    const totalizers: StatusReport = {}

    transactions.forEach((transaction) => {
      if (!totalizers[transaction.status]) {
        totalizers[transaction.status] = 1
      } else {
        totalizers[transaction.status] += 1
      }
    })
    return totalizers
  }

  if (transactionResponse.error) {
    return (
      <p className="text-center text-zinc-600 dark:text-zinc-300">
        Não foi possível carregar o histórico de transações.
      </p>
    )
  }

  const response = transactionResponse.data as GetTransactionResponse

  const cardBrandsReport = transactionResponse?.data
    ? getBrandsFilter(response.data.transactions)
    : null

  const statusReport = transactionResponse.data
    ? getStatusFilter(response.data.transactions)
    : null

  return (
    <div className="border pb-12 pt-4">
      <h1 className="px-4  sm:px-8 text-md sm:text-lg font-semibold">
        Análise do histórico de transações
      </h1>
      <p className="px-4 sm:px-8 text-xs text-zinc-400 mb-8">
        Nessa visão você tem acesso as informações condensadas do histórico de
        transações.
      </p>

      <div className="rounded-sm dark:border-none  px-4 sm:px-8 flex justify-center gap-6 flex-col lg:flex-row ">
        <div className="flex-1 shadow-sm border border-zinc-50 bg-zinc-100 rounded-sm flex justify-center items-center dark:bg-zinc-800 dark:border-none">
          <PieChartBrand
            data={cardBrandsReport}
            loading={transactionResponse.loading}
            labelColor={labelColorPieChart}
          />
        </div>

        <div className="flex-1 shadow-sm border border-zinc-50 p-4 bg-zinc-100  rounded-sm flex justify-center items-center dark:bg-zinc-800 dark:border-none ">
          <PieChartStatus
            data={statusReport}
            loading={transactionResponse.loading}
            labelColor={labelColorPieChart}
          />
        </div>
      </div>
    </div>
  )
}

import { Summary } from '@/types'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from './ui/card'
import { convertToCurrencyBRL } from '@/lib/convert'
import { CardSkeleton } from './CardSkeleton'

interface CardSummaryProps {
  data?: Summary | null
  loading: boolean
}

export function CardSummary({ data, loading }: CardSummaryProps) {
  if (loading) {
    return <CardSkeleton />
  }

  if (!data) {
    return null
  }

  return (
    <Card className="bg-background sm:max-w-sm w-full dark:bg-zinc-900 shadow-none rounded-sm">
      <CardHeader>
        <CardTitle>Resumo das transações</CardTitle>
        <CardDescription>
          Nesse card você tem um resumo geral das transações do período
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-b-zinc-100 dark:border-b-zinc-800">
            <p className="text-zinc-500 text-md flex flex-col ">
              <span className="font-semibold text-green-600">
                {convertToCurrencyBRL(data.totalAmount)}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200">
                Valor total
              </span>
            </p>

            <p className="text-zinc-500 text-md flex flex-col text-end">
              <span className="font-semibold dark:text-foreground">
                {data.totalQuantity}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200 ">
                Quantidade total
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-b-zinc-100 dark:border-b-zinc-800">
            <p className="text-zinc-500 text-md flex flex-col">
              <span className="font-semibold text-green-600 ">
                {convertToCurrencyBRL(data.totalNetAmount)}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200">
                Valor Líquido
              </span>
            </p>

            <p className="text-zinc-500 text-md flex flex-col text-end">
              <span className="font-semibold text-green-600">
                {convertToCurrencyBRL(data.totalAverageAmount)}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200">
                Valor médio
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between border-b-zinc-100 dark:border-b-zinc-800">
            <p className="text-zinc-500 text-md flex flex-col">
              <span className="font-semibold dark:text-foreground ">
                {new Date(data.initialDate).toLocaleDateString()}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200">
                Data inicial
              </span>
            </p>

            <p className="text-zinc-500 text-md flex flex-col text-end">
              <span className="font-semibold dark:text-foreground">
                {new Date(data.finalDate).toLocaleDateString()}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-200">
                Data final
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

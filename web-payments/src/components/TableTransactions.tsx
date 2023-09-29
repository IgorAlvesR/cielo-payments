import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { convertToCurrencyBRL } from '@/lib/convert'
import { Transaction } from '@/types'
import { ReactNode } from 'react'
import { SkeletonTable } from './SkeletonTable'

interface TableTransactionsProps {
  transactions?: Transaction[] | null
  children?: ReactNode
  loading?: boolean
  onClickRow: (transaction: Transaction) => void
}

function getColorStatus(status: string): string {
  const colors: Record<string, string> = {
    Aprovada: 'text-green-600',
    Negada: 'text-red-500',
    Pendente: 'text-yellow-500',
  }
  return colors[status]
}

export function TableTransactions({
  transactions,
  children,
  loading,
  onClickRow,
}: TableTransactionsProps) {
  if (loading) {
    return <SkeletonTable />
  }

  if (!transactions?.length) {
    return (
      <div className="text-zinc-600 dark:text-zinc-200 p-6 shadow-sm border border-zinc-100 dark:border-none rounded-sm dark:bg-zinc-900">
        Não há transações registradas.
      </div>
    )
  }

  return (
    <div className="p-6 shadow-sm border border-zinc-150 dark:border-none rounded-sm dark:bg-zinc-900">
      <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-50 pb-4 pt-2 px-4">
        Histórico de transações
      </h1>
      <Table
        aria-label="Tabela de histórico de transações"
        className="dark:text-zinc-50 flex w-full flex-col px-4 text-zinc-700 font-medium"
      >
        <TableHeader className="flex-1 flex  justify-between">
          <TableRow
            data-testid="table-transaction-header-row"
            className="flex-1 flex justify-between sm:items-center flex-col sm:flex-row"
          >
            <TableHead className="flex-1">Data</TableHead>
            <TableHead className="flex-1">Tipo de pagamento</TableHead>
            <TableHead className="flex-1">Valor bruto</TableHead>
            <TableHead className="flex-1">Valor líquido</TableHead>
            <TableHead className="flex-1">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="max-h-96 w-full  leading-8">
          {transactions.map((transaction) => (
            <TableRow
              data-testid="table-transaction-row"
              onClick={() => onClickRow(transaction)}
              key={transaction.id + transaction.terminal}
              className="cursor-pointer flex-1 flex justify-between sm:items-center flex-col items-center sm:flex-row"
            >
              <TableCell className="flex-1">
                {new Date(transaction.date).toLocaleDateString()}
              </TableCell>

              <TableCell className="flex-1">
                {transaction.paymentType}
              </TableCell>

              <TableCell className="flex-1">
                {convertToCurrencyBRL(transaction.grossAmount)}
              </TableCell>

              <TableCell className="flex-1">
                {convertToCurrencyBRL(transaction.netAmount)}
              </TableCell>

              <TableCell
                className={`flex-1 font-semibold ${getColorStatus(
                  transaction.status,
                )}`}
              >
                {transaction.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {children}
    </div>
  )
}

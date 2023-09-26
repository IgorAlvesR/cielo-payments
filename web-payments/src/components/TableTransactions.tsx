import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { convertBRL } from '@/lib/convert'
import { Transaction } from '@/types'

interface TableTransactionsProps {
  transactions: Transaction[]
}

export function TableTransactions({ transactions }: TableTransactionsProps) {
  if (!transactions.length) {
    return (
      <div className="text-zinc-600 dark:text-zinc-200 p-6 shadow-sm border border-zinc-100 dark:border-none rounded-sm dark:bg-zinc-900">
        Não há transações registradas.
      </div>
    )
  }

  return (
    <div className="p-6 shadow-sm border border-zinc-100 dark:border-none rounded-sm dark:bg-zinc-900">
      <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-50 pb-4 pt-2 px-4">
        Histórico de transações
      </h1>
      <Table className="dark:text-zinc-50 flex w-full flex-col max-h-96 px-4">
        <TableHeader className="flex-1 flex  justify-between">
          <TableRow className="flex-1 flex justify-between">
            <TableHead className="flex-1">Data</TableHead>
            <TableHead className="flex-1">Tipo de pagamento</TableHead>
            <TableHead className="flex-1">Valor bruto</TableHead>
            <TableHead className="flex-1">Valor líquido</TableHead>
            <TableHead className="flex-1">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              className="flex-1 flex justify-between"
            >
              <TableCell className="flex-1">
                {transaction.paymentType}
              </TableCell>

              <TableCell className="flex-1">
                {new Date(transaction.date).toLocaleDateString()}
              </TableCell>

              <TableCell className="flex-1">
                {convertBRL(transaction.grossAmount)}
              </TableCell>

              <TableCell className="flex-1">
                {convertBRL(transaction.netAmount)}
              </TableCell>

              <TableCell className="flex-1">{transaction.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

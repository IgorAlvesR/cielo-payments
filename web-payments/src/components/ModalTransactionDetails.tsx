import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Transaction } from '@/types'

interface ModalTransactionDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  transaction: Transaction
}

export function ModalTransactionDetails({
  open,
  setOpen,
  transaction,
}: ModalTransactionDetailsProps) {
  return (
    <Dialog modal open={open} onOpenChange={(value) => setOpen(!value)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da transação</DialogTitle>
          <DialogDescription>
            Veja mais informações sobre a transação realizada
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[500px]  bg-zinc-100 px-4 rounded-md mt-8 p-4 divide-y divide-y-zinc-300 dark:divide-zinc-700 space-y-6 dark:bg-zinc-800 dark:text-zinc-50">
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Canal:
            </span>
            <span className=" text-zinc-600 font-semibold dark:font-medium  dark:text-zinc-50 ">
              {transaction.channel}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              ID do comerciante:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.merchantId}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Ordem de pagamento:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50">
              {transaction.paymentNode}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Cnpj Raiz:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.cnpjRoot}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Bandeira do cartão:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.cardBrand}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Código de autorização:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.authorizationCode}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Nº parcial do cartão:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.truncatedCardNumber}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Nº da Máquina:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.terminal}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Taxa de administração:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.administrationFee}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Código do canal:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.channelCode}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Canal:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.channel}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Quantidade mínima de MDRA:
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.minimumMDRAmmount}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Valor do imposto mdr
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.mdrTaxAmount}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Valor do imposto mdr
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.mdrTaxAmount}
            </span>
          </section>
          <section className="flex items-center justify-between">
            <span className="text-zinc-400 dark:text-zinc-50 font-semibold dark:font-medium">
              Valor da taxa mdr
            </span>
            <span className="text-zinc-600 font-semibold dark:font-medium dark:text-zinc-50 ">
              {transaction.mdrFeeAmount}
            </span>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

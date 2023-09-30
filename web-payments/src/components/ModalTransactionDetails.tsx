import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { convertToCurrencyBRL } from '@/lib/convert'
import { Transaction } from '@/types'

interface ModalTransactionDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  transaction: Transaction
}

interface ModalDetailProps {
  label: string
  value: string | number
}

function ModalDetail({ label, value }: ModalDetailProps) {
  return (
    <section className="flex items-center justify-between text-xs sm:text-sm">
      <span className="text-zinc-700 dark:text-zinc-50  dark:font-medium">
        {label}
      </span>
      <span className=" text-zinc-600 font-semibold dark:font-medium  dark:text-zinc-50 ">
        {value}
      </span>
    </section>
  )
}

export function ModalTransactionDetails({
  open,
  setOpen,
  transaction,
}: ModalTransactionDetailsProps) {
  return (
    <Dialog modal open={open} onOpenChange={(value) => setOpen(!value)}>
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>Detalhes da transação</DialogTitle>
          <DialogDescription>
            Veja mais informações sobre a transação realizada
          </DialogDescription>
        </DialogHeader>

        <ModalDetail label="Canal:" value={transaction.channel} />
        <ModalDetail
          label="ID do comerciante:"
          value={transaction.merchantId}
        />
        <ModalDetail
          label="Ordem de pagamento:"
          value={transaction.paymentNode}
        />
        <ModalDetail label="Cnpj Raiz:" value={transaction.cnpjRoot} />
        <ModalDetail
          label="Código de autorização:"
          value={transaction.authorizationCode}
        />
        <ModalDetail
          label="Nº parcial do cartão:"
          value={transaction.truncatedCardNumber}
        />
        <ModalDetail
          label="Taxa de administração:"
          value={transaction.administrationFee}
        />
        <ModalDetail label="Canal:" value={transaction.channel} />
        <ModalDetail
          label="Quantidade mínima de MDRA:"
          value={transaction.minimumMDRAmmount}
        />
        <ModalDetail
          label="Valor do imposto MDR:"
          value={convertToCurrencyBRL(transaction.mdrTaxAmount)}
        />
        <ModalDetail
          label=" Valor da taxa MDR:"
          value={convertToCurrencyBRL(transaction.mdrFeeAmount)}
        />
      </DialogContent>
    </Dialog>
  )
}

import { Pagination as PaginationType } from '@/types'

interface PaginationProps {
  data: PaginationType
}

export function Pagination({ data }: PaginationProps) {
  return (
    <div
      data-testid="pagination-test"
      className="flex gap-3 justify-center mt-12"
    >
      {data.pageNumber > 1 && (
        <span className="font-semibold bg-zinc-100 px-3 py-2 rounded-sm text-zinc-500  cursor-pointer dark:bg-zinc-700 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-800">
          {data.pageNumber - 1}
        </span>
      )}
      <span className="font-semibold bg-zinc-700 px-3 py-2 rounded-sm text-zinc-50  cursor-pointer dark:bg-zinc-100 dark:text-zinc-500 hover:bg-zinc-800 dark:hover:bg-zinc-200">
        {data.pageNumber}
      </span>

      {data.pageNumber < data.numPages && (
        <>
          <span className="font-semibold bg-zinc-100 px-3 py-2 rounded-sm text-zinc-500  cursor-pointer dark:bg-zinc-700 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            {data.pageNumber + 1}
          </span>
          <span className="font-semibold bg-zinc-100 px-3 py-2 rounded-sm text-zinc-500  cursor-pointer dark:bg-zinc-700 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            ... {data.numPages}
          </span>
        </>
      )}
    </div>
  )
}

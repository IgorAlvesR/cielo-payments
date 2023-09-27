import { Skeleton } from './ui/skeleton'

export function CardSkeleton() {
  return (
    <div>
      <Skeleton className="h-12 sm:max-w-sm w-full mb-2" />
      <Skeleton className="h-4 sm:max-w-sm w-full" />
      <div className="flex mt-2 justify-between gap-6 sm:max-w-sm w-full">
        <Skeleton className="h-12 w-2/4 " />
        <Skeleton className="h-12  w-2/4 " />
      </div>
      <div className="flex mt-2 justify-between gap-6 sm:max-w-sm w-full">
        <Skeleton className="h-12 w-2/4 " />
        <Skeleton className="h-12  w-2/4 " />
      </div>
      <div className="flex mt-2 justify-between gap-6 sm:max-w-sm w-full">
        <Skeleton className="h-12 w-2/4 " />
        <Skeleton className="h-12  w-2/4 " />
      </div>
    </div>
  )
}

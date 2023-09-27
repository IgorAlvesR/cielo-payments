import { Skeleton } from './ui/skeleton'

export function SkeletonPagination() {
  return (
    <div className="flex gap-3 justify-center mt-12">
      <Skeleton className="w-8 h-8" />
      <Skeleton className="w-8 h-8" />
      <Skeleton className="w-8 h-8" />
      <Skeleton className="w-8 h-8" />
      <Skeleton className="w-8 h-8" />
      <Skeleton className="w-8 h-8" />
    </div>
  )
}

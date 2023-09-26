import { Skeleton } from './ui/skeleton'

export function SkeletonTable() {
  return (
    <div className="h-96 px-4">
      <div className="flex justify-center gap-3 mb-2">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
      </div>
    </div>
  )
}

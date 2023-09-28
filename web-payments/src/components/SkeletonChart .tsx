import { Skeleton } from './ui/skeleton'

export function SkeletonChart() {
  return (
    <div className="max-w-md bg-zinc-100">
      <div className="w-full flex justify-center">
        <Skeleton className="h-2 w-1/2 mb-6" />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Skeleton className="h-2 w-1/4" />
        <Skeleton className="h-2 w-1/4" />
        <Skeleton className="h-2 w-1/4" />
        <Skeleton className="h-2 w-1/4" />
      </div>
      <div className="flex justify-center mt-6">
        <Skeleton className="h-48 w-48 rounded-full text-center" />
      </div>
    </div>
  )
}

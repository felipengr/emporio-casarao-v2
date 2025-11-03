import { Skeleton } from '@/components/ui/skeleton';

export function SobreSkeleton() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Skeleton className="h-[400px] md:h-[500px] rounded-lg" />
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
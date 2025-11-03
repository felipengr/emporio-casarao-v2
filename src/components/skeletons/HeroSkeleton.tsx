import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden mt-24 bg-muted">
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <Skeleton className="h-16 md:h-24 w-full md:w-3/4" />
          <Skeleton className="h-8 md:h-12 w-full md:w-2/3" />
          <Skeleton className="h-12 w-48" />
        </div>
      </div>
    </section>
  );
}
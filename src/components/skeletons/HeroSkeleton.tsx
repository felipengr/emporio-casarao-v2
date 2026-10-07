import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <>
      <section className="container grid items-center gap-8 pt-6 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,44%)] md:gap-12 md:pt-8 md:pb-14">
        <div className="space-y-6 md:space-y-8">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-28 md:h-32 w-full" />
          <Skeleton className="h-12 w-full max-w-md" />
          <Skeleton className="h-12 w-60 rounded-full" />
        </div>
        <Skeleton className="aspect-[342/245] md:aspect-[554/460] rounded-[20px]" />
      </section>
      <div className="h-[70px] bg-card" />
    </>
  );
}

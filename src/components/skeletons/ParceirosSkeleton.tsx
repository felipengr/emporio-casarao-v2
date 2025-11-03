import { Skeleton } from '@/components/ui/skeleton';

export function ParceirosSkeleton() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto mb-12" />
        
        <div className="flex gap-16 justify-center py-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-24 w-40 flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
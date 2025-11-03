import { Skeleton } from '@/components/ui/skeleton';

export function GaleriaSkeleton() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <Skeleton className="h-12 w-64 mx-auto mb-12" />
        
        <div className="relative max-w-4xl mx-auto">
          <Skeleton className="aspect-[4/3] md:aspect-[16/9] rounded-lg" />
          
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-2 w-2 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
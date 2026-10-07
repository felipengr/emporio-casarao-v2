import { Skeleton } from "@/components/ui/skeleton";

export function ProdutosSkeleton() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="mt-3 h-10 w-72" />
        <div className="mt-6 flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton className="aspect-[400/245] rounded-[20px]" />
              <Skeleton className="mt-4 h-7 w-3/4" />
              <Skeleton className="mt-2 h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

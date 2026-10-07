import { Skeleton } from "@/components/ui/skeleton";

export function GaleriaSkeleton() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="mt-3 h-10 w-80" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3 md:gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="aspect-[400/245] rounded-[20px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

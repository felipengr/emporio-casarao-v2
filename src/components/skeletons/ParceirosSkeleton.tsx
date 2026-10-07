import { Skeleton } from "@/components/ui/skeleton";

export function ParceirosSkeleton() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <Skeleton className="h-3 w-48" />
        <Skeleton className="mt-4 h-8 w-full max-w-2xl" />
      </div>
    </section>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function SobreSkeleton() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:rounded-3xl md:bg-card md:p-8">
          <Skeleton className="aspect-[4/3] rounded-[20px]" />
          <div className="space-y-4">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-24 w-full max-w-md" />
            <Skeleton className="h-12 w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

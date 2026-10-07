import { Skeleton } from "@/components/ui/skeleton";

export function ContatoSkeleton() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <Skeleton className="h-60 rounded-3xl" />
      </div>
    </section>
  );
}

import { HeroSkeleton } from '@/components/skeletons/HeroSkeleton';
import { SobreSkeleton } from '@/components/skeletons/SobreSkeleton';
import { ProdutosSkeleton } from '@/components/skeletons/ProdutosSkeleton';
import { GaleriaSkeleton } from '@/components/skeletons/GaleriaSkeleton';
import { ContatoSkeleton } from '@/components/skeletons/ContatoSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Skeleton className="h-12 w-32" />
          <div className="hidden md:flex items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-4 w-24" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-12 w-32 rounded-full hidden md:block" />
          </div>
        </div>
      </header>

      <main>
        <HeroSkeleton />
        <ProdutosSkeleton />
        <SobreSkeleton />
        <GaleriaSkeleton />
        <ContatoSkeleton />
      </main>

      {/* Footer Skeleton */}
      <footer className="container pt-4 pb-10">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="mt-3 h-4 w-40" />
      </footer>
    </>
  );
}
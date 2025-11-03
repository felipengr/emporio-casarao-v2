import { HeroSkeleton } from '@/components/skeletons/HeroSkeleton';
import { SobreSkeleton } from '@/components/skeletons/SobreSkeleton';
import { ProdutosSkeleton } from '@/components/skeletons/ProdutosSkeleton';
import { ParceirosSkeleton } from '@/components/skeletons/ParceirosSkeleton';
import { GaleriaSkeleton } from '@/components/skeletons/GaleriaSkeleton';
import { ContatoSkeleton } from '@/components/skeletons/ContatoSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/98 backdrop-blur-md shadow-sm">
        <div className="container flex h-24 items-center justify-between">
          <Skeleton className="h-16 w-40" />
          <div className="hidden md:flex items-center space-x-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-md hidden md:block" />
          </div>
        </div>
      </header>

      <main>
        <HeroSkeleton />
        <SobreSkeleton />
        <ProdutosSkeleton />
        <ParceirosSkeleton />
        <GaleriaSkeleton />
        <ContatoSkeleton />
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-secondary/50 border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
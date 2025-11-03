import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export function ContatoSkeleton() {
  return (
    <section className="py-20">
      <div className="container">
        <Skeleton className="h-12 w-64 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
              <Skeleton className="h-12 w-full mt-6" />
            </CardContent>
          </Card>
          
          <Skeleton className="h-[400px] rounded-lg" />
        </div>
      </div>
    </section>
  );
}
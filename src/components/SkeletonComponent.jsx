import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonComponent() {
  return (
    <>
      <div className="flex  flex-col space-y-2">
       {[...new Array(10)].map((_, index) =>
       
       <Skeleton key={index} className="h-[48px] w-[890px] " />
    )
       } 
          </div>
     
    </>
  );
}

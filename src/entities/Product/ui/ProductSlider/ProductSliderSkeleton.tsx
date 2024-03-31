import { Skeleton } from "@/shared/ui/Skeleton";

interface ProductSliderSkeletonProps {
  className? : string
}

export const ProductSliderSkeleton = ({
  className
}: ProductSliderSkeletonProps) => {
  return (
    <Skeleton className={className} height={460}/>
  );
};

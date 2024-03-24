import { Skeleton } from "@/shared/ui/Skeleton";

export const ProductCardSkeleton = () => {
  return (<div>
    <Skeleton height={290} />
    <Skeleton height={23} className='mt-4'/>
    <Skeleton height={29} className='mt-4'/>
  </div>);
};

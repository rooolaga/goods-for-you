import { Skeleton } from "@/shared/ui/Skeleton";

export const ProductFilterSkeleton = () => {
  return (
    <div>
      <Skeleton height={70} className="mb-7"/>
      <Skeleton height={23} className="mb-1"/>
      <Skeleton height={570} className="mb-8"/>
      <Skeleton height={67} className="mb-3" />
      <Skeleton height={67}/>
    </div>
  );
};

import { Skeleton } from "@/shared/ui/Skeleton";
import cls from "./ProductPage.module.scss";
import { range } from "lodash";
import { ProductSliderSkeleton } from "@/entities/Product";

interface ProductPageSkeletonProps {
  className? : string
}

export const ProductPageSkeleton = ({
  className
}: ProductPageSkeletonProps) => {
  return (
    <div className={className}>
      <Skeleton height={60} className="mb-13"/>

      <div className={cls.about_page}>
        <ProductSliderSkeleton />
        <div>
          <Skeleton className="mb-13" height={53}/>

          {range(8).map(item => (
            <Skeleton key={item} className="mb-6" height={24}/>
          ))}
        </div>
      </div>
    </div>
  );
};

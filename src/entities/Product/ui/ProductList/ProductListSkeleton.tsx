import cls from './ProductList.module.scss'
import { range } from "lodash";
import { ProductCardSkeleton } from "../ProductCard/ProductCardSkeleton";

interface ProductListSkeletonProps {
  count: number
}

export const ProductListSkeleton = ({
  count
}: ProductListSkeletonProps) => {
  return (
    <div className={cls.product_list}>
      {range(count).map((item) => (<ProductCardSkeleton key={item}/>))}
    </div>
  );
};

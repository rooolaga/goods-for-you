import { ProductCard } from '../ProductCard/ProductCard'
import cls from './ProductList.module.scss'
import { ProductListSkeleton, useGetAllProductsQuery } from "@/entities/Product";
import { QueryError } from "@/shared/ui/QueryError";
import { Button } from "@/shared/ui/Button";

export interface ProductListProps {
  limit: number;
  page: number;
  category: string | undefined;
  onLoadMore: (val) => void;
}

export const ProductList = ({
  limit,
  page,
  category,
  onLoadMore
}: ProductListProps) => {
  const {
    data,
    isLoading,
    error,
    isFetching
  } = useGetAllProductsQuery({skip: page * limit, category: category});

  const handleLoadMore = () => {
    onLoadMore(page + 1);
  }

  if (isLoading) return <ProductListSkeleton count={limit}/>
  if (error) return <QueryError error={error}/>

  return (
    <>
      <div className={cls.product_list}>
        {data.products.map((item) => (
          <ProductCard
            title={item.title}
            price={item.price}
            src={item.thumbnail}
            key={`${item.title}_${item.id}`}
          />
        ))}
      </div>

      {isFetching && page > 0 && <ProductListSkeleton count={limit}/>}

      {data.total > (page + 1) * limit && (
        <div className={cls.show_more}>
          <Button size='l' onClick={handleLoadMore}>
            Show more
          </Button>
        </div>
      )}
    </>
  )
}

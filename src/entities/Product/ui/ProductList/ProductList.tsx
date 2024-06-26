import { ProductCard } from '../ProductCard/ProductCard'
import cls from './ProductList.module.scss'
import { ProductListSkeleton, useGetAllProductsQuery } from "@/entities/Product";
import { QueryError } from "@/shared/ui/QueryError";
import { Button } from "@/shared/ui/Button";

export interface ProductListProps {
  limit: number;
  page: number;
  category: string | undefined;
  search: string | undefined;
  onLoadMore: (val) => void;
}

export const ProductList = ({
  limit,
  page,
  category = undefined,
  search = undefined,
  onLoadMore
}: ProductListProps) => {
  const {
    data,
    isLoading,
    error,
    isFetching
  } = useGetAllProductsQuery({limit, skip: page * limit, category, search});

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
            id={item.id}
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

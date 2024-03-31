import cls from './Catalog.module.scss'
import { ProductList, ProductFilter } from "@/entities/Product";
import { useState } from "react";

export const Catalog = () => {
  const [category, setCategory] = useState(undefined);
  const [page, setPage] = useState(0);

  const handleFilterReset = () => {
    setCategory(undefined);
    setPage(0);
  }

  const handleFilterApply = (value) => {
    setCategory(value);
    setPage(0);
  }

  const handleLoadMore = (value) => {
    setPage(value)
  }

  return (
    <div className={cls.catalog}>
      <ProductFilter onApply={handleFilterApply} onReset={handleFilterReset}/>
      <div>
        <ProductList category={category} page={page} onLoadMore={handleLoadMore} limit={9}/>
      </div>
    </div>
  )
}

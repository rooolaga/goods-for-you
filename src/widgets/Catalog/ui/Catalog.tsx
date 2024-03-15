import { CatalogFilter } from "@/features/Catalog"
import cls from './Catalog.module.scss'
import { ProductList } from "@/entities/Product"

export const Catalog = () => {
  return (
    <div>
      <div className={cls.catalog}>
        <CatalogFilter />
        <ProductList />
      </div>
    </div>
  )
}

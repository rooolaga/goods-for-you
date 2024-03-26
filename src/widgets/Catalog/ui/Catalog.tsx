import { CatalogFilter } from "@/features/Catalog"
import cls from './Catalog.module.scss'
import { ProductList } from "@/entities/Product"
import { Button } from "@/shared/ui/Button"

export const Catalog = () => {
  return (
    <div className={cls.catalog}>
      <CatalogFilter />
      <div>
        <ProductList />
        <div className={cls.show_more}>
          <Button size='l'>Show more</Button>
        </div>
      </div>
    </div>
  )
}

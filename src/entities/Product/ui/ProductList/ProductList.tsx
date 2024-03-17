import { ProductCard } from '../ProductCard/ProductCard'
import cls from './ProductList.module.scss'

import products from '@/data/Products.json'

export const ProductList = () => {
  return (
    <div className={cls.product_list}>
      {products.map((item, index) => (
        <ProductCard 
          title={item.title}
          price={item.price}
          key={`${item.title}_${index}`}
        />
      ))}
    </div>
  )
}

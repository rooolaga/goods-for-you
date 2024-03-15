import { ProductCard } from '../ProductCard/ProductCard'
import cls from './ProductList.module.scss'

const items = [
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
  {title: 'Nike Air Force 1 \'07 QS', price: 100},
]

export const ProductList = () => {
  return (
    <div className={cls.product_list}>
      {items.map((item, index) => (
        <ProductCard 
          title={item.title}
          price={item.price}
          key={`${item.title}_${index}`}
        />
      ))}
      
    </div>
  )
}

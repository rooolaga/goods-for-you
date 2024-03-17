import sneakers from '@/shared/assets/images/sneakers.jpg'
import cls from './ProductCard.module.scss'
export interface ProductCardProps {
  title: string;
  price: number;
}

export const ProductCard = ({
  title,
  price
}: ProductCardProps) => {
  return (
    <div>
      <img src={sneakers} className={cls.img} />
      <h3 className={cls.name}>{title}</h3>
      <div className={cls.price}>{price} $</div>
    </div>
  );
}
import cls from './ProductCard.module.scss'
import { Link } from "react-router-dom";
export interface ProductCardProps {
  id: number
  title: string;
  price: number;
  src: string;
}

export const ProductCard = ({
  id,
  title,
  price,
  src
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={cls.card}>
      <div className={cls.img_wrapper}>
        <img src={src} className={cls.img} alt={title} loading="lazy"/>
      </div>
      <h3 className={cls.name}>{title}</h3>
      <div className={cls.price}>{price} $</div>
    </Link>
  );
}

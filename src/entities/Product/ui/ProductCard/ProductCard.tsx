import cls from './ProductCard.module.scss'
export interface ProductCardProps {
  title: string;
  price: number;
  src: string;
}

export const ProductCard = ({
  title,
  price,
  src
}: ProductCardProps) => {
  return (
    <div>
      <div className={cls.img_wrapper}>
        <img src={src} className={cls.img} alt={title} loading="lazy"/>
      </div>
      <h3 className={cls.name}>{title}</h3>
      <div className={cls.price}>{price} $</div>
    </div>
  );
}

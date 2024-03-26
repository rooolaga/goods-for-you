import cls from './ProductCard.module.scss'
export interface ProductCardProps {
  title: string;
  price: number;
  src: {
    jpg: string,
    avif: string
  };
}

export const ProductCard = ({
  title,
  price,
  src
}: ProductCardProps) => {
  return (
    <div>
      <picture>
        <source srcSet={src.avif} type="image/avif" />
        <img src={src.jpg} className={cls.img} alt={title} loading="lazy"/>
      </picture>
      <h3 className={cls.name}>{title}</h3>
      <div className={cls.price}>{price} $</div>
    </div>
  );
}
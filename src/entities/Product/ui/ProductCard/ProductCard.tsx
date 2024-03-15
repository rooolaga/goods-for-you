import sneakers from '@/shared/assets/images/sneakers.jpg'

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
      <img src={sneakers}  />
      <h2>{title}</h2>
      <div>{price}</div>
    </div>
  );
}
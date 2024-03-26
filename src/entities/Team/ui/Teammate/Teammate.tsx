import { Text } from "@/shared/ui/Text";
import cls from './Temmate.module.scss'
import clsx from "clsx";

export interface TeammateProps {
  name: string;
  position: string;
  src: {
    jpg: string,
    avif: string
  };
  className?: string;
}

export const Teammate = ({
  name,
  position,
  src,
  className
}: TeammateProps) => {
  return (
    <div className={clsx(cls.temmate, className)}>
      <picture>
        <source srcSet={src.avif} type="image/avif" />
        <img src={src.jpg} alt={name} className={cls.img} loading="lazy"/>
      </picture>
      <div className={cls.temmate_overlay}></div>
      <div className={clsx(cls.temmate_overlay, cls.temmate_info)}>
        <Text as='h4' color="white" wieght="bold" className="mb-2">{name}</Text>
        <Text color="white" wieght="semibold">{position}</Text>
      </div>
    </div>
  )
}

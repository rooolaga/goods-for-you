import { Text } from "@/shared/ui/Text";
import cls from './Temmate.module.scss'
import clsx from "clsx";

export interface TeammateProps {
  name: string;
  position: string;
  src: string;
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
      <img src={src} alt="teammate 1" className={cls.img}/>
      <div className={cls.temmate_overlay}></div>
      <div className={clsx(cls.temmate_overlay, cls.temmate_info)}>
        <Text as='h4' color="white" wieght="bold" className="mb-2">{name}</Text>
        <Text color="white" wieght="semibold">{position}</Text>
      </div>
    </div>
  )
}

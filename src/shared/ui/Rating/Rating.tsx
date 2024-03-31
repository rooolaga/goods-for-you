import clsx from "clsx";
import cls from './Rating.module.scss'
import Star from '../../assets/icons/star.svg?react'
import { Icon } from "../Icon";
import { range } from 'lodash'

export interface RatingProps {
  className?: string,
  value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = ({value = 0}: RatingProps) => {
  return (
    <span>
      {range(5).map(item => (
        <Icon
          Svg={Star}
          width={20}
          height={20}
          key={item}
          className={clsx(value < item + 1 && cls.disabled, 'mr-1')}
        />
      ))}
    </span>
  );
};

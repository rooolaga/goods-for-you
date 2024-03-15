import { Icon } from "../Icon";
import { TextProps, Text } from "../Text";
import LineIcon from '@/shared/assets/icons/line.svg?react';
import cls from './Cite.module.scss'

export interface CiteProps {
  author: string;
  children: TextProps['children'];
  color?: TextProps['color'];
}

export const Cite = ({
  author,
  children,
  color = 'dark'
}: CiteProps) => {
  return (
    <div>
      <Text as='p' color={color} wieght="semibold" className="pr-20">
        {children}
      </Text>
      <Text as='h4' color={color} wieght="semibold" className={cls.author}>
        <>
          <Icon Svg={LineIcon} width={50} className="pr-5"/>
          {author}
        </>
      </Text>
    </div>
  );
}
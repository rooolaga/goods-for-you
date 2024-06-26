import clsx from 'clsx';
import cls from './Text.module.scss'
import { ReactNode } from 'react';

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span',
  color?: 'white' | 'dark' | 'gray',
  weight?: 'regular' | 'semibold' | 'bold',
  children?: ReactNode,
  className?: string | undefined
}

export const Text = ({
  as = 'span',
  color = 'dark',
  weight = 'regular',
  children,
  className
}: TextProps) => {
  const Wrapper = `${as}` as keyof JSX.IntrinsicElements;
  const clsName = clsx(
    className,
    cls.text,
    cls[color],
    cls[weight]
  );

  return (
   <Wrapper className={clsName}>{children}</Wrapper>
  )
}

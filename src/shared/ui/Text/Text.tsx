import clsx from 'clsx';
import cls from './Text.module.scss'
import { ReactElement } from 'react';

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span',
  color?: 'white' | 'dark' | 'gray',
  wieght?: 'regular' | 'semibold' | 'bold',
  children?: string | ReactElement,
  className?: string | undefined
}

export const Text = ({
  as = 'span',
  color = 'dark',
  wieght = 'regular',
  children,
  className
}: TextProps) => {
  const Wrapper = `${as}` as keyof JSX.IntrinsicElements;
  const clsName = clsx(
    className,
    cls[color],
    cls[wieght]
  );

  return (
   <Wrapper className={clsName}>{children}</Wrapper>
  )
}
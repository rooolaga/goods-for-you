import clsx from 'clsx';
import cls from './Text.module.scss'

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span',
  color?: 'white' | 'dark' | 'gray',
  children?: string | undefined,
  className?: string | undefined
}

export const Text = ({
  as = 'span',
  color = 'dark',
  children,
  className
}: TextProps) => {
  const Wrapper = `${as}` as keyof JSX.IntrinsicElements;
  const clsName = clsx(
    className,
    cls[color]
  );

  return (
   <Wrapper className={clsName}>{children}</Wrapper>
  )
}
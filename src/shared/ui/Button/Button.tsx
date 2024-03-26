import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'text', 
  size?: 's' | 'm' | 'l'
}

export const Button = ({
  variant = 'primary',
  size = 'm',
  children,
  className,
  ...props
}: ButtonProps) => {


  const clsName = clsx(
    className,
    cls.button,
    cls[size],
    cls[variant]
  )

  return (
    <button type="button" className={clsName} {...props}>
      {children}
    </button>
  );
};
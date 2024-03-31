import { InputHTMLAttributes, useId } from 'react';
import cls from './InputText.module.scss'
import clsx from 'clsx';

export interface InputText extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'>{
  label: string;
}

export const InputText = ({
  label,
  className,
  ...props
}: InputText) => {

  const id = useId();

  return (
    <div className={clsx(cls.input, className)}>
      <input
        type="text"
        id={id}
        className={cls.input_field}
        placeholder={label}
        {...props}
      />
      <label htmlFor={id} className={cls.label}>{label}</label>
    </div>
  )
}

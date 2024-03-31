import { InputHTMLAttributes, useId } from "react";
import cls from './Checkbox.module.scss';
import CheckIcon from "@/shared/assets/icons/check.svg?react";
import clsx from "clsx";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> {
  label: string;
}


export const Checkbox = ({
  label,
  className,
  ...props
}: CheckboxProps) => {

  const id = useId();

  return (
    <label htmlFor={id} className={clsx(cls.checkbox_container, className)}>
      <input className={cls.checkbox} type="checkbox" id={id} {...props}/>
      <span className={cls.custom_checkbox}>
        <CheckIcon width={20} className={cls.check_icon}/>
      </span>
      <span className={cls.label}>{label}</span>
    </label>
  );
}

import { InputHTMLAttributes, useId } from "react";
import cls from './Checkbox.module.scss';
import CheckIcon from "@/shared/assets/icons/check.svg?react";

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
    <label htmlFor={id} className={cls.checkbox_container}>
      <input className={cls.checkbox} type="checkbox" id={id} {...props}/>
      <span className={cls.custom_checkbox}>
        <CheckIcon width={20} className={cls.check_icon}/>
      </span>
      <span className={cls.label}>{label}</span>
    </label>
  );
}
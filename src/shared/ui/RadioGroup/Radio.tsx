import { useId } from "react";
import cls from './Radio.module.scss'

export interface RadioProps {
  label?: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: ((value: string) => void) | undefined;
}

export const Radio = ({
  label,
  value,
  name,
  checked,
  onChange
}: RadioProps) => {

  const id = useId();

  return (
    <label htmlFor={id} className={cls.radio_container}>
      <input
        className={cls.radio}
        type="radio" id={id}
        name={name}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className={cls.label}>{label}</span>
    </label>
  );
}

import { Text } from '../Text'
import { Radio } from './Radio';
import cls from './RadioGroup.module.scss'

export interface RadioGroupProps {
  name: string;
  label: string;
  value: string | undefined;
  options: string[],
  onChange?: ((value: string) => void);
}

export const RadioGroup = ({
  options,
  name,
  label,
  value,
  onChange
}: RadioGroupProps) => {
  return (
    <div>
      <div>
        <Text weight='semibold'>{label}</Text>
      </div>
      <div className={cls.radio_group}>
        {options.map((option) => (
          <Radio
            name={name}
            value={option}
            label={option}
            key={option}
            checked={value === option}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

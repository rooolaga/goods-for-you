import { Text } from '../Text'
import { Radio } from './Radio';
import cls from './RadioGroup.module.scss'

export interface RadioGroupProps {
  name: string;
  label: string;
  options: string[],
  onChange?: ((value: string) => void);
}

export const RadioGroup = ({
  options,
  name,
  label,
  onChange
}: RadioGroupProps) => {
  return (
    <div>
      <div>
        <Text weight='semibold'>{label}</Text>
      </div>
      <div className={cls.radio_group}>
        {options.map((option, index) => (
          <Radio
            name={name}
            value={index.toString()}
            label={option}
            key={option}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

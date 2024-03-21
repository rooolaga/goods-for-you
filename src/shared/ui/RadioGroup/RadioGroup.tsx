import { Text } from '../Text'
import { Radio } from './Radio';
import cls from './RadioGroup.module.scss'

interface OptionType {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name: string;
  label: string;
  options: OptionType[],
  onChange?: (value: string) => void;
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
        {options.map(option => (
          <Radio 
            name={name} 
            value={option.value}
            label={option.label}
            key={option.value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

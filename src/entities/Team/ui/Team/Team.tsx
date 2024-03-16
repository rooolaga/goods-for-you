import { Teammate, TeammateProps } from '../Teammate/Teammate';
import { Text } from '@/shared/ui/Text';
import cls from './Team.module.scss';

export interface TeamProps {
  title: string;
  items: TeammateProps[];
}

export const Team = ({
  title,
  items
}: TeamProps) => {
  return (
    <div>
      <Text as='h2' color='white' wieght='bold'>{title}</Text>
      <div className={cls.team}>
        {items.map((teammate, index) => (
          <Teammate {...teammate} className={cls[`teammate_${index}`]}/>
        ))}
      </div>
    </div>
  )
}

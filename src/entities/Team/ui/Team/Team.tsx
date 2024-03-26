import { Teammate, TeammateProps } from '../Teammate/Teammate';
import { Text } from '@/shared/ui/Text';
import cls from './Team.module.scss';

export interface TeamProps {
  title: string;
  items: TeammateProps[];
}
<ul>
  <li>
    <div>Lorem, ipsum.</div>
    <div>Iste, ad?</div>
    <div>Possimus, perspiciatis.</div>
    <div>Suscipit, quasi.</div>
    <div>Distinctio, ex!</div>
  </li>
</ul>
export const Team = ({
  title,
  items
}: TeamProps) => {
  return (
    <div>
      <Text as='h2' color='white' wieght='bold'>
        {title}
      </Text>
      <div className={cls.team}>
        {items.map((teammate, index) => (
          <Teammate {...teammate} className={cls[`teammate_${index}`]} key={teammate.name}/>
        ))}
      </div>
    </div>
  )
}

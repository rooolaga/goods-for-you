import { Text } from "@/shared/ui/Text";
import TeamMate from "@/shared/assets/images/teammate1.jpg"
import cls from './Temmate.module.scss'

export interface TemmateProps {
  name: string;
  position: string;
}

export const Teammate = ({
  name,
  position
}: TemmateProps) => {
  return (
    <div className={cls.temmate}>
      <img src={TeamMate} alt="teammate 1" />
      <div className={cls.temmate_info}>
        <Text as='h4' color="white" wieght="bold">{name}</Text>
        <Text color="white" wieght="semibold">{position}</Text>
      </div>
    </div>
  )
}

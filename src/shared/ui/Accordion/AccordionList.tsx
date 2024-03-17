import { AccordionProps } from "./Accordion"
import cls from './AccordionList.module.scss'

interface AccordionListProps {
  children?: React.ReactElement<AccordionProps>[] | React.ReactElement<AccordionProps>
}

export const AccordionList = ({
  children
}: AccordionListProps) => {
  return (
    <div className={cls.accordion_list}>
      {children}
    </div>
  )
}
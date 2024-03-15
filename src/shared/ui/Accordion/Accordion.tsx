import { ReactElement, useState } from "react";
import { Text } from '../Text';
import clsx from 'clsx';
import cls from './Accordion.module.scss';
import Cross from '@/shared/assets/icons/cross.svg?react';
import { Icon } from "../Icon";

export interface AccordionProps {
  title: string;
  children: ReactElement | string;
  isCollapsed?: boolean
}

export const Accordion = ({
  title,
  children,
  isCollapsed = true
}: AccordionProps) => {

  const [isOpen, setIsOpen] = useState(!isCollapsed);

  return (
    <div className={clsx(cls.accordion_item, isOpen && cls.open)}>
      <button className={cls.accordion_haeder} onClick={() => setIsOpen(prev => !prev)}>
        <Text as='h4'>{title}</Text>
        <div className={cls.accordion_icon}><Icon Svg={Cross} /></div>
      </button>
      <div className={cls.accordion_collapse}>
        <div className={cls.accordion_body}>
          <div className={cls.accordion_content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
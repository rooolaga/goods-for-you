import { ReactNode } from 'react';
import cls from './MainLayout.module.scss';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';

import { logo, items, aria} from '@/data/Navbar.json'


export interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (
    <div className={cls.main_layout}>
      
      <div className='section_purple'>
        <div className={clsx(cls.header, 'container pt-6 pb-2')}>
          <Navbar logo={logo} items={items} aria={aria}/>
        </div>
      </div>
      
      <div className={cls.page}>{children}</div>
      <div className='section_purple'>
        <div className={clsx(cls.footer, 'container pt-6 pb-2')}>
          <Navbar logo={logo} items={items} aria={aria}/>
        </div>
      </div>
    </div>
  )
}

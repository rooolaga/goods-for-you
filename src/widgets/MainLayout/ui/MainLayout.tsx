import { ReactNode } from 'react';
import cls from './MainLayout.module.scss';
import { Navbar } from '@/widgets/Navbar';
import clsx from 'clsx';

import { logo, items, aria} from '@/data/Navbar.json'
import { useAnchors } from "@/widgets/MainLayout/hooks/useAnchors";


export interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({
  children
}: MainLayoutProps) => {

  useAnchors();

  return (
    <div className={cls.main_layout}>

      <header className='section_purple'>
        <div className={clsx(cls.header, 'container pt-6 pb-2')}>
          <Navbar logo={logo} items={items} aria={aria} variant='main' />
        </div>
      </header>

      <main className={cls.page}>{children}</main>
      <footer className={cls.footer}>
        <div className='container pt-6 pb-2'>
          <Navbar logo={logo} items={items} aria={aria} variant='bottom'/>
        </div>
      </footer>
    </div>
  )
}

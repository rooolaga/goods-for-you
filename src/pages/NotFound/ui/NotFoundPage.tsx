import { MainLayout } from "@/widgets/MainLayout/ui/MainLayout";
import cls from './NotFoundPage.module.scss';
import clsx from 'clsx';

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="pt-40">
        <div className={clsx('container', cls.not_found)}>
          <h1 className={cls.title}>404</h1>
          <p className={cls.description}>Page not found</p>
        </div>
      </div>
    </MainLayout>
  );
};

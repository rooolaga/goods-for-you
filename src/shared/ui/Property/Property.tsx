import clsx from "clsx";
import cls from './Property.module.scss'
import { Text } from '@/shared/ui/Text';
import { ReactNode } from "react";

interface PropertyProps {
  className?: string;
  label: string;
  children?: ReactNode;
}

export const Property = ({
  className,
  label,
  children,
}: PropertyProps) => {
  return (
    <div className={clsx(cls.property, className, 'mb-6')}>
      <Text weight="semibold" color="gray" className="mr-5">
        {label}
      </Text>
      <Text weight="semibold">{children}</Text>
    </div>
  );
};

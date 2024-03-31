import clsx from "clsx";
import cls from './QuizRecommend.module.scss'
import { ReactNode } from "react";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";

interface StepProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isActive: boolean;
  buttonValue: string;
  buttonDisabled: boolean;
  onClickButton: () => void;
}

export const Step = ({
  title,
  subtitle,
  children,
  isActive,
  buttonValue,
  buttonDisabled = false,
  onClickButton
}: StepProps) => {
  return (
    <div className={clsx(cls.step, isActive && cls.active_step)}>
      <div className={cls.header}>
        <Text as='h2' weight='bold' className="mb-2">{title}</Text>
        <Text as='span' color="gray" weight="semibold">
          {subtitle}
        </Text>
      </div>

      <div className={cls.body}>{children}</div>

      <div className={cls.footer}>
        <Text as='span' color='gray' weight="semibold">1 of 2</Text>
        <Button
          variant='outline'
          size='s'
          onClick={onClickButton}
          disabled={buttonDisabled}
        >
          {buttonValue}
        </Button>
      </div>
    </div>
  );
};

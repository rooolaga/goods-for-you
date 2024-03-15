import cls from './Icon.module.scss';

export interface IconProps {
  className?: string | undefined,
  clickable?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  Svg: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;
}

export const Icon = ({
  clickable = false,
  width = 25,
  height = 25,
  onClick,
  className,
  Svg,
}: IconProps) => {
  const icon = <Svg width={width} height={height} className={className} />;

  if(clickable) return (
    <button onClick={onClick} className={cls.button}>
      {icon}
    </button>
  );

  return icon;
}
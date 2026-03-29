import { CSSProperties, FC, HTMLAttributes, ReactNode, memo } from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  color?: string;
  icon?: LucideIcon | ReactNode;
  size?: number;
}

export const Icon: FC<IconProps> = memo(({ color, icon: IconComponent, size = 24, style, ...rest }) => {
  if (!IconComponent) return null;

  // 如果是 Lucide 图标组件
  if (typeof IconComponent === 'function') {
    const LucideIcon = IconComponent as LucideIcon;
    return <LucideIcon color={color} size={size} style={style} {...(rest as any)} />;
  }

  // 如果是 ReactNode
  return (
    <span style={{ color, display: 'inline-flex', fontSize: size, lineHeight: 1, ...style }} {...rest}>
      {IconComponent}
    </span>
  );
});

Icon.displayName = 'Icon';

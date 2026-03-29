import { FC, HTMLAttributes, ReactNode, memo } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  bordered?: boolean;
  children?: ReactNode;
  color?: string;
  icon?: ReactNode;
}

export const Tag: FC<TagProps> = memo(({ children, color, icon, style, ...rest }) => {
  return (
    <span
      style={{
        alignItems: 'center',
        backgroundColor: color ? `${color}15` : 'rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        color: color || 'rgba(0, 0, 0, 0.88)',
        display: 'inline-flex',
        fontSize: 12,
        gap: 4,
        padding: '0 7px',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';

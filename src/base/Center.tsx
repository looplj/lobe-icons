import { CSSProperties, FC, HTMLAttributes, ReactNode, memo } from 'react';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  flex?: CSSProperties['flex'];
}

export const Center: FC<CenterProps> = memo(({ children, flex, style, ...rest }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flex,
        justifyContent: 'center',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

Center.displayName = 'Center';

import { CSSProperties, FC, HTMLAttributes, ReactNode, memo } from 'react';

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
  align?: CSSProperties['alignItems'];
  children?: ReactNode;
  flex?: CSSProperties['flex'];
  gap?: number | string;
  height?: CSSProperties['height'];
  horizontal?: boolean;
  justify?: CSSProperties['justifyContent'];
  width?: CSSProperties['width'];
  wrap?: CSSProperties['flexWrap'];
}

export const Flexbox: FC<FlexboxProps> = memo(
  ({ align, children, flex, gap, height, horizontal, justify, style, width, wrap, ...rest }) => {
    return (
      <div
        style={{
          alignItems: align,
          display: 'flex',
          flex,
          flexDirection: horizontal ? 'row' : 'column',
          flexWrap: wrap,
          gap,
          height,
          justifyContent: justify,
          width,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Flexbox.displayName = 'Flexbox';

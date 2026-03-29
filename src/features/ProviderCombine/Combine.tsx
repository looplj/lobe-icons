import { DivProps, Flexbox } from '@/base';
import { CSSProperties, FC, ReactNode, memo } from 'react';

const Divider: FC<{ style?: CSSProperties }> = ({ style }) => (
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      display: 'inline-block',
      height: '1em',
      verticalAlign: 'middle',
      width: 1,
      ...style,
    }}
  />
);

const Combine = memo<DivProps & { left: ReactNode; right: ReactNode; size: number }>(
  ({ left, right, size = 24, ...rest }) => {
    return (
      <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
        {left}
        <Divider style={{ marginInline: size / 6 }} />
        {right}
      </Flexbox>
    );
  },
);

export default Combine;

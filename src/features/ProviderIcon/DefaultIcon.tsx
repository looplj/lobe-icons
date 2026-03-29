import { cssVar } from 'antd-style';
import { Boxes } from 'lucide-react';
import { type CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return <Boxes color={color || cssVar.colorTextDescription} size={size} {...rest} />;
});

export default DefaultIcon;

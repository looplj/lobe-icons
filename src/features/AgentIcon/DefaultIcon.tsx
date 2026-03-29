import { cssVar } from 'antd-style';
import { Bot } from 'lucide-react';
import { CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return <Bot color={color || cssVar.colorTextDescription} size={size} {...rest} />;
});

export default DefaultIcon;

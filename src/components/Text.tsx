import { ReactNode } from 'react';
import clsx from 'clsx';

type TextProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'neutral';
  className?: string;
};

const Text = ({ children, size = 'md', color = 'primary', className }: TextProps) => {
  const textSize = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl'
  }[size];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    neutral: 'text-neutral'
  }[color];

  return <p className={clsx(textSize, textColor, className)}>{children}</p>;
};

export default Text;

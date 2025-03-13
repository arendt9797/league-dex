import { ReactNode } from 'react';
import clsx from 'clsx';

type TitleProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: 'primary' | 'secondary' | 'normal' | 'white';
  className?: string;
};

const Title = ({ children, size = 'lg', color = 'primary', className }: TitleProps) => {
  const titleSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl sm:text-5xl',
    '3xl': 'text-5xl sm:text-6xl'
  }[size];

  const titleColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    normal: 'text-black',
    white: 'text-white'
  }[color];

  return <h1 className={clsx('font-bold', titleSize, titleColor, className)}>{children}</h1>;
};

export default Title;

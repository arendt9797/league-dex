type SpacerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

const Spacer = ({ size = 'md' }: SpacerProps) => {
  const spacerSize = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-8',
    xl: 'h-12',
    '2xl': 'h-20'
  }[size];

  return <div className={spacerSize} />;
};

export default Spacer;

import { vollkorn } from '@src/utils/fonts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1
      className={`font-black text-6xl text-dark transition-all ${className} ${vollkorn.className}`}
    >
      {children}
    </h1>
  );
}

export default Title;

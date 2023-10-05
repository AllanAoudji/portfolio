import { vollkorn } from '@src/utils/fonts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1
      className={`font-black pt-36 text-5xl text-dark transition-all sm:pt-48 ${className} ${vollkorn.className}`}
    >
      {children}
    </h1>
  );
}

export default Title;

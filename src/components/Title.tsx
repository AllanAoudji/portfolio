import { bodoniModa } from '@src/utils/fonts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1
      className={`font-black pt-36 text-5xl text-dark transition-all uppercase sm:pt-48 ${className} ${bodoniModa.className}`}
    >
      {children}
    </h1>
  );
}

export default Title;

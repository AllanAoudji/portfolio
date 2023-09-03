import { bodoniModa } from '@src/utils/fonts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1
      className={`font-black pt-36 text-4xl text-light transition-all sm:pt-48 sm:text-5xl ${className} ${bodoniModa.className}`}
    >
      {children}
    </h1>
  );
}

export default Title;

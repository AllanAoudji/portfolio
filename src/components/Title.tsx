type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1 className={`font-black text-4xl text-light sm:text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export default Title;

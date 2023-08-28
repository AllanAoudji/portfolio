type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return (
    <h1 className={`font-black text-light text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export default Title;

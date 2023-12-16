type Props = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className = '', children }: Props) {
  return (
    <div className={`max-w-6xl mx-auto px-8 sm:px-12 ${className}`}>
      {children}
    </div>
  );
}

export default Container;

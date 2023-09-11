type Props = {
  background?: 'none' | 'dark' | 'darker' | 'light' | 'secondary';
  children: React.ReactNode;
  className?: string;
};

function Wrapper({ background = 'none', children, className }: Props) {
  return (
    <div className={`bg-${background}`}>
      <div
        className={`duration-300 mx-auto px-6 transition-all sm:px-12 md:max-w-6xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Wrapper;

type Variant = 'darker' | 'light';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant: Variant;
};

const variantConvertor = (variantConvertor: Variant) => {
  switch (variantConvertor) {
    case 'darker':
      return 'bg-darker text-light';
    default:
    case 'light':
      return 'bg-light text-darker';
  }
};

function BackgroundColor({ children, className = '', variant }: Props) {
  return (
    <div className={`${variantConvertor(variant)} ${className}`}>
      {children}
    </div>
  );
}

export default BackgroundColor;

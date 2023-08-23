import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

function LinkImage({ className, ...props }: ImageProps) {
  return (
    <Link
      className={`block ${className}`}
      href={{ query: { image: props.src.toString() } }}
    >
      <Image {...props} className="w-full h-auto" alt={props.alt} />
    </Link>
  );
}

export default LinkImage;

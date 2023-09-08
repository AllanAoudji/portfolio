import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

function LinkImage({ className, ...props }: ImageProps) {
  return (
    <Link
      className={`block bg-pink-200 ${className}`}
      href={{ query: { image: props.src.toString() } }}
      replace={true}
      scroll={false}
    >
      <Image {...props} alt={props.alt} className="h-auto w-full" />
    </Link>
  );
}

export default LinkImage;

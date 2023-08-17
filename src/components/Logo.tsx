import Image from 'next/image';
import Link from 'next/link';

type Props = {
  size?: 'h-12' | 'h-8';
};

function Logo({ size = 'h-12' }: Props) {
  return (
    <Link href="/">
      <Image
        alt="main logo"
        className={`w-auto ${size}`}
        height="911"
        src="/logo-fixe-light.png"
        width="1706"
      />
    </Link>
  );
}
export default Logo;

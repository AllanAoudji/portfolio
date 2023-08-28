import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  color?: 'dark' | 'light';
};

function Logo({ className, color = 'light' }: Props) {
  return (
    <Link href="/">
      <Image
        alt="main logo"
        className={`w-auto ${className}`}
        height="911"
        priority={true}
        src={`/logo-fixe-${color}.png`}
        width="1706"
      />
    </Link>
  );
}
export default Logo;

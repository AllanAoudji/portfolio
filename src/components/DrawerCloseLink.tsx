'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  className?: string;
};

function DrawerCloseLink({ className = '' }: Props) {
  const pathname = usePathname();

  return (
    <Link href={{ pathname }} scroll={false} replace={true}>
      <Image
        className={`h-10 w-auto ${className}`}
        src="/cross-light.png"
        alt="cross dark"
        width="33"
        height="33"
      />
    </Link>
  );
}

export default DrawerCloseLink;

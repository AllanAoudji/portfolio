'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function DrawerCloseLink() {
  const pathname = usePathname();

  return (
    <Link href={{ pathname }} scroll={false} replace={true}>
      <Image src="/cross-light.png" alt="cross dark" width="33" height="33" />
    </Link>
  );
}

export default DrawerCloseLink;

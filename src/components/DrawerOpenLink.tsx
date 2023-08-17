'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function DrawerOpenLink() {
  const pathname = usePathname();

  return (
    <Link
      href={{ pathname, query: { drawer: true } }}
      replace={true}
      scroll={false}
      className="absolute top-0 left-0 m-4"
    >
      <Image
        alt="hamburger menu"
        className="h-12 w-auto"
        height="1943"
        src="/hamburger.png"
        width="1962"
      />
    </Link>
  );
}

export default DrawerOpenLink;

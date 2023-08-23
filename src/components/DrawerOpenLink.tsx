'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function DrawerOpenLink() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('image') || searchParams.get('drawer') == 'true') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [searchParams]);

  return (
    <Link
      href={{ query: { drawer: true } }}
      replace={true}
      scroll={false}
      className="absolute top-0 left-0 mx-6 my-5"
    >
      <Image
        alt="hamburger menu"
        className="h-9 w-auto"
        height="1943"
        src="/hamburger.png"
        width="1962"
      />
    </Link>
  );
}

export default DrawerOpenLink;

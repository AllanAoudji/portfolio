'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  open: boolean;
};

function DrawerBackground({ open }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`bg-black block duration-500 h-full transition-all w-full ${
        open
          ? 'opacity-90 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      href={{ pathname }}
      replace={true}
      scroll={false}
    />
  );
}

export default DrawerBackground;

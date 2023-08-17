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
      href={{ pathname }}
      scroll={false}
      replace={true}
      className={`bg-black h-full w-full transition-all duration-500 block ${
        open
          ? 'opacity-50 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    />
  );
}

export default DrawerBackground;

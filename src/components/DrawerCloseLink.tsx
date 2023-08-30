'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cross from '@/public/cross-light.png';

type Props = {
  className?: string;
};

function DrawerCloseLink({ className = '' }: Props) {
  const pathname = usePathname();

  return (
    <Link href={{ pathname }} replace={true} scroll={false}>
      <Image alt="cross" className={`h-10 w-auto ${className}`} src={cross} />
    </Link>
  );
}

export default DrawerCloseLink;

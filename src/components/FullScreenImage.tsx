'use client';

import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {} from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';

function FullScreenImage() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const image = useMemo(() => searchParams.get('image'), [searchParams]);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.replace(pathname as Route);
      }
    },
    [router, pathname]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  if (!image) {
    return;
  }

  return (
    <div className="fixed flex h-screen items-center justify-center t-0 w-screen z-50">
      <Link
        href={{ pathname }}
        className="absolute bg-black h-full opacity-95 top-0 w-full -z-20"
      />
      <Image
        alt="image"
        className="h-auto m-20 rounded-xl w-10/12 sm:h-10/12 sm:w-auto"
        height={1080}
        src={image}
        width={1920}
      />
    </div>
  );
}

export default FullScreenImage;

'use client';

import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {} from 'next/router';
import { useCallback, useEffect } from 'react';

function FullScreenImage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const image = searchParams.get('image');

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
    <div className="fixed t-0 l-0 w-screen h-screen z-50 flex justify-center items-center">
      <Link
        href={{ pathname }}
        className="absolute w-full h-full bg-black opacity-95 top-0 -z-20"
      />
      <Image
        className="h-auto w-10/12 rounded-xl m-20"
        src={image}
        alt="image"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default FullScreenImage;

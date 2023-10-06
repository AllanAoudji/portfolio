'use client';

import useWindowSize from '@src/hooks/useWindowSize';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type Props = {
  mainImage: {
    url: string;
    metadata: ImageMetadata;
    alt: string;
  };
  title: string;
};

function WorkMainImage({ mainImage, title }: Props) {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const opacity = useTransform(scrollY, [0, !!height ? height / 2 : 0], [1, 0]);
  const scale = useTransform(scrollY, [0, !!height ? height / 2 : 0], [1.1, 1]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="h-screen overflow-hidden fixed -z-10 w-screen top-0"
        style={{ opacity, scale }}
        transition={{ type: 'spring' }}
      >
        <Image
          alt={mainImage.alt ?? title}
          className="absolute h-full object-cover inset-0 w-full"
          src={mainImage.url}
          width={mainImage.metadata.dimensions.width}
          height={mainImage.metadata.dimensions.height}
          blurDataURL={mainImage.metadata.lqip}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
}

export default WorkMainImage;

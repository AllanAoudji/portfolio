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
  const { height, width } = useWindowSize();
  const opacity = useTransform(
    scrollY,
    [
      0,
      !!height && !!width
        ? width < 640
          ? (width * 3) / 4
          : (height * 3) / 4
        : 0,
    ],
    [1, 0]
  );
  const scale = useTransform(
    scrollY,
    [
      0,
      !!height && !!width
        ? width < 640
          ? (width * 3) / 4
          : (height * 3) / 4
        : 0,
    ],
    [1.1, 1]
  );
  const translateY = useTransform(
    scrollY,
    [
      0,
      !!height && !!width
        ? width < 640
          ? (width * 3) / 4
          : (height * 3) / 4
        : 0,
    ],
    [0, -50]
  );

  return (
    <div className="overflow-hidden">
      <motion.div
        className="aspect-square overflow-hidden fixed md:aspect-auto md:h-screen -z-10 w-screen top-0"
        style={{ opacity, translateY, scale }}
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

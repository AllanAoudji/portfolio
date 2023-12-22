'use client';

import useWindowSize from '@src/hooks/useWindowSize';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

function HomeHeaderImage() {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const scale = useTransform(scrollY, [0, !!height ? height : 0], [1, 1.2]);

  return (
    <motion.div
      className="col-span-4 col-start-2 my-12 sm:col-span-6 sm:col-start-4"
      style={{ scale }}
      initial={{ scale: 100 }}
      transition={{ type: 'spring' }}
    >
      <CldImage
        alt="animated logo"
        width="2048"
        height="1350"
        src="ba6cduwsop5cwvvtheik"
      />
    </motion.div>
  );
}

export default HomeHeaderImage;

'use client';

import Logo from '@/public/logo-fixe-dark.png';
import useWindowSize from '@src/hooks/useWindowSize';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function HomeHeaderImage() {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const scale = useTransform(scrollY, [0, !!height ? height : 0], [1, 1.2]);

  return (
    <motion.div
      className="col-span-4 col-start-2 my-24 sm:col-span-6 sm:col-start-4"
      style={{ scale }}
      initial={{ scale: 100 }}
      transition={{ type: 'spring' }}
    >
      <Image alt="logo" src={Logo} />
    </motion.div>
  );
}

export default HomeHeaderImage;

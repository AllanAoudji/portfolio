'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import Form1 from '@/public/forme_0001.png';
import Form2 from '@/public/forme_0002.png';
import Form3 from '@/public/forme_0003.png';
import Form4 from '@/public/forme_0004.png';

function FormsContainer() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const formOneRotation = useTransform(scrollY, (latest) => {
    return latest / 50;
  });
  const formTwoRotation = useTransform(scrollY, (latest) => {
    return latest / 35;
  });
  const formThreeRotation = useTransform(scrollY, (latest) => {
    return latest / 10;
  });
  const formFourRotation = useTransform(scrollY, (latest) => {
    return latest / 25;
  });
  const translateY = useTransform(scrollY, (latest) => {
    if (ref.current == null) {
      return 0;
    }
    return (
      latest / 8 -
      ref.current.offsetTop / 8 +
      ref.current.getBoundingClientRect().height / 16
    );
  });

  return (
    <motion.div
      className="absolute inset-0 blur-sm"
      ref={ref}
      transition={{ type: 'spring' }}
      style={{ translateY }}
    >
      <motion.div
        className="absolute bottom-96 opacity-30 origin-center -right-4 sm:bottom-44 sm:right-12 lg:bottom-40 lg:-right-12"
        style={{ rotateZ: formOneRotation }}
      >
        <Image
          alt="forme 1"
          className="h-auto w-40 sm:w-60 lg:w-72"
          src={Form1}
        />
      </motion.div>
      <motion.div
        className="absolute left-4 opacity-30 origin-center top-[140vh] sm:left-10 sm:top-[calc(100vh+50px)] lg:left-20 lg:top-[calc(100vh-120px)]"
        style={{ rotateZ: formTwoRotation }}
      >
        <Image
          alt="forme 2"
          className="h-auto w-40 sm:w-60 lg:w-72"
          src={Form2}
        />
      </motion.div>
      <motion.div
        className="absolute opacity-30 origin-center right-4 top-[90vh] sm:right-24 sm:top-[calc(105vh)] lg:right-44 lg:top-[calc(100vh-32px)]"
        style={{ rotateZ: formThreeRotation }}
      >
        <Image
          alt="forme 3"
          className="h-auto w-40 sm:w-60 lg:w-72"
          src={Form3}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[500px] left-4 opacity-30 origin-center sm:bottom-64 sm:left-32 lg:bottom-20 lg:left-32"
        style={{ rotateZ: formFourRotation }}
      >
        <Image
          alt="forme 4"
          className="h-auto w-40 sm:w-60 lg:w-72"
          src={Form4}
        />
      </motion.div>
    </motion.div>
  );
}

export default FormsContainer;

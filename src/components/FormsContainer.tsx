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
    return latest / 100;
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
    return latest / 3;
  });

  return (
    <motion.div
      className="absolute inset-0 -z-10 overflow-hidden"
      ref={ref}
      transition={{ type: 'spring' }}
      style={{ translateY }}
    >
      <motion.div
        className="absolute bottom-[45vh] origin-center -right-4"
        style={{ rotateZ: formOneRotation }}
      >
        <Image alt="forme 1" className="h-auto w-60" src={Form1} />
      </motion.div>
      <motion.div
        className="absolute -left-4 origin-center top-[60vh]"
        style={{ rotateZ: formTwoRotation }}
      >
        <Image alt="forme 2" className="h-auto w-60" src={Form2} />
      </motion.div>
      {/* <motion.div
        className="absolute origin-center -right-16 top-[50vh]"
        style={{ rotateZ: formThreeRotation }}
      >
        <Image alt="forme 3" className="h-auto w-60" src={Form3} />
      </motion.div> */}
      {/* <motion.div
        className="absolute origin-center bottom-[90vh] -left-4"
        style={{ rotateZ: formFourRotation }}
      >
        <Image alt="forme 4" className="h-auto w-60" src={Form4} />
      </motion.div> */}
    </motion.div>
  );
}

export default FormsContainer;

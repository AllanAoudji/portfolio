'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';
import useWindowSize from '@src/hooks/useWindowSize';
import { useRef } from 'react';

function HomeContactForm() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, (latest) => {
    if (ref.current == null || !width || width < 640) {
      return 0;
    }
    return (
      latest / -8 +
      ref.current.offsetTop / 8 -
      ref.current.getBoundingClientRect().height / 16
    );
  });

  return (
    <div ref={ref}>
      <motion.div style={{ translateY }} transition={{ type: 'spring' }}>
        <ContactForm
          title="Contact"
          className="bg-light border-4 border-darker mx-auto pb-8 pt-6 px-6 rounded-xl sm:pb-12 sm:px-8"
        />
      </motion.div>
    </div>
  );
}

export default HomeContactForm;

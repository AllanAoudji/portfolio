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
          title="contact"
          className="px-10 py-10 sm:px-16 sm:py-16 rounded-xl mx-auto bg-light border-4 border-darker mt-10"
        />
      </motion.div>
    </div>
  );
}

export default HomeContactForm;

import { bodoniModa } from '@src/utils/fonts';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  image: StaticImageData;
  text: string;
  title: string;
};

function PrestationCard({ className = '', image, text, title }: Props) {
  return (
    <motion.section
      className={`[&_img]:hover:-translate-y-1 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <Image
        src={image}
        alt={title}
        className="h-32 w-auto mx-auto mb-6 transition-all duration-700"
      />
      <h5
        className={`font-bold text-light text-2xl text-center pb-6 ${bodoniModa.className}`}
      >
        {title}
      </h5>
      <p className="text-center text-light">{text}</p>
    </motion.section>
  );
}

export default PrestationCard;

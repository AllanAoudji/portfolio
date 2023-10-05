import { vollkorn } from '@src/utils/fonts';
import Image, { StaticImageData } from 'next/image';

type Props = {
  className?: string;
  image: StaticImageData;
  text: string;
  title: string;
};

function PrestationCard({ className = '', image, text, title }: Props) {
  return (
    <section className={`[&_img]:hover:-translate-y-1 ${className}`}>
      <Image
        src={image}
        alt={title}
        className="h-32 w-auto mx-auto mb-2 transition-all duration-700 sm:mb-6"
      />
      <h5
        className={`text-lg font-bold text-light sm:text-xl text-center pb-6 uppercase ${vollkorn.className}`}
      >
        {title}
      </h5>
      <p className="text-sm text-center text-light sm:text-base">{text}</p>
    </section>
  );
}

export default PrestationCard;

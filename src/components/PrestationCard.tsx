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
        className="duration-700 h-32 mb-2 mx-auto transition-all w-auto sm:mb-4"
      />
      <h5
        className={`font-bold pb-2 text-center text-lg text-light uppercase ${vollkorn.className}`}
      >
        {title}
      </h5>
      <p className="text-center text-light text-sm sm:px-4">{text}</p>
    </section>
  );
}

export default PrestationCard;

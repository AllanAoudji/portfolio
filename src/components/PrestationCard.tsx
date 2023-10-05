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
        className="h-32 w-auto mx-auto mb-6 transition-all duration-700"
      />
      <h5
        className={`font-bold text-light text-2xl text-center pb-6 ${vollkorn.className}`}
      >
        {title}
      </h5>
      <p className="text-center text-light">{text}</p>
    </section>
  );
}

export default PrestationCard;

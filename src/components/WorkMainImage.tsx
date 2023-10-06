import Image from 'next/image';

type Props = {
  mainImage: {
    url: string;
    metadata: ImageMetadata;
    alt: string;
  };
  title: string;
};

function WorkMainImage({ mainImage, title }: Props) {
  return (
    <Image
      alt={mainImage.alt ?? title}
      className="border-b-2 border-darker h-auto w-screen"
      src={mainImage.url}
      width={mainImage.metadata.dimensions.width}
      height={mainImage.metadata.dimensions.height}
      blurDataURL={mainImage.metadata.lqip}
      placeholder="blur"
    />
  );
}

export default WorkMainImage;

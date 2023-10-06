import Image from 'next/image';
import Wrapper from './Wrapper';

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
    <Wrapper className="px-0 sm:px-0 md:px-10">
      <Image
        alt={mainImage.alt ?? title}
        className="border-b-2 border-darker h-auto w-screen md:pt-24"
        src={mainImage.url}
        width={mainImage.metadata.dimensions.width}
        height={mainImage.metadata.dimensions.height}
        blurDataURL={mainImage.metadata.lqip}
        placeholder="blur"
      />
    </Wrapper>
  );
}

export default WorkMainImage;

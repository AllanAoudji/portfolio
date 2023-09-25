import { PortableTextTypeComponentProps } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import LinkImage from './LinkImage';

function PortableImage(
  props: PortableTextTypeComponentProps<
    SanityImageSource & {
      url: string;
      alt: string | null;
      metadata: ImageMetadata;
    }
  >
) {
  return (
    <div>
      <LinkImage
        alt={props.value.alt ?? 'image de contenu'}
        blurDataURL={props.value.metadata.lqip}
        className="h-auto w-full"
        height={props.value.metadata.dimensions.height}
        src={props.value.url}
        placeholder="blur"
        width={props.value.metadata.dimensions.width}
      />
    </div>
  );
}

export default PortableImage;

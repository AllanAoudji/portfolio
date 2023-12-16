import Image from 'next/image';

type Props = {
  gallery: {
    url: string;
    metadata: ImageMetadata;
    alt: string;
  }[];
  title: string;
};

function WorkImages({ gallery, title }: Props) {
  return (
    <div className="px-0 max-w-6xl mx-auto sm:px-12">
      {!!gallery.length &&
        gallery.map((image, index) => (
          <Image
            alt={image.alt ?? `image de gallerie de ${title} numéro ${index}`}
            className="w-screen h-auto"
            key={image.metadata.lqip}
            src={image.url}
            width={image.metadata.dimensions.width}
            height={image.metadata.dimensions.height}
            blurDataURL={image.metadata.lqip}
            placeholder="blur"
          />
        ))}
    </div>
  );
}

export default WorkImages;

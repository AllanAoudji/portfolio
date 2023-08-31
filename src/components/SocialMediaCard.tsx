import Image from 'next/image';

type Props = {
  socialMedia: Social;
};

function SocialMediaCard({ socialMedia }: Props) {
  return (
    <a href={socialMedia.url} target="_blank">
      <Image
        alt={socialMedia.title}
        blurDataURL={socialMedia.metadata.lqip}
        className="h-11 w-auto"
        height={socialMedia.metadata.dimensions.height}
        placeholder="blur"
        src={socialMedia.logo}
        width={socialMedia.metadata.dimensions.width}
      />
    </a>
  );
}

export default SocialMediaCard;

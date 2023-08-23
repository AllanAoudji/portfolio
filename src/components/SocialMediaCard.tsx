import Image from 'next/image';

type Props = {
  socialMedia: Social;
};

function SocialMediaCard({ socialMedia }: Props) {
  return (
    <a href={socialMedia.url} key={socialMedia._id} target="_blank">
      <Image
        className="h-11 w-auto"
        alt={socialMedia.title}
        height={30}
        src={socialMedia.logo}
        width={30}
      />
    </a>
  );
}

export default SocialMediaCard;

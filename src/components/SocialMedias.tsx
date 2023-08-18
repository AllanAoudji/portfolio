import { getSocials } from '@/sanity/sanity.queries';
import SocialMediaCard from './SocialMediaCard';

type Props = {
  className?: string;
};

async function SocialMedias({ className = '' }: Props) {
  const socialMedias = await getSocials();

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialMedias.map((socialMedia) => (
        <SocialMediaCard key={socialMedia._id} socialMedia={socialMedia} />
      ))}
    </div>
  );
}

export default SocialMedias;

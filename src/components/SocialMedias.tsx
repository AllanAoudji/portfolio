import { getSocials } from '@/sanity/sanity.queries';
import SocialMediaCard from './SocialMediaCard';

async function SocialMedias() {
  const socialMedias = await getSocials();

  return (
    <div className="flex justify-end gap-5">
      {socialMedias.map((socialMedia) => (
        <SocialMediaCard key={socialMedia._id} socialMedia={socialMedia} />
      ))}
    </div>
  );
}

export default SocialMedias;

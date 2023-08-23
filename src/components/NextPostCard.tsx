import Image from 'next/image';

type Props = {
  nextPost: {
    title: string;
    slug: string;
    mainImage: {
      url: string;
      alt: string;
    };
  } | null;
};

function NextPostCard({ nextPost }: Props) {
  if (!nextPost) {
    return null;
  }

  return (
    <Image
      alt={nextPost.mainImage.alt}
      src={nextPost.mainImage.url}
      width="1920"
      height="1080"
    />
  );
}

export default NextPostCard;

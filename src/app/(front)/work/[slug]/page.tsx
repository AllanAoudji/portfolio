import { getPost } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
import Title from '@src/components/Title';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

async function Post({ params, searchParams: { drawer } }: Props) {
  const post = await getPost(params.slug);

  if (post == null) {
    redirect('/');
  }

  return (
    <>
      <DrawerContainer open={drawer === 'true' ? true : false} />

      <div className="p-5">
        <Image
          alt={post.title}
          className="mb-5 mt-3 rounded-xl w-full"
          height="1200"
          src={post.mainImage.url}
          width="1200"
        />
        <Title>
          {post.title + ' '}
          {post.year && (
            <span className="font-light italic">
              {new Date(post.year).getFullYear()}
            </span>
          )}
        </Title>
        {post.categories && (
          <div className="flex gap-2 mt-5 flex-wrap">
            {post.categories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                className="bg-light block py-px px-3 rounded-full text-dark"
                key={category.slug}
              >
                {category.name.toLowerCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Post;

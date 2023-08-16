import { getPage } from '@/sanity/sanity.queries';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);

  if (page == null) {
    redirect('/');
  }

  return <h1>{page.name}</h1>;
}

import { notFound } from 'next/navigation';

import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import Title from '@src/components/Title';
import { getPage } from '@/sanity/sanity.queries';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: `Allan Aoudji | ${page.name}`,
    description: 'single page',
  };
}

export default async function Page({
  params,
  searchParams: { drawer },
}: Props) {
  const page = await getPage(params.slug);

  if (page == null) {
    notFound();
  }

  return (
    <PageContainer className="pt-36 transition-all sm:pt-48" drawer={drawer}>
      <Title className="pb-16 transition-all uppercase sm:pb-24">
        {page.name}
      </Title>
      {page.body && <RichPortableText value={page.body} />}
    </PageContainer>
  );
}

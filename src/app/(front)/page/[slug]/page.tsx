import { notFound } from 'next/navigation';

import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import Title from '@src/components/Title';
import { getPage } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import ContactForm from '@src/components/ContactForm';

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
    <PageContainer
      drawer={drawer}
      header={
        <Wrapper className="pb-16 uppercase sm:pb-24">
          <Title>{page.name}</Title>
        </Wrapper>
      }
    >
      {page.slug === 'contact' && <ContactForm className="pb-48" />}
      {page.body && <RichPortableText value={page.body} />}
    </PageContainer>
  );
}

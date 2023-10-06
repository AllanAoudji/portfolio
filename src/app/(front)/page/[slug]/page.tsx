import { notFound } from 'next/navigation';

import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import Title from '@src/components/Title';
import { getPage } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import ContactForm from '@src/components/ContactForm';
import Footer from '@src/components/Footer';
import Grid from '@src/components/Grid';

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
        <Wrapper className="pb-16 pt-48 uppercase sm:pb-24">
          <Title>{page.name}</Title>
        </Wrapper>
      }
      footer={<Footer darkBackground={false} />}
    >
      <Grid>
        {page.slug === 'contact' && (
          <ContactForm className="col-span-6 mx-auto pb-20 sm:col-span-12 lg:pb-0 lg:col-span-7" />
        )}
        {page.body && (
          <div
            className={`col-span-6 sm:col-span-12 ${
              page.slug === 'contact' ? 'lg:col-start-9' : 'md:col-span-12'
            }`}
          >
            <RichPortableText value={page.body} />
          </div>
        )}
      </Grid>
    </PageContainer>
  );
}

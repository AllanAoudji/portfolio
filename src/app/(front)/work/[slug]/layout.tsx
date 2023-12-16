import WorkHeader from '@src/components/WorkHeader';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allan Aoudji | Web & graphic designer',
  description: 'Home page',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <WorkHeader />
      {children}
    </>
  );
};

export default RootLayout;

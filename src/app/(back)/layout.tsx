export { metadata } from 'next-sanity/studio/metadata';

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return <body>{children}</body>;
};

export default RootLayout;

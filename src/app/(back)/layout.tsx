export { metadata } from 'next-sanity/studio/metadata';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <body>{children}</body>;
};

export default RootLayout;

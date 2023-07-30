export const metadata = {
  title: 'Backend NextJs/sanity v3 app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <body>{children}</body>;
};

export default RootLayout;

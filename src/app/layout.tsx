import './globals.css';

export const metadata = {
  title: 'Default NextJs/sanity v3 app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <html lang="fr">{children}</html>;
};

export default RootLayout;

import DrawerContainer from './DrawerContainer';

type Props = {
  children?: React.ReactNode;
  className?: string;
  drawer: string | undefined;
};

function PageContainer({ children, className = '', drawer }: Props) {
  return (
    <>
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <div className={`mx-auto md:max-w-5xl ${className}`}>{children}</div>
    </>
  );
}

export default PageContainer;

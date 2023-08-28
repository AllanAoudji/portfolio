import DrawerContainer from './DrawerContainer';

type Props = {
  header?: JSX.Element;
  footer?: JSX.Element;
  children?: React.ReactNode;
  className?: string;
  drawer: string | undefined;
};

function PageContainer({
  children,
  className = '',
  drawer,
  footer,
  header,
}: Props) {
  return (
    <>
      {header}
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <div className={`mx-auto md:max-w-5xl ${className}`}>{children}</div>
      {footer}
    </>
  );
}

export default PageContainer;

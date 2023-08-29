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
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <div>
        {header}
        <section
          className={`duration-300 px-6 mx-auto transition-all sm:px-12 sm:pt-4 md:max-w-5xl ${className}`}
        >
          {children}
        </section>
        {footer}
      </div>
    </>
  );
}

export default PageContainer;

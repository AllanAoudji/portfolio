import DrawerContainer from './DrawerContainer';
import ScrollUp from './ScrollUp';

type Props = {
  children?: React.ReactNode;
  className?: string;
  drawer: string | undefined;
  footer?: JSX.Element;
  header?: JSX.Element;
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
          className={`duration-300 mx-auto px-6 transition-all sm:px-12 md:max-w-5xl ${className}`}
        >
          {children}
        </section>
        {footer}
      </div>
      <ScrollUp />
    </>
  );
}

export default PageContainer;

import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

function WorkPostLink({ children, className = '', href }: Props) {
  return (
    <Link
      className={`relative uppercase after:absolute after:bg-darker after:bottom-0 after:h-px after:left-0 after:transition-all after:w-0 hover:after:w-full ${className}`}
      href={{ pathname: href }}
    >
      {children}
    </Link>
  );
}

export default WorkPostLink;

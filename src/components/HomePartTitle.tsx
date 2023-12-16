type Props = {
  className?: string;
  title: string;
};

function HomePartTitle({ className = '', title }: Props) {
  return <h2 className={`italic uppercase ${className}`}>{title}</h2>;
}

export default HomePartTitle;

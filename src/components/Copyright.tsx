const currentYear = new Date().getFullYear();

type Props = {
  className?: string;
};

function Copyright({ className = '' }: Props) {
  return (
    <div className={`text-sm ${className}`}>
      <span>
        © Allan Aoudji, {currentYear != 2023 && '2023 - '} {currentYear}
      </span>
    </div>
  );
}

export default Copyright;

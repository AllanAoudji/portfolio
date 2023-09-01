import Title from './Title';

type Props = {
  title: string;
  year: number;
};

function WorkTitle({ title, year }: Props) {
  return (
    <div className="gap-8 grid grid-cols-1 mx-auto pt-36 px-6 transition-all sm:pt-48 sm:px-12 md:grid-cols-5 md:max-w-6xl">
      <Title className="md:col-span-4 lg:col-span-3">
        {title + ' '}
        <span className="font-light text-3xl sm:text-4xl">{year}</span>
      </Title>
    </div>
  );
}

export default WorkTitle;

import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

const Home = async () => {
  const projects = await getProjects();

  return (
    <main className="content-center">
      <h1 className="text-3xl uppercase font-extrabold">Hello world</h1>
      <h1 className="text-3xl uppercase font-extrabold">
        my name is{' '}
        <b className="font-black bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
          Allan Aoudji
        </b>
      </h1>
      <h1 className="text-3xl uppercase font-extrabold">
        I&apos;m a graphic and web designer
      </h1>
      <section className="flex gap-3">
        {projects.map((project) => (
          <div
            className="rounded-lg overflow-hidden bg-white"
            key={project._id}
          >
            {project.image && (
              <Image
                alt={project.name}
                height={100}
                src={project.image}
                width={200}
              />
            )}
            <div className="p-2 bg-white">
              <p className="text-center text-black font-bold">{project.name}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;

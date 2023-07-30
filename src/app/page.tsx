import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

const Home = async () => {
  const projects = await getProjects();

  return (
    <h1>
      {projects.map((project) => (
        <div key={project._id}>
          <p>{project.name}</p>
          {project.image && (
            <Image
              alt={project.name}
              height={100}
              src={project.image}
              width={200}
            />
          )}
        </div>
      ))}
    </h1>
  );
};

export default Home;

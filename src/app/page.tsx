import { getProjects } from '@/sanity/sanity-utils';

const Home = async () => {
  const projects = await getProjects();

  return (
    <h1>
      {projects.map((project) => (
        <div key={project._id}>
          <p>{project.name}</p>
        </div>
      ))}
    </h1>
  );
};

export default Home;

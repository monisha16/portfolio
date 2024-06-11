import ProjectCard from 'src/components/ProjectCard';
import { projects } from 'src/data/projects';

const Projects = () => {
  return (
    <div
      id='projects'
      className='flex flex-col bg-black text-white items-center my-10 p-10'
    >
      <h1 className='text-[36px] mb-20'>
        My <strong>Projects</strong>
      </h1>
      <div className='w-full flex flex-col gap-y-20 md:px-20'>
        {projects.map((project, index) => {
          const {
            thumbnail = '',
            name = '',
            summary = '',
            skills = [],
            demoLink = '',
            githubLink = '',
          } = project;

          return (
            <ProjectCard
              key={index}
              thumbnail={thumbnail}
              name={name}
              summary={summary}
              skills={skills}
              demoLink={demoLink}
              githubLink={githubLink}
              serialNo={index + 1}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

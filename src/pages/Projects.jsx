import ProjectCard from 'src/components/ProjectCard';
import { projects } from 'src/data/projects';

const Projects = () => {
  return (
    <div className='flex flex-col bg-black text-white items-center my-10 p-10'>
      <h1 className='text-[36px] mb-20'>
        My <strong>Projects</strong>
      </h1>
      <div className='w-full flex flex-col gap-y-20 px-20'>
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

{
  /* <div className='flex w-full justify-around'>
<img src={heiwa} className='rounded h-60' />
<div className='flex flex-col justify-between ml-5 flex-1'>
  <div>
    <h1 className='text-[36px] font-bold'>01</h1>
    <h2 className='text-[30px]'>Heiwa</h2>
    <span className='font-thin text-lg'>
      Heiwa aims to immerse users in the therapeutic worlds of Color
      and Sound.
    </span>
  </div>

  <div>
    <span>ReactJS, Javascript, TailwindCSS, React Router</span>
    <div className='font-thin'>
      <a
        id='demo-link'
        href='https://heiwa-revamp.netlify.app/'
        target='_blank'
        rel='noreferrer'
        className='hover:underline hover:underline-offset-8'
      >
        Demo
      </a>{' '}
      |{' '}
      <a
        id='github-link'
        href='https://github.com/monisha16/Heiwa-2.0'
        target='_blank'
        rel='noreferrer'
        className='hover:underline hover:underline-offset-8'
      >
        Github
      </a>
    </div>
  </div>
</div>
</div>

<div className='flex w-full justify-around'>
<div className='flex flex-col justify-between ml-5 flex-1'>
  <div>
    <h1 className='text-[36px] font-bold'>02</h1>
    <h2 className='text-[30px]'>Heiwa</h2>
    <span className='font-thin text-lg'>
      Heiwa aims to immerse users in the therapeutic worlds of Color
      and Sound.
    </span>
  </div>

  <div>
    <span>ReactJS, Javascript, TailwindCSS, React Router</span>
    <div className='font-thin'>
      <a
        id='demo-link'
        href='https://heiwa-revamp.netlify.app/'
        target='_blank'
        rel='noreferrer'
        className='hover:underline hover:underline-offset-8'
      >
        Demo
      </a>{' '}
      |{' '}
      <a
        id='github-link'
        href='https://github.com/monisha16/Heiwa-2.0'
        target='_blank'
        rel='noreferrer'
        className='hover:underline hover:underline-offset-8'
      >
        Github
      </a>
    </div>
  </div>
</div>

<img src={heiwa} className='rounded h-60' />
</div> */
}

import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  const {
    thumbnail = '',
    name = '',
    summary = '',
    skills = [],
    demoLink = '',
    githubLink = '',
    serialNo = 0,
    align = 'left',
  } = props;

  return (
    <div className='grid md:grid-cols-[1fr_1fr] gap-20 justify-center grid-rows-[auto] pb-10'>
      {align === 'left' && (
        <img
          src={thumbnail}
          onClick={() => window.open(demoLink, '_blank')}
          className='rounded h-60 w-[400px] hidden md:flex cursor-pointer hover:scale-125 duration-500'
        />
      )}

      <div className='flex flex-col justify-between flex-1'>
        <img
          src={thumbnail}
          onClick={() => window.open(demoLink, '_blank')}
          className='rounded h-60 w-[400px] md:hidden flex cursor-pointer'
        />
        <div>
          <h1 className='text-[36px] font-bold'>0{serialNo}</h1>
          <h2 className='text-[30px]'>{name}</h2>
          <span className='font-thin text-lg'>{summary}</span>
        </div>

        <div>
          <div className='flex gap-4 mt-5 flex-wrap'>
            {skills.map((skill) => {
              return (
                <span
                  key={skill}
                  className='px-2 bg-gray-500 text-white rounded'
                >
                  {skill}
                </span>
              );
            })}
          </div>
          <div className='font-thin mt-2'>
            <a
              id='demo-link'
              href={demoLink}
              target='_blank'
              rel='noreferrer'
              className='hover:underline hover:underline-offset-8'
            >
              Demo
            </a>{' '}
            |{' '}
            <a
              id='github-link'
              href={githubLink}
              target='_blank'
              rel='noreferrer'
              className='hover:underline hover:underline-offset-8'
            >
              Github
            </a>
          </div>
        </div>
      </div>
      {align === 'right' && (
        <img
          src={thumbnail}
          onClick={() => window.open(demoLink, '_blank')}
          className='rounded h-60 w-[400px] hidden md:flex cursor-pointer hover:scale-125 duration-500'
        />
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  summary: PropTypes.string,
  skills: PropTypes.array,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  serialNo: PropTypes.number,
  align: PropTypes.string,
};

export default ProjectCard;

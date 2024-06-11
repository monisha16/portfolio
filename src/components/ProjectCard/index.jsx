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
    <div className='flex w-full justify-around flex-wrap'>
      {align === 'left' && (
        <img src={thumbnail} className='rounded h-60 w-[420px]' />
      )}
      <div className='flex flex-col justify-between ml-5 flex-1'>
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
        <img src={thumbnail} className='rounded h-60 w-[420px]' />
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
import PropTypes from 'prop-types';

const ExperienceCard = (props) => {
  const {
    companyName = '',
    companyIcon,
    duration,
    content = '',
    skills = [],
  } = props;
  return (
    <div className='border border-white w-[80%] h-full flex-col flex rounded p-5 mb-5'>
      <div className='flex justify-between w-full items-center flex-wrap gap-2'>
        <div className='flex gap-5 items-center'>
          <img src={companyIcon} width={50} />
          <span className='text-[30px]'>{companyName}</span>
        </div>

        <span>{duration}</span>
      </div>

      <span className='mt-5 text-lg text-gray-300 font-thin'>{content}</span>

      <div className='flex gap-4 mt-5 flex-wrap'>
        {skills.map((skill) => {
          return (
            <span key={skill} className='px-2 bg-gray-500 text-white rounded'>
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  companyName: PropTypes.string,
  companyIcon: PropTypes.string,
  duration: PropTypes.string,
  content: PropTypes.node,
  skills: PropTypes.array,
};

export default ExperienceCard;

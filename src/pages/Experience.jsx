import { experience } from 'src/data/experience';
import ExperienceCard from 'src/components/ExperienceCard';

const Experience = () => {
  return (
    <div className='flex flex-col bg-black text-white items-center my-10 p-10'>
      <h1 className='text-[36px] mb-2'>
        My <strong>Experience</strong>
      </h1>
      <span className='text-lg mb-16 text-gray-500'>
        3.5+ years of experience
      </span>

      {experience.map((company) => {
        const {
          companyName = '',
          companyIcon,
          duration,
          content = '',
          skills = ['hello', 'bye'],
        } = company;
        return (
          <ExperienceCard
            key={companyName}
            companyIcon={companyIcon}
            companyName={companyName}
            skills={skills}
            duration={duration}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default Experience;

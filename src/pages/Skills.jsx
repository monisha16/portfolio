import javascriptIcon from 'assets/icons/icon-javscript.svg';
import reactIcon from 'assets/icons/icon-react.svg';
import sassIcon from 'assets/icons/icon-sass.svg';
import typescriptIcon from 'assets/icons/icon-typescript.svg';
import tailwindIcon from 'assets/icons/tailwind-css.svg';
import gitIcon from 'assets/icons/git.svg';

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center my-10 px-10'>
      <h1 className='text-[36px] mb-2'>
        My <strong>Skills</strong>
      </h1>
      <span className='text-lg mb-16 text-gray-500'>
        The skills, tools and technologies I have worked with
      </span>

      <div className='w-full flex items-center justify-around flex-wrap gap-8'>
        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={reactIcon} alt='' />
          <span>React JS</span>
        </div>

        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={javascriptIcon} alt='' />
          <span>Javascript</span>
        </div>

        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={typescriptIcon} alt='' />
          <span>Typescript</span>
        </div>

        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={tailwindIcon} alt='' />
          <span>TailwindCSS</span>
        </div>

        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={sassIcon} alt='' />
          <span>Sass/Scss</span>
        </div>

        <div className='flex flex-col items-center gap-4 text-gray-500'>
          <img src={gitIcon} alt='' />
          <span>Git</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

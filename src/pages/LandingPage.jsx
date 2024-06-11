import girlWithLaptop from 'assets/illustrations/girl-with-laptop.svg';
import linkedInIcon from 'assets/icons/linkedin.svg';
import githubIcon from 'assets/icons/github.svg';

const LandingPage = () => {
  return (
    <div className='flex items-center w-full justify-center flex-wrap py-10 px-10'>
      <div>
        <span className='text-[48px]'>
          Hi I'm <strong>Monisha Tarkar,</strong>
        </span>
        <br />
        <span className='text-[40px]'>Frontend Developer</span>
        <div className='flex mt-10 gap-8'>
          <a
            id='linkedin-link'
            href='https://www.linkedin.com/in/monisha-tarkar/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={linkedInIcon}
              alt='LinkedIn'
              className='hover:scale-125 duration-200'
            />
          </a>
          <a
            id='github-link'
            href='https://github.com/monisha16'
            target='_blank'
            rel='noreferrer'
            className='pl-2'
          >
            <img
              src={githubIcon}
              alt='Github'
              className='hover:scale-125 duration-200'
            />
          </a>
        </div>
      </div>
      <img src={girlWithLaptop} width={630} />
    </div>
  );
};

export default LandingPage;

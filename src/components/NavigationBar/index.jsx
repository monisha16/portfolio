import downloadWhiteIcon from 'assets/icons/download-white.svg';
import downloadBlackIcon from 'assets/icons/download-black.svg';
import { useHover } from '@uidotdev/usehooks';
// import { twMerge } from 'tailwind-merge';

const NavigationBar = () => {
  const [ref, hovering] = useHover();

  return (
    <div className='flex bg-white gap-12 justify-center items-center w-full p-6'>
      <div className='flex gap-6 text-black font-semibold'>
        <span className='hover:underline hover:underline-offset-8 cursor-pointer'>
          About Me
        </span>
        <span className='hover:underline hover:underline-offset-8 cursor-pointer'>
          Skills & Experience
        </span>
        <span className='hover:underline hover:underline-offset-8 cursor-pointer'>
          Projects
        </span>
        <span className='hover:underline hover:underline-offset-8 cursor-pointer'>
          Contact Me
        </span>
      </div>
      <div
        ref={ref}
        className='flex items-center gap-2 px-4 py-3 bg-black text-white rounded hover:border-2 hover:border-black hover:bg-white hover:text-black duration-200 cursor-pointer'
      >
        <span>Resume</span>
        {hovering ? (
          <img src={downloadBlackIcon} alt='download' />
        ) : (
          <img src={downloadWhiteIcon} alt='download' />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

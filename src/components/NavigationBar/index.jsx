// import downloadWhiteIcon from 'assets/icons/download-white.svg';
// import downloadBlackIcon from 'assets/icons/download-black.svg';
// import { useHover } from '@uidotdev/usehooks';
import menuIcon from 'assets/icons/menu.svg';
import { useState } from 'react';
// import resume from 'assets/document/resume_monisha_tarkar.pdf';

const NavigationBar = () => {
  // const [ref, hovering] = useHover();
  const [opneMenu, setOpenMenu] = useState(false);

  return (
    <div className='flex bg-white gap-12 justify-center items-center w-full p-6'>
      <div className='md:flex hidden gap-6 text-black font-semibold'>
        <a
          href='#aboutMe'
          className='hover:underline hover:underline-offset-8 cursor-pointer'
        >
          About Me
        </a>
        <a
          href='#skills'
          className='hover:underline hover:underline-offset-8 cursor-pointer'
        >
          Skills & Experience
        </a>
        <a
          href='#projects'
          className='hover:underline hover:underline-offset-8 cursor-pointer'
        >
          Projects
        </a>
        <a
          href='#contactMe'
          className='hover:underline hover:underline-offset-8 cursor-pointer'
        >
          Contact Me
        </a>
      </div>
      {/* <div
        ref={ref}
        className='md:flex hidden items-center gap-2 px-4 py-3 bg-black text-white rounded hover:border-2 hover:border-black hover:bg-white hover:text-black duration-200 cursor-pointer'
      >
        <span>Resume</span>
        {hovering ? (
          <img src={downloadBlackIcon} alt='download' />
        ) : (
          <img src={downloadWhiteIcon} alt='download' />
        )}
      </div> */}
      <div className='md:hidden flex flex-col w-full items-end'>
        <img
          src={menuIcon}
          alt='menu'
          className='hover:scale-125 max-w-8 cursor-pointer'
          onClick={() => setOpenMenu(!opneMenu)}
        />
        {opneMenu && (
          <div className='flex flex-col w-full items-end mt-4 gap-6 text-black font-semibold duration-500'>
            <a
              href='#aboutMe'
              className='hover:underline hover:underline-offset-8 cursor-pointer'
            >
              About Me
            </a>
            <a
              href='#skills'
              className='hover:underline hover:underline-offset-8 cursor-pointer'
            >
              Skills & Experience
            </a>
            <a
              href='#projects'
              className='hover:underline hover:underline-offset-8 cursor-pointer'
            >
              Projects
            </a>
            <a
              href='#contactMe'
              className='hover:underline hover:underline-offset-8 cursor-pointer'
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

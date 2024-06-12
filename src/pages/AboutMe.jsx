import girlInBox from 'assets/illustrations/girl-in-box.svg';

const AboutMe = () => {
  return (
    <div
      id='aboutMe'
      className='flex w-full justify-center py-10 px-10 flex-wrap lg:flex-nowrap'
    >
      <img src={girlInBox} width={320} />
      <div className='flex flex-col gap-6 md:ml-10 flex-wrap'>
        <h1 className='text-[36px]'>
          About <strong>Me</strong>
        </h1>
        <p>
          I&apos;m a web developer passionate about bringing digital products to
          life with a wide array of front-end technologies. I love writing
          clear, performant code that creates responsive, beautiful user
          experiences with pixel-perfect designs. My strong suit is that I
          thrive in dynamic, fast-paced environments.
        </p>

        <p>
          I started my journey as a frontend developer in 2020. Since then,
          I&apos;ve embraced new challenges and honed my problem-solving skills.
        </p>
        <p>
          When I&apos;m not in developer mode, I feed my creativity by exploring
          new art mediums and cake recipes. P.S. I can bake a mean brownie.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

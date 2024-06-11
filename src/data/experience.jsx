import avomaIcon from 'assets/icons/avoma.png';
import avoAutomationIcon from 'assets/icons/avo-automation.png';

export const experience = [
  {
    companyName: 'Avoma',
    companyIcon: avomaIcon,
    content: (
      <>
        {' '}
        I spearheaded development of{' '}
        <strong className='text-white'>Avoma&apos;s Scheduler</strong> (Calendly
        & Chillipiper competitor), significantly boosting user engagement with
        features like customizable templates, automated meeting routing with CRM
        integration, and a Chrome extension driving
        <strong className='text-white'>
          {' '}
          over 14k meetings scheduled and 42k+ feature engagement to date.
        </strong>{' '}
        I also revamped the developer experience with modern tooling for
        increased efficiency and integrated AI in various parts of the
        application.
      </>
    ),
    duration: '01 Jun 2022 - 30 Apr 2024',
    skills: ['ReactJs', 'TailwindCSS', 'Javascript', 'Radix UI', 'React-Redux'],
  },
  {
    companyName: 'Avo Automation',
    companyIcon: avoAutomationIcon,
    content: (
      <>
        {' '}
        Worked with the <strong>Avo Discover</strong> team as a lead developer
        to{' '}
        <strong>
          revamp the product from Angular to React.js from the ground up.
        </strong>{' '}
        Collaborated in developing the React component library used across the
        organization&apos;s products, which is built using{' '}
        <strong>Storybook</strong> and wrapped around Microsoft&apos;s Fluent UI
        design system. Created components for Avo Discover&apos;s{' '}
        <strong>desktop application using Electron.</strong>
      </>
    ),
    duration: '21 Oct 2020 - 23 May 2022',
    skills: [
      'Angular',
      'ReactJS',
      'Javascript',
      'Electron',
      'Fluent UI',
      'Sass/Scss',
    ],
  },
];

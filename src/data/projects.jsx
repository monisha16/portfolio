import myRssFeeder from 'assets/illustrations/myRssFeeder.png';
import heiwa from 'assets/illustrations/heiwa.png';
import kyupid from 'assets/illustrations/kyupid.png';

export const projects = [
  {
    thumbnail: heiwa,
    name: 'Heiwa',
    summary:
      ' Heiwa aims to immerse users in the therapeutic worlds of Color and Sound.',
    skills: ['ReactJS', 'Javascript', 'TailwindCSS', 'React Router'],
    demoLink: 'https://heiwa-revamp.netlify.app/',
    githubLink: 'https://github.com/monisha16/Heiwa-2.0',
  },
  {
    thumbnail: myRssFeeder,
    name: 'My RSS Feeder',
    summary:
      'A simple web app that renders RSS feeds according to user inputs.',
    skills: ['Javascript', 'ReactJS', 'Scss'],
    demoLink: 'https://rss-reader.vercel.app/',
    githubLink: 'https://github.com/monisha16/rss-reader',
  },
  {
    thumbnail: kyupid,
    name: 'Kyupid',
    summary:
      'Providing data insigts through maps to Kyupid, a dating app service in Bangalore.',
    skills: ['Javascript', 'ReactJS', 'Scss', 'MapboxGL'],
    demoLink: 'https://kyupid-app.netlify.app/',
    githubLink: 'https://github.com/monisha16/kyupid',
  },
];

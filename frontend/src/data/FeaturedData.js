import Profile from '../assets/Profile.gif';
import macroMeals from '../assets/macromeals.jpg';
import techtab from '../assets/techtab.JPG';
import travelly from '../assets/screenshot.png';

const FeaturedData = [
  {
    id: '1',
    title: 'Travelly',
    description:
      'A trip finder app fused together with a social network functionality.',
    image: travelly,
    githubUrl: 'https://github.com/BavKudhail/travelly-app',
    deployedUrl: 'https://gentle-lowlands-70428.herokuapp.com/',
    techStack: ['React', 'Express', 'GraphQl', 'AWS S3', 'Socket.io'],
  },
  {
    id: '2',
    title: 'Creator Labs',
    description:
      'A platform for creatives to network, share skills and build new and exciting projects.',
    image: Profile,
    githubUrl: 'https://github.com/BavKudhail/creative-labs',
    deployedUrl: 'https://creativelabs-app.herokuapp.com/',
    techStack: [
      'Javascript',
      'jQuery',
      'Express',
      'MySQL',
      'AWS S3',
      'Socket.io',
    ],
  },
  {
    id: '3',
    title: 'Macro Meals',
    description:
      'A meal-planner app for the health and fitness conscious consumer with a busy schedule.',
    image: macroMeals,
    githubUrl: 'https://github.com/BavKudhail/macro-meals',
    deployedUrl: 'https://bavkudhail.github.io/macro-meals/',
    techStack: ['Javascript', 'jQuery', 'API', 'TailwindCSS'],
  },
  {
    id: '4',
    title: 'Tech Blog',
    description:
      'CMS style blog for developers to publish blog posts and comment on other posts.',
    image: techtab,
    githubUrl: 'https://github.com/BavKudhail/tech_blog_mvc',
    deployedUrl: 'https://techtab-blog.herokuapp.com/',
    techStack: ['Javascript', 'Express', 'NodeJS', 'MySQL', 'TailwindCSS'],
  },
];

export default FeaturedData;

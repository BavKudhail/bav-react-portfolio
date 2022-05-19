import teamProfile from "../assets/teamprofile.jpg";
import weatherDashboard from "../assets/weatherdashboard.jpg";
// default image
import defaultIMG from "../assets/maxresdefault.jpg";
import codeQuiz from "../assets/codequiz.jpg";
//
import creatorLabs from "../assets/creatorlabschat.jpg";

const ProjectData = [
  {
    id: "1",
    title: "Team Profile Generator",
    description:
      "Command-line application that generates dynamic team profile HTML page for a software company.",
    image: teamProfile,
    githubUrl: "https://github.com/BavKudhail/team-profile-generator",
    deployedUrl: "https://github.com/BavKudhail/team-profile-generator",
    tags: ["Back-end", "All"],
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that runs in the browser and feature dynamically updated HTML and CSS.",
    image: weatherDashboard,
    githubUrl: "https://github.com/BavKudhail/weather-dashboard",
    deployedUrl: "https://bavkudhail.github.io/weather-dashboard/",
    tags: ["Front-end", "All"],
  },
  {
    id: "3",
    title: "E-Commerce Back-end",
    description: "ORM database for an e-commerce platform.",
    image: defaultIMG,
    githubUrl: "https://github.com/BavKudhail/e-commerce-back-end",
    deployedUrl: "https://github.com/BavKudhail/e-commerce-back-end",
    tags: ["Back-end", "All"],
  },
  {
    id: "4",
    title: "Movie App",
    description:
      "A platform for creatives to network, share skills and build new and exciting projects.",
    image: defaultIMG,
    githubUrl: "https://github.com/BavKudhail/movie-react-app",
    deployedUrl: "https://github.com/BavKudhail/movie-react-app",
    tags: ["Front-end", "All"],
  },
  {
    id: "5",
    title: "Code Quiz",
    description: "Timed coding quiz with multiple-choice questions. ",
    image: codeQuiz,
    githubUrl: "https://github.com/BavKudhail/code-quiz-app",
    deployedUrl: "https://github.com/BavKudhail/code-quiz-app",
    tags: ["Front-end", "All"],
  },
  {
    id: "6",
    title: "Creator Labs",
    description:
      "A meal-planner app for the health and fitness conscious consumer with a busy schedule. ",
    image: creatorLabs,
    githubUrl: "https://github.com/BavKudhail/creative-labs",
    deployedUrl: "https://creativelabs-app.herokuapp.com/",
    tags: ["Full-stack", "All"],
  },
];

export default ProjectData;

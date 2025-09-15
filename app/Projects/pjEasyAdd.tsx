import CountrySwitchImg from "../../public/imgs/country-switch.png";
import carHubImg from "../../public/imgs/carHub.png";
import cgpaCalc from "../../public/imgs/cgpa.png";
import commentImg from "../../public/imgs/commentator.png";
import urlShortnImg from "../../public/imgs/urlshorter.png";
import Chrome from "../../public/imgs/chrome.png";
import Predictor from "../../public/imgs/colorPredictor.png";
import Booker from "../../public/imgs/ticketBooker.png";

const pjMaps = [
  {
    id: 1,
    repoUrl: "https://github.com/dodosebn/COUNTRY_DETAILS",
    liveUrl: "https://country-details-gray.vercel.app/",
    pjTitle: "Where in the world?",
    pjBio:
      "Next js frontend, Using REST countries API, Framer Motion, React Virtualization",
    pjPics: CountrySwitchImg,
    pjStacks: ["Next js", "SASS", "Rest Countries API", "TypeScript"],
  },
  {
    id: 2,
    repoUrl: "https://github.com/dodosebn/Dodos-luke",
    liveUrl: "https://dodos-luke.vercel.app/",
    pjTitle: "Car-Hub|E-commerce",
    pjBio:
      "Car enterprise, Using React js, Headless UI, Framer Motion, and Recharts with a neat DASHBOARD",
    pjPics: carHubImg,
    pjStacks: ["React js", "Tailwind", "Headless UI", "Recharts"],
  },
  {
    id: 3,
    repoUrl:
      "https://github.com/dodosebn/Frontend-Mentors-Interactive-comment-section",
    liveUrl:
      "https://frontend-mentors-interactive-comment-section-liiy4kqap.vercel.app/",
    pjTitle: "Commentators",
    pjBio:
      "React JS Frontend Mentor solution, Using a JSON file and Tailwind, Responsive in all screen sizes",
    pjPics: commentImg,
    pjStacks: ["React JS", "Tailwind"],
  },
  {
    id: 4,
    repoUrl: "https://github.com/dodosebn/url-shortening",
    liveUrl: "https://url-shortening-cyan-ten.vercel.app/",
    pjTitle: "URL_Brander",
    pjBio:
      "Next JS frontend, Using Clean URI API and Tailwind, Practiced server-side rendering in Next JS",
    pjPics: urlShortnImg,
    pjStacks: ["Next JS", "TypeScript", "Tailwind", "Clean URI API"],
  },
  {
    id: 5,
    repoUrl:
      "https://github.com/dodosebn/hngx_language_translator_detection_summary",
    liveUrl: "https://hngx-language-translator-detection-summary.vercel.app/",
    pjTitle: "Chrome Built-in APIs",
    pjBio:
      "Next.js Frontend, focusing on server-side rendering while integrating the Chrome Translator, Summary, and Language Detection APIs.",
    pjPics: Chrome,
    pjStacks: ["Next JS", "Chrome Built-In APIs", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    repoUrl: "https://github.com/dodosebn/hngy_multi-page_ticket-generator",
    liveUrl: "https://hngy-multi-page-ticket-generator.vercel.app/",
    pjTitle: "Ticket Booker",
    pjBio:
      "TypeScript, Linear Gradient – a project designed to deepen my TypeScript expertise, focusing on advanced features and efficient coding practices.",
    pjPics: Booker,
    pjStacks: ["Next JS", "Tailwind", "TypeScript"],
  },
];

export default pjMaps;

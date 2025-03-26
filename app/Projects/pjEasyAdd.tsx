import CountrySwitchImg from '../../public/imgs/country-switch.png';
import carHubImg from '../../public/imgs/carHub.png';
import cgpaCalc from '../../public/imgs/cgpa.png';
import commentImg from '../../public/imgs/commentator.png'
import urlShortnImg from '../../public/imgs/urlshorter.png';
import Chrome from '../../public/imgs/chrome.png';
import Predictor from '../../public/imgs/colorPredictor.png';
import Booker from '../../public/imgs/ticketBooker.png';
const pjMaps = [
    {
        id: 1,
        repoUrl: 'https://github.com/dodosebn/COUNTRY_DETAILS',
        liveUrl: 'https://country-details-gray.vercel.app/',
        pjTitle: 'Where in the world?',
        pjBio: 'Next js frontend, Using REST countries API, Framer Motion, ReactVitualization',
        pjPics: CountrySwitchImg,
        pjStacks: ['Next js', 'SASS', 'Rest Countries API', 'TypeScript']
    },
    {
        id: 2,
        repoUrl: 'https://github.com/dodosebn/Dodos-luke',
        liveUrl: 'https://dodos-luke.vercel.app/',
        pjTitle: "Car-Hub|E-commerce",
        pjBio: ' Car enterprise, Using React js, Headless ui, Framer Motion and Re-charts with Neat DASHBOARD',
        pjPics: carHubImg,
        pjStacks: ['React js', 'Tailwind', 'Headless ui', 'Recharts']
    },
    {
        id: 3,
        repoUrl: 'https://github.com/dodosebn/CHECK-YOUR-CGP',
        liveUrl: 'https://dodosebn.github.io/CHECK-YOUR-CGPA/',
        pjTitle: 'CGPA Calculator',
        pjBio: 'A Cumulative Grade Point Average Calculator, Built with Html, Css and Vanilla js with a nice multi-page UI',
        pjPics: cgpaCalc,
        pjStacks: ['Html', 'Css', 'Vanilla Js']
    },
    {
    id: 4,
    repoUrl: 'https://github.com/dodosebn/Frontend-Mentors-Interactive-comment-section',
    liveUrl: 'https://frontend-mentors-interactive-comment-section-liiy4kqap.vercel.app/',
    pjTitle: 'Commentators',
    pjBio: 'React js frontend_mentor solution, Using a json file and Tailwind,Responsive in all screen sizes ',
    pjPics: commentImg,
    pjStacks: ['React js', 'Tailwind']
},
{
    id: 5,
    repoUrl: 'https://github.com/dodosebn/url-shortening',
    liveUrl: 'https://url-shortening-cyan-ten.vercel.app/',
    pjTitle: 'url_Brander',
    pjBio: 'Next js frontend, Using Clean URI API and Tailwind, Practiced server side rendering in Next js',
    pjPics: urlShortnImg,
    pjStacks: ['Next js', 'TypeScript', 'Tailwind', 'Clean URI API']
},
{
    id:6, 
    repoUrl:'https://github.com/dodosebn/hngx_language_translator_detection_summary',
    liveUrl: 'https://hngx-language-translator-detection-summary.vercel.app/',
    pjTitle: 'Chromes Built-in Api',
  pjBio: 'Next.js Frontend, focusing on server-side rendering while integrating the Chrome Translator, Summary, and Language Detection APIs.',
pjPics: Chrome,
pjStacks: ['Next js', 'Chrome Built-In Api', 'TypeScript', 'Tailwind', 'Chrome Built-In Api']
},
{
    id:7, 
    repoUrl:'https://github.com/dodosebn/color-predictor-stage1',
    liveUrl: 'https://color-predictor-stage1.vercel.app/',
    pjTitle: '  Color Predictor',
    pjBio: 'JavaScript, Color Predictor, a project aimed at strengthening my JavaScript skills before fully transitioning to TypeScript.',
pjPics: Predictor,
pjStacks: ['Html', 'CSS', 'JavaScript', 'Css_Keyframes']
},
{
    id:8, 
    repoUrl:'https://github.com/dodosebn/hngy_multi-page_ticket-generator',
    liveUrl: 'https://hngy-multi-page-ticket-generator.vercel.app/',
    pjTitle: 'Ticket Booker',
    pjBio: 'TypeScript, Linear Gradient – a project designed to deepen my TypeScript expertise, focusing on advanced features and efficient coding practices.'pjPics: Booker,
pjStacks: ['Next js', 'tailwind', 'TypeScript']
},
]
export default pjMaps;
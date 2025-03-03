import CountrySwitchImg from '../../public/imgs/country-switch.png';
import carHubImg from '../../public/imgs/carHub.png';
import cgpaCalc from '../../public/imgs/cgpa.png';
import commentImg from '../../public/imgs/commentator.png'
import urlShortnImg from '../../public/imgs/urlshorter.png';

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
]
export default pjMaps;
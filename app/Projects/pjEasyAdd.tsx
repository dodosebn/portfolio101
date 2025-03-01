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
        pjBio: 'Next js frontend, using REST countries API, Framer Motion, ReactVitualization',
        pjPics: CountrySwitchImg,
        pjStacks: ['Next js', 'SASS', 'Rest Countries API', 'typeScript']
    },
    {
        id: 2,
        repoUrl: 'https://github.com/dodosebn/Dodos-luke',
        liveUrl: 'https://dodos-luke.vercel.app/',
        pjTitle: "Car-Hub|E-commerce",
        pjBio: ' car enterprise, using React js, headless ui, Framer Motion and re-charts with neat DASHBOARD',
        pjPics: carHubImg,
        pjStacks: ['React js', 'tailwind', 'headless ui', 'recharts']
    },
    {
        id: 3,
        repoUrl: 'https://github.com/dodosebn/CHECK-YOUR-CGP',
        liveUrl: 'https://dodosebn.github.io/CHECK-YOUR-CGPA/',
        pjTitle: 'CGPA Calculator',
        pjBio: 'A Cumulative Grade Point Average Calculator, built with html, css and vanilla js with a nice multi-page UI',
        pjPics: cgpaCalc,
        pjStacks: ['html', 'css', 'Vanilla Js']
    },
    {
    id: 4,
    repoUrl: 'https://github.com/dodosebn/Frontend-Mentors-Interactive-comment-section',
    liveUrl: 'https://frontend-mentors-interactive-comment-section-liiy4kqap.vercel.app/',
    pjTitle: 'Commentators',
    pjBio: 'React js frontend_mentor solution, using a json file and tailwind,responsive in all screen sizes ',
    pjPics: commentImg,
    pjStacks: ['React js', 'tailwind']
},
{
    id: 5,
    repoUrl: 'https://github.com/dodosebn/url-shortening',
    liveUrl: 'https://url-shortening-cyan-ten.vercel.app/',
    pjTitle: 'url_Brander',
    pjBio: 'Next js frontend, using Clean URI API and tailwind, practiced server side rendering in next js',
    pjPics: urlShortnImg,
    pjStacks: ['next js', 'typeScript', 'tailwind', 'Clean URI API']
},
]
export default pjMaps;
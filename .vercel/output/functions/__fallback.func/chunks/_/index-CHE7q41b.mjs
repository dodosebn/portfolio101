import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { FaBookReader, FaJs, FaGithub, FaNodeJs, FaReact, FaHtml5, FaSass, FaDocker } from 'react-icons/fa';
import { TbMessages } from 'react-icons/tb';
import { useNavigate, Link } from '@tanstack/react-router';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiTailwindCssFill, RiSupabaseFill } from 'react-icons/ri';
import { SiNextdotjs, SiFirebase, SiExpress, SiPrisma } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoMdMailUnread, IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { FaLocationDot, FaWhatsapp, FaLocationArrow, FaCheckDouble } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';
import { MdAddIcCall } from 'react-icons/md';

const ImButton = ({ name, icon: Icon }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("button", { className: "bg-[#fafafa] dark:bg-[#020615] dark:dark-gradient\r\n        dark:border dark:border-[#d9d9d9]\r\n shadow-custom rounded-xl p-[0.4rem] lg:p-2 text-lg lg:text-2xl flex gap-[0.40rem] lg:gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-1", children: /* @__PURE__ */ jsx(Icon, {}) }),
    name
  ] }) });
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const TransitionLink = ({ children, href, ...props }) => {
  const navigate = useNavigate();
  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(200);
    navigate({ to: href });
    await sleep(200);
    body?.classList.remove("page-transition");
  };
  return /* @__PURE__ */ jsx(Link, { to: href, ...props, onClick: handleTransition, children });
};
const MainInfoHolder = () => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center pt-16 md:pt-20", children: [
    /* @__PURE__ */ jsxs("section", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-black text-3xl dark:text-[#f1f1f1] font-bold", children: "Hey, I'm Orji Dominion." }),
      /* @__PURE__ */ jsx(
        "h3",
        {
          className: "italic font-bold text-xl inline-block\r\n    bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent",
          children: "Your next Web Developer"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex md:justify-center justify-start px-4", children: /* @__PURE__ */ jsx("p", { className: " max-w-xl text-center leading-8", children: "Building fast, scalable web apps with clean code, smooth UI, and solid backend architecture." }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "p-4 flex justify-center gap-[0.35rem] md:gap-4",
        children: [
          /* @__PURE__ */ jsx(TransitionLink, { href: "#Contact", children: /* @__PURE__ */ jsx(ImButton, { name: "Hire Me", icon: TbMessages }) }),
          /* @__PURE__ */ jsx("a", { href: `/doc/OrjiDominion.pdf`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(ImButton, { name: "View Resume", icon: FaBookReader }) })
        ]
      }
    )
  ] });
};
const Hero = () => {
  return /* @__PURE__ */ jsx("div", { className: "pt-14", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center bg-[#e1f9dc]\r\n       text-[#26803d] ring-1 ring-[#26803d] rounded-full px-4 py-2 space-x-2", children: [
    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-[#26803d] rounded-full" }),
    /* @__PURE__ */ jsx("span", { className: "text-[16px]", children: "Open to work" })
  ] }) }) });
};
const Home = () => {
  return /* @__PURE__ */ jsx("div", { id: "Home", children: /* @__PURE__ */ jsx(MainInfoHolder, {}) });
};
const AboutMeMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { id: "About", children: [
    " ",
    /* @__PURE__ */ jsxs("h1", { className: "lg:text-3xl text-center text-2xl py-5", children: [
      " ",
      "Who\u2019s Behind the Code?\u{1F4A1}",
      " "
    ] }),
    " ",
    /* @__PURE__ */ jsxs("div", { className: "pt-2 flex md:flex-row flex-col gap-6", children: [
      " ",
      /* @__PURE__ */ jsxs("section", { className: "flex-1", children: [
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/image-beside.png",
            alt: "all done",
            className: "cursor-pointer shadow-lg",
            onClick: () => setIsOpen(true)
          }
        ),
        " "
      ] }),
      " ",
      /* @__PURE__ */ jsxs("section", { className: "pt-3 px-5 md:px-3 flex-1", children: [
        " ",
        /* @__PURE__ */ jsxs("p", { className: "text-start leading-8", children: [
          " ",
          "I\u2019m a creative full-stack web developer passionate about software engineering and problem solving. I build scalable APIs, bring pixel-perfect designs to life, and craft user-friendly, visually appealing interfaces. With a background in",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "italic font-bold bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent", children: [
            " ",
            "Statistics",
            " "
          ] }),
          " ",
          "and a naturally analytical mindset, I focus on building features that truly",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "italic font-bold bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent", children: [
            " ",
            "enhance usability",
            " "
          ] }),
          " ",
          "and deliver real value.",
          " "
        ] }),
        " "
      ] }),
      " "
    ] }),
    " ",
    isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50", children: [
      " ",
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        " ",
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "absolute -top-4 -right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition",
            children: [
              " ",
              "\u2715",
              " "
            ]
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/imgs/ebn1 (2).jpg",
            alt: "all done enlarged",
            className: "max-w-[90vw] max-h-[90vh] shadow-2xl"
          }
        ),
        " "
      ] }),
      " "
    ] }),
    " "
  ] });
};
const SkillHol = ({ name, stackName: IconComponent }) => {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-[#09090b] dark:bg-[#1f2937]\r\n     text-white py-1 px-2 flex gap-1", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xl pt-[0.19rem]", children: /* @__PURE__ */ jsx(IconComponent, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "text-[1rem]", children: [
      " ",
      name
    ] })
  ] });
};
const SkillStyled = () => {
  const stacks = [
    {
      id: 1,
      name: "Html",
      icon: FaHtml5
    },
    {
      id: 2,
      name: "Css",
      icon: IoLogoCss3
    },
    {
      id: 3,
      name: "JavaScript",
      icon: FaJs
    },
    {
      id: 4,
      name: "TypeScript",
      icon: BiLogoTypescript
    },
    {
      id: 5,
      name: "Sass",
      icon: FaSass
    },
    {
      id: 6,
      name: "Tailwind",
      icon: RiTailwindCssFill
    },
    {
      id: 7,
      name: "React",
      icon: FaReact
    },
    {
      id: 8,
      name: "Next Js",
      icon: SiNextdotjs
    },
    {
      id: 9,
      name: "Version Control",
      icon: FaGithub
    },
    {
      id: 10,
      name: "Supabase",
      icon: RiSupabaseFill
    },
    { icon: FaReact, name: "Tanstack Start", id: 11 },
    {
      id: 12,
      name: "Node Js",
      icon: IoLogoNodejs
    },
    {
      id: 13,
      name: "Docker",
      icon: FaDocker
    },
    {
      id: 14,
      name: "Firebase",
      icon: SiFirebase
    },
    {
      id: 15,
      name: "Express",
      icon: SiExpress
    },
    {
      id: 16,
      name: "Prisma",
      icon: SiPrisma
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex gap-6 flex-wrap pt-4", children: stacks.map((stackoo, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SkillHol, { name: stackoo.name, stackName: stackoo.icon }) }, `${stackoo.id}-${index}`)) });
};
const experienceDetails = [
  {
    id: 1,
    duration: "November 2023 - December 2024",
    title: "Full-Stack Developer | Knoweth",
    content: [
      "Designed and implemented a custom authentication and authorization system (JWT/session-based), including secure login flows, token handling, and role-based access control.",
      "Engineered and maintained scalable REST APIs, building and load-testing endpoints to handle ~1M request scenarios using parameterized stress tests and performance monitoring.",
      "Reduced average API response latency by ~0.5ms through query optimization, caching strategies, and improved request handling.",
      "Structured database models and optimized queries to improve reliability, throughput, and long-term maintainability of core services.",
      "Wrote automated tests and validation for critical endpoints to ensure stability under high-load conditions and during deployments.",
      "Integrated and consumed backend services on the frontend with React, ensuring efficient data flow and reliable API interaction."
    ],
    date: "2023-11-01"
  },
  {
    id: 2,
    duration: "January 2025 - March 2025",
    title: "Frontend Developer | HNG12 Internship",
    content: [
      "Leveraged Chrome AI to auto-translate content based on the device\u2019s default language.",
      "Implemented reusable UI components and improved code maintainability using TypeScript, ensuring strict type-safety across the codebase.",
      "Worked in an agile, fast-paced development environment, contributing to sprint tasks, debugging sessions, and CI/CD-driven deployments."
    ],
    date: "2025-01-01"
  },
  {
    id: 3,
    duration: "May 2025 - September 2025",
    title: "Full-Stack Developer | IdeaIsCapital",
    content: [
      "Maintained the company\u2019s website and developed internal tooling to improve workflow efficiency across teams.",
      "Integrated REST APIs and optimized backend endpoints, ensuring seamless communication between the frontend and server.",
      "Built scalable dashboards and admin interfaces using React, Node.js, and database-driven workflows."
    ],
    date: "2025-05-01"
  }
];
const Expri = () => {
  const sortedExperience = [...experienceDetails].sort(
    (a, b) => b.date.localeCompare(a.date)
  );
  return /* @__PURE__ */ jsx("div", { className: "my-4 px-5 md:px-3", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-[650] pb-3", children: "Experience" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: sortedExperience.map((experience, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative pl-10 space-y-1",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-1 top-2 w-4 h-4 bg-[#FFA500] rounded-full border-2 border-white shadow" }),
          index !== sortedExperience.length + 1 && /* @__PURE__ */ jsx("span", { className: "absolute left-1.5 top-6 w-[1.5px] h-full bg-gray-300" }),
          /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-lg", children: [
            experience.title.split(" | ")[0],
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-xl inline-block bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent", children: [
              " ",
              "\xA0 | \xA0",
              " "
            ] }),
            experience.title.split(" | ")[1]
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-md text-gray-600 dark:text-gray-400", children: experience.duration }),
          /* @__PURE__ */ jsx("ul", { className: "list-outside space-y-3", children: experience.content.map((item, itemIndex) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "text-gray-700 dark:text-gray-300 leading-8 flex gap-1",
              children: [
                /* @__PURE__ */ jsx("span", { className: "mt-2 text-[#FFA500]", children: /* @__PURE__ */ jsx(FaCheckDouble, { size: 15 }) }),
                item
              ]
            },
            itemIndex
          )) })
        ]
      },
      `${experience.id}-${index}`
    )) })
  ] }) }) });
};
const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
const AboutCont = () => {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const expriRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const expriInView = useInView(expriRef, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: mainRef,
        variants: fadeVariant,
        initial: "hidden",
        animate: mainInView ? "visible" : "hidden",
        className: "lg:flex justify-between   dark:border-gray-400 pb-2",
        children: /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(AboutMeMain, {}) })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: skillsRef,
        variants: fadeVariant,
        initial: "hidden",
        animate: skillsInView ? "visible" : "hidden",
        className: "pt-3  pb-2 px-5 md:px-3",
        id: "Skills",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl lg:text-3xl text-center py-4", children: "The Tools Behind My Craft?\u{1F4A1}" }),
          /* @__PURE__ */ jsx(SkillStyled, {})
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: expriRef,
        variants: fadeVariant,
        initial: "hidden",
        animate: expriInView ? "visible" : "hidden",
        children: /* @__PURE__ */ jsx(Expri, {})
      }
    )
  ] });
};
const AboutMe = () => {
  return /* @__PURE__ */ jsx("div", { className: "py-7", children: /* @__PURE__ */ jsx(AboutCont, {}) });
};
const pjMaps = [
  {
    id: 2,
    liveUrl: "https://country-details-gray.vercel.app/",
    pjTitle: "Country Detailer",
    pjBio: "A web platform that shows detailed information about any country, including its flag, capital, continent, population, and major geographic regions.",
    pjStacks: [
      "Next.js",
      "SASS",
      "REST Countries API",
      "TypeScript",
      "Framer Motion"
    ]
  },
  {
    id: 2,
    liveUrl: "https://file-converter-rho.vercel.app/",
    pjTitle: "File Converter",
    pjBio: "The Most secured file converter. Transform images, documents, and media files with just a few clicks. No software installation required.",
    pjStacks: [
      "React",
      "Tailwind",
      "Express",
      "Docker",
      "LibreOffice"
    ]
  },
  {
    id: 4,
    liveUrl: "https://mind-bloom.pxxl.click/",
    pjTitle: "Mind Bloom",
    pjBio: "A gentle companion for young hearts learning to understand their feelings. Here, every emotion is valid, every thought matters, and you're never alone",
    pjStacks: [
      "Html",
      "Css",
      "Javascript"
    ]
  },
  {
    id: 1,
    liveUrl: "https://farmculator.vercel.app/",
    pjTitle: "Farmculator",
    pjBio: "A full-stack business tool where farmers manage sales, analyze insights through charts, and access AI-generated summaries with dedicated modules for farm activities.",
    pjStacks: [
      "Tanstack Start",
      "Tailwind",
      "Supabase",
      "TypeScript",
      "Framer Motion",
      "Authentication"
    ]
  },
  {
    id: 3,
    liveUrl: "https://iic-survey.vercel.app/",
    pjTitle: "Survera",
    pjBio: "A survey management system where admins create, publish, and track surveys, while responses are collected and displayed in real time for quick analysis.",
    pjStacks: ["Next.js", "Tailwind", "Supabase", "TypeScript", "Zustand"]
  },
  {
    id: 4,
    liveUrl: "https://url-shortening-cyan-ten.vercel.app/",
    pjTitle: "URL_Brander",
    pjBio: "A URL-shortening platform that lets users generate, customize, and brand their links with ease, providing cleaner and more memorable shareable URLs.",
    pjStacks: ["Next.js", "TypeScript", "Tailwind", "Clean URI API", "Node.js"]
  },
  {
    id: 5,
    liveUrl: "https://dodos-luke.vercel.app/",
    pjTitle: "Dodo's Luke",
    pjBio: "A modern car-listing platform built to practice core e-commerce concepts, showcasing available vehicles with clean UI, charts, and quick navigation tools.",
    pjStacks: ["React", "Recharts", "Tailwind", "TypeScript"]
  },
  {
    id: 6,
    liveUrl: "https://children-of-faith.vercel.app/",
    pjTitle: "Children-of-Faith",
    pjBio: "A presentation website built for an Israel-based NGO, highlighting their mission, charitable programs, community work, and media resources for supporters.",
    pjStacks: ["Next.js", "TypeScript", "Tailwind", "Supabase"]
  },
  {
    id: 7,
    liveUrl: "https://iic-wena-p.vercel.app/",
    pjTitle: "Wena Portfolio",
    pjBio: "A clean and modern agency portfolio showcasing services, completed projects, brand identity, and featured highlights for potential clients and partners.",
    pjStacks: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    id: 9,
    liveUrl: "https://iic-filosofi.vercel.app/",
    pjTitle: "IDC Portfolio",
    pjBio: "A creative agency portfolio presenting their services, past work, brand partners, and curated informational sections that emphasize their design philosophy.",
    pjStacks: ["HTML", "CSS", "JavaScript", "Keyframes"]
  },
  {
    id: 8,
    liveUrl: "https://j-listing-paso.vercel.app/",
    pjTitle: "Job-Lister",
    pjBio: "A job-listing interface built to practice filtering, search logic, and array methods, inspired by a Frontend-Mentor challenge and expanded with custom UI.",
    pjStacks: ["React", "Sass", "JavaScript", "Frontend-Mentors-Challenge"]
  }
];
function PjLinks({ url }) {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const handleFocus = () => setLoading(false);
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);
  const isExternal = url.startsWith("http");
  const handleHover = () => {
    if (!isExternal) return;
    const origin = new URL(url).origin;
    if (document.querySelector(`link[href="${origin}]`)) return;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  };
  if (!isExternal) {
    return /* @__PURE__ */ jsx(
      Link,
      {
        to: url,
        preload: "intent",
        onClick: () => setLoading(true),
        className: "font-medium underline",
        children: Loading ? "Opening.." : "View Project"
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      onMouseEnter: handleHover,
      onClick: () => setLoading(true),
      className: "font-medium underline",
      children: Loading ? "Opening" : "View Project"
    }
  );
}
const PjCont = ({
  pjTitle,
  pjBio,
  pjStacks,
  liveUrl
}) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative bg-[#f8f8f8] hover:bg-white/90 dark:bg-[#151515] dark:hover:bg-black/90 rounded-md shadow-lg \r\n  hover:shadow-xl transition-all duration-300 p-6 border border-gray-400 dark:border-gray-700 \r\n  group w-full h-80 flex flex-col justify-between",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-80 h-[3px] rounded-full bg-black/90 dark:bg-white dark:bg-[#d8d2d2] \r\n    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[#09090b] font-bold text-xl dark:text-[#fafafa] mb-2", children: pjTitle }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm font-medium", children: pjStacks.map((stack, index) => /* @__PURE__ */ jsxs("span", { children: [
            stack,
            index < pjStacks.length - 1 && " + "
          ] }, index)) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-[#f1f1f1] leading-relaxed text-[15px]", children: pjBio }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3 pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "dark:text-white text-black px-4 py-2 rounded-lg flex items-center\r\n     gap-2 transition-all duration-300 \r\n      dark:hover:text-[#fafafa]",
            children: [
              /* @__PURE__ */ jsx(PjLinks, { url: liveUrl }),
              /* @__PURE__ */ jsx("span", { className: "pt-0.5 transition-transform duration-300 group-hover:translate-x-1", children: /* @__PURE__ */ jsx(HiArrowUpRight, { className: "text-lg" }) })
            ]
          }
        ) })
      ]
    }
  );
};
const cardVariants$2 = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.2,
      ease: "easeOut"
    }
  })
};
function Projects() {
  return /* @__PURE__ */ jsxs("div", { className: "p-4", id: "Projects", children: [
    /* @__PURE__ */ jsx("h1", { className: "dark:text-[#fafafa] text-2xl lg:text-3xl text-center py-7 mx-auto ", children: "Few Collections of My Works\u{1F680}" }),
    /* @__PURE__ */ jsx("main", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: pjMaps.length > 0 ? pjMaps.map((pj, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: cardVariants$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
        custom: i,
        children: /* @__PURE__ */ jsx(
          PjCont,
          {
            pjTitle: pj.pjTitle,
            pjBio: pj.pjBio,
            pjStacks: pj.pjStacks,
            liveUrl: pj.liveUrl
          }
        )
      },
      pj.id
    )) : /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center py-12 text-gray-500", children: "New projects coming soon!" }) })
  ] });
}
const ContactDetails = [
  {
    id: 1,
    content: "+234 7069280208",
    logo: MdAddIcCall
  },
  {
    id: 2,
    content: "orjidominion32@gmail.com",
    logo: IoMdMailUnread
  },
  {
    id: 3,
    content: "Abakaliki, Nigeria",
    logo: FaLocationDot
  },
  {
    id: 4,
    content: "Whatsapp Me",
    logo: FaWhatsapp
  }
];
const FormItself = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        setTimeout(() => setSuccessMessage(""), 5e3);
      } else {
        setSuccessMessage("\u{1F6A9}Failed to send message. Please try again.");
        setTimeout(() => setSuccessMessage(""), 5e3);
      }
    } catch (err) {
      setSuccessMessage("\u{1F6A9} Failed to send message. Please try again.");
      setTimeout(() => setSuccessMessage(""), 5e3);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
    successMessage && /* @__PURE__ */ jsx("div", { className: "text-green-600 font-bold mb-2", "aria-live": "polite", children: successMessage }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: `${successMessage ? "hidden" : "block"} space-y-2`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-start", children: "Your Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: `p-2 w-full border rounded-md placeholder-gray-500 dark:placeholder-gray-400
              ${formErrors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
              focus:outline-none focus:ring-1 transition-all`,
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Enter Your Name",
                value: formData.name,
                onChange: handleChange,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-start", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: `p-2 w-full border rounded-sm placeholder-gray-500 dark:placeholder-gray-400
              ${formErrors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
              focus:outline-none focus:ring-1 transition-all`,
                type: "email",
                name: "email",
                id: "email",
                placeholder: "Enter Your Email",
                value: formData.email,
                onChange: handleChange,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "text-start", children: "Message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: `p-2 w-full rounded-sm h-24 border placeholder-gray-500 dark:placeholder-gray-400
              ${formErrors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
              focus:outline-none focus:ring-1 transition-all`,
                name: "message",
                id: "message",
                placeholder: "Table Your Idea",
                value: formData.message,
                onChange: handleChange,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex items-start", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "bg-[#09090b] dark:bg-[#1f2938] px-4 py-2 rounded-full text-[#fafafa] disabled:opacity-50 flex items-center space-x-1",
              children: loading ? /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-t-2 border-white" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(FaLocationArrow, { size: 18, className: "mt-1" }),
                /* @__PURE__ */ jsx("div", { children: "Send Message" })
              ] })
            }
          ) })
        ]
      }
    )
  ] });
};
const cardVariants$1 = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)"
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: custom * 0.18,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};
const ContactMe = () => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.3 },
      className: "px-4 mt-4",
      id: "Contact",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-3xl text-2xl text-center font-semibold pb-5", children: "I'm always open to new opportunities and excited to collaborate on innovative projects." }),
        /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col justify-center mx-auto text-center mt-5", children: [
          /* @__PURE__ */ jsx(FormItself, {}),
          /* @__PURE__ */ jsx("div", { className: "lg:border-l-2 border-b-2 border-gray-400 lg:mx-4 my-4" }),
          /* @__PURE__ */ jsx("div", { className: "mt-5", children: ContactDetails.map((item, index) => {
            const isWhatsApp = item.id === 4;
            const isEmail = item.id === 2;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                custom: index,
                variants: cardVariants$1,
                className: `flex gap-2 p-2 items-center ${isWhatsApp && "bg-green-800 text-white  rounded-full w-40 text-center"}`,
                children: [
                  /* @__PURE__ */ jsx(item.logo, {}),
                  isWhatsApp ? /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://wa.me/2347069280208?text=Hi%20I%20got%20your%20message%20from%20the%20website",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: /* @__PURE__ */ jsx("span", { children: item.content })
                    }
                  ) : isEmail ? /* @__PURE__ */ jsx("a", { href: "mailto:orjidominion32@gmail.com", children: /* @__PURE__ */ jsx("span", { children: item.content }) }) : /* @__PURE__ */ jsx("span", { children: item.content })
                ]
              },
              item.id
            );
          }) })
        ] })
      ]
    }
  );
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.2,
      ease: "easeOut"
    }
  })
};
const QuickAnimaB4Projects = () => {
  const icons = [
    /* @__PURE__ */ jsx(FaJs, { size: 27, className: "text-yellow-400" }),
    /* @__PURE__ */ jsx(FaGithub, { size: 27, className: "text-gray-800" }),
    /* @__PURE__ */ jsx(FaNodeJs, { size: 27, className: "text-green-600" }),
    /* @__PURE__ */ jsx(RiTailwindCssFill, { size: 27, className: "text-cyan-400" }),
    /* @__PURE__ */ jsx(FaReact, { size: 27, className: "text-sky-500" })
  ];
  const repeatedIcons = Array(30).fill(icons).flat().map((icon, i) => /* @__PURE__ */ jsx("div", { className: "w-13 h-15 flex items-center justify-center", children: icon }, i));
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: cardVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.3 },
      className: "relative flex justify-center mx-auto bg-gray-100\r\n      dark:bg-[#151515] rounded-full overflow-hidden w-[260px]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-full w-17 bg-linear-to-r \r\n                      from-gray-100 dark:from-black/90 to-transparent z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 h-full w-17 bg-linear-to-l \r\n                      from-gray-100 dark:from-black/90 to-transparent z-10" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "flex",
            animate: { x: ["0%", "-50%"] },
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear"
            },
            children: repeatedIcons
          }
        )
      ]
    }
  );
};
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative lg:px-16 lg:w-full max-w-[1500px] flex flex-col \r\n      justify-center mx-auto", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(AboutMe, {}),
    /* @__PURE__ */ jsx(QuickAnimaB4Projects, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(ContactMe, {})
  ] }) });
}

export { App as component };
//# sourceMappingURL=index-CHE7q41b.mjs.map

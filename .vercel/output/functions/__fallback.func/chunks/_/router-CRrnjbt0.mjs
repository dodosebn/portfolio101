import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts, Link } from '@tanstack/react-router';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, createContext } from 'react';
import { IoMailOutline, IoDocumentTextOutline, IoBuild } from 'react-icons/io5';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { BiX, BiMenuAltRight } from 'react-icons/bi';
import { FaCreativeCommons, FaXTwitter, FaUserAstronaut, FaCode } from 'react-icons/fa6';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import nodemailer from 'nodemailer';
import { json } from '@tanstack/router-core/ssr/client';
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from '../virtual/entry.mjs';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@tanstack/history';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';
import '@tanstack/react-router/ssr/server';

const appCss = "/assets/styles-DjgYvSCj.css";
const ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
}
const Logo = () => {
  return /* @__PURE__ */ jsx("div", { className: "logo-container inline-block cursor-pointer", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `/doc/OrjiDominion.pdf`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "p-1 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-all duration-300",
        children: /* @__PURE__ */ jsx(
          IoDocumentTextOutline,
          {
            size: 22,
            className: "text-[#f1c40f] dark:text-[#FFA500] transition-colors duration-300"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "text-[17px]  font-bold \r\n                     bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 \r\n                     dark:from-green-400 dark:via-green-500 dark:to-yellow-500\r\n                     bg-clip-text text-transparent\r\n                     transition-all duration-300 transform hover:scale-105",
        children: "Technically Dominion"
      }
    )
  ] }) });
};
const Navigations = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const NavLinks = [
    // { name: "Home", href: "/", icon: <RiHome5Fill size={20} /> },
    { name: "About", href: "/#About", icon: /* @__PURE__ */ jsx(FaUserAstronaut, { size: 20 }) },
    { name: "Skills", href: "/#Skills", icon: /* @__PURE__ */ jsx(IoBuild, { size: 20 }) },
    { name: "Projects", href: "/#Projects", icon: /* @__PURE__ */ jsx(FaCode, { size: 20 }) }
    // { name: "Contact", href: "#Contact", icon: <MdOutlineConnectWithoutContact size={20} /> },
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 bg-[#f8f8f8]/90\r\n     dark:bg-[#151515]/90  lg:px-16 flex justify-between\r\n      items-center max-w-[1500px] mx-auto p-2", children: [
    /* @__PURE__ */ jsx("div", { className: mobileMenuOpen ? "hidden md:block" : "block", children: /* @__PURE__ */ jsx(Logo, {}) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "md:hidden p-2 z-50 relative",
        onClick: () => setMobileMenuOpen(!mobileMenuOpen),
        children: mobileMenuOpen ? /* @__PURE__ */ jsx(BiX, { size: 32 }) : /* @__PURE__ */ jsx(BiMenuAltRight, { size: 32 })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-row gap-6 navbar dark:border-[#e5e7eb]\r\n         p-3 rounded-sm whitespace-nowrap", children: NavLinks.map((link) => /* @__PURE__ */ jsx(
      "li",
      {
        className: "dark:text-gray-300 hover:text-black/90 dark:hover:text-white \r\n              transition-all rounded-md",
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: link.href,
            className: "flex items-center gap-2 p-2 px-4\r\n                  dark:hover:border-gray-700 hover:border-b\r\n                  transition-all duration-100 ",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: link.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: link.name })
            ]
          }
        )
      },
      link.name
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-row gap-6 navbar dark:border-[#e5e7eb]\r\n         p-3 rounded-sm whitespace-nowrap", children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "dark:text-gray-300 hover:text-black/90 dark:hover:text-white \r\n              transition-all rounded-md",
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#Contact",
            className: "flex items-center gap-2 p-2 px-4\r\n     dark:hover:border-gray-700 hover:border-b\r\n     transition-all duration-100 ",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(MdOutlineConnectWithoutContact, { size: 20 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: "Contact" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden
        ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `px-6 flex flex-col gap-4 py-4 transition-all duration-500 
          bg-white dark:bg-[#151515]
          ${mobileMenuOpen ? "translate-y-0" : "-translate-y-3"}
          `,
            children: [
              NavLinks.map((item, index) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: item.href,
                  onClick: () => setMobileMenuOpen(false),
                  className: "flex items-center gap-4 p-4 transition-all border  \r\n              border-gray-700/20 dark:border-gray-200/30",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xl", children: item.icon }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: item.name })
                  ]
                },
                index
              )),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: "dark:text-gray-300 hover:text-black/90 dark:hover:text-white \r\n              transition-all rounded-md",
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#Contact",
                      onClick: () => setMobileMenuOpen(false),
                      className: "flex items-center gap-4 p-4 transition-all border  \r\n              border-gray-700/20 dark:border-gray-200/30\r\n     dark:hover:border-gray-700 \r\n     transition-all duration-100 ",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(MdOutlineConnectWithoutContact, { size: 20 }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: "Contact" })
                      ]
                    }
                  )
                }
              ) })
            ]
          }
        )
      }
    )
  ] });
};
const FooterReachOut = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex footer justify-between border-t-[1.3px]\r\n     border-gray-400 my-4 pt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "pt-1", children: /* @__PURE__ */ jsx(FaCreativeCommons, {}) }),
      " ",
      /* @__PURE__ */ jsx("p", { children: "26 Learning_Dodo's" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:orjidominion32@gmail.com", children: /* @__PURE__ */ jsx(IoMailOutline, {}) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/orji/", children: /* @__PURE__ */ jsx(FaLinkedin, {}) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/dodosebn", children: /* @__PURE__ */ jsx(FaGithub, {}) }) }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("a", { href: "https://x.com/Learning_Dodos" }),
        /* @__PURE__ */ jsx(FaXTwitter, {})
      ] })
    ] }) })
  ] });
};
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orji Dominion | Software Developer" },
      {
        name: "description",
        content: "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies."
      },
      { property: "og:title", content: "Orji Dominion | Software Developer" },
      {
        property: "og:description",
        content: "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies. Explore my work."
      },
      {
        property: "og:image",
        content: "https://orji-dominion.vercel.app/imgs/dominion.jpg"
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://orji-dominion.vercel.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Orji Dominion | Software Developer" },
      {
        name: "twitter:description",
        content: "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies. Explore my work."
      },
      {
        name: "twitter:image",
        content: "https://orji-dominion.vercel.app/imgs/dominion.jpg"
      }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-white text-black dark:dark-gradient dark:text-[#d9d9d9]", children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { children: [
        /* @__PURE__ */ jsx("div", { className: "p-6 lg:px-16", children: /* @__PURE__ */ jsx(Navigations, {}) }),
        children,
        /* @__PURE__ */ jsx("div", { className: "p-6 lg:px-16", children: /* @__PURE__ */ jsx(FooterReachOut, {}) })
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import('./admin-DnY3ngL9.mjs');
const Route$9 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import('./index-CHE7q41b.mjs');
const Route$8 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const Route$7 = createFileRoute("/api/send-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, message } = body;
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });
          await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Hey Dominion, You've a message from ${name}`,
            text: `From: ${name} (${email})

${message}`,
            html: `<p><strong>From:</strong> ${name} (${email})</p>
                   <p>${message}</p>`
          });
          return json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
          );
        } catch (error) {
          console.error("Error sending email:", error);
          return json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
          );
        }
      }
    }
  }
});
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$5 = () => import('./start.server-funcs-BD6hkoDQ.mjs');
const getTodos = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c9d51a5243700889c80f82ed57a4ce74b25f188e5ebd534c9c64965dc44e8e8d"));
const Route$6 = createFileRoute("/demo/start/server-funcs")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: async () => await getTodos()
});
const $$splitComponentImporter$4 = () => import('./start.api-request-DhPN1_Dc.mjs');
const Route$5 = createFileRoute("/demo/start/api-request")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const Route$4 = createFileRoute("/demo/api/names")({
  server: {
    handlers: {
      GET: () => json(["Alice", "Bob", "Charlie"])
    }
  }
});
const $$splitComponentImporter$3 = () => import('./start.ssr.index-BmCCCK3g.mjs');
const Route$3 = createFileRoute("/demo/start/ssr/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import('./start.ssr.spa-mode-B9T4iHor.mjs');
const Route$2 = createFileRoute("/demo/start/ssr/spa-mode")({
  ssr: false,
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getPunkSongs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f74da881407a186b78a7af058df21dafb0126eb11e5a4d54fd322e8feb5038f1"));
const $$splitComponentImporter$1 = () => import('./start.ssr.full-ssr-sKESwcwi.mjs');
const Route$1 = createFileRoute("/demo/start/ssr/full-ssr")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => await getPunkSongs()
});
const $$splitComponentImporter = () => import('./start.ssr.data-only-DnM_SzwZ.mjs');
const Route = createFileRoute("/demo/start/ssr/data-only")({
  ssr: "data-only",
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async () => await getPunkSongs()
});
const AdminRoute = Route$9.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ApiSendEmailRoute = Route$7.update({
  id: "/api/send-email",
  path: "/api/send-email",
  getParentRoute: () => Route$a
});
const DemoStartServerFuncsRoute = Route$6.update({
  id: "/demo/start/server-funcs",
  path: "/demo/start/server-funcs",
  getParentRoute: () => Route$a
});
const DemoStartApiRequestRoute = Route$5.update({
  id: "/demo/start/api-request",
  path: "/demo/start/api-request",
  getParentRoute: () => Route$a
});
const DemoApiNamesRoute = Route$4.update({
  id: "/demo/api/names",
  path: "/demo/api/names",
  getParentRoute: () => Route$a
});
const DemoStartSsrIndexRoute = Route$3.update({
  id: "/demo/start/ssr/",
  path: "/demo/start/ssr/",
  getParentRoute: () => Route$a
});
const DemoStartSsrSpaModeRoute = Route$2.update({
  id: "/demo/start/ssr/spa-mode",
  path: "/demo/start/ssr/spa-mode",
  getParentRoute: () => Route$a
});
const DemoStartSsrFullSsrRoute = Route$1.update({
  id: "/demo/start/ssr/full-ssr",
  path: "/demo/start/ssr/full-ssr",
  getParentRoute: () => Route$a
});
const DemoStartSsrDataOnlyRoute = Route.update({
  id: "/demo/start/ssr/data-only",
  path: "/demo/start/ssr/data-only",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  ApiSendEmailRoute,
  DemoApiNamesRoute,
  DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute,
  DemoStartSsrDataOnlyRoute,
  DemoStartSsrFullSsrRoute,
  DemoStartSsrSpaModeRoute,
  DemoStartSsrIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));

export { Route$6 as R, Route$1 as a, Route as b, createSsrRpc as c, getPunkSongs as g, router as r };
//# sourceMappingURL=router-CRrnjbt0.mjs.map

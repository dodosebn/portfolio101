import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import ThemeProvider from "@/components/themeProvider";
import { Navigations } from "@/components";
import FooterReachOut from "@/components/footerReachOut";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orji Dominion | Software Developer" },

      // Normal SEO description
      {
        name: "description",
        content:
          "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies.",
      },

      // ------- OPEN GRAPH (WhatsApp, LinkedIn, Facebook) -------
      { property: "og:title", content: "Orji Dominion | Software Developer" },
      {
        property: "og:description",
        content:
          "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies. Explore my work.",
      },
      {
        property: "og:image",
        content: "https://orji-dominion.vercel.app/imgs/dominion.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://orji-dominion.vercel.app/" },
      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Orji Dominion | Software Developer" },
      {
        name: "twitter:description",
        content:
          "I'm Orji Dominion, a software engineer crafting fast, intuitive apps with React, TanStack Start, and full-stack technologies. Explore my work.",
      },
      {
        name: "twitter:image",
        content: "https://orji-dominion.vercel.app/imgs/dominion.jpg",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-black dark:dark-gradient dark:text-[#d9d9d9]">
        <ThemeProvider>
          <div className="p-6 lg:px-16">
            <Navigations />
          </div>
          {children}
          <div className="p-6 lg:px-16">
            <FooterReachOut />
          </div>
        </ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}

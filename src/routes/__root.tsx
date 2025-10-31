import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';


import appCss from '../styles.css?url';
import ThemeProvider from '@/components/themeProvider';
import { Navigations } from '@/components';
import FooterReachOut from '@/components/footerReachOut';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Orji Dominion' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className='dark'>
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

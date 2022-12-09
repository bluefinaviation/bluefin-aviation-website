// // // import { getSettings } from 'lib/sanity.client';
import { NextSeo } from 'next-seo';

export default async function PageHead() {
  // //   const { title, description } = await getSettings();

  return (
    <>
      <NextSeo
        useAppDir={true}
        title="BlueFin Aviation | We'll Take You There"
        description="A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels."
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'shortcut icon',
            href: '/favicon.ico',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0',
          },
          {
            name: 'msapplication-TileColor',
            content: '#000000',
          },
          {
            name: 'msapplication-config',
            content: '/favicon/browserconfig.xml',
          },
          {
            name: 'theme-color',
            content: '#000',
          },
        ]}
      />
    </>
  );
}

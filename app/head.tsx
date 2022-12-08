// // // import { getSettings } from 'lib/sanity.client';
import { NextSeo } from 'next-seo';

export default async function PageHead() {
  // //   const { title, description } = await getSettings();

  return (
    <NextSeo
      useAppDir={true}
      title="BlueFin Aviation | We'll Take You There"
      description="A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels."
    />
  );
}

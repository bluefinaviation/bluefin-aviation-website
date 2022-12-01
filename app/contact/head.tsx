import { getSettings } from 'lib/sanity.client';

export default async function ContactHead() {
  const { title } = await getSettings();

  return (
    <>
      <title>{`Contact - ${title}`}</title>
      <meta
        key="description"
        name="description"
        content="The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Contact us to discuss more."
      />
    </>
  );
}

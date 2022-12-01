import { getSettings } from 'lib/sanity.client';

export default async function ServicesHead() {
  const { title } = await getSettings();

  return (
    <>
      <title>{`Services - ${title}`}</title>
      <meta
        key="description"
        name="description"
        content="The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our total aircraft management services."
      />
    </>
  );
}

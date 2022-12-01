import { getSettings } from 'lib/sanity.client';

export default async function AboutHead() {
  const { title } = await getSettings();

  return (
    <>
      <title>{`About | ${title}`}</title>
      <meta
        key="description"
        name="description"
        content="TThe best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Find out more about our story and team."
      />
    </>
  );
}

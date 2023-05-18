import { Container } from '@/components/global/Container';
import { StatsCard } from '@/components/pages/about/StatsCard';
import { StatsList } from '@/components/pages/about/StatsList';

export const StatsSection = ({ statsSection }) => {
  return (
    // <section className="my-24 bg-gradient-to-l from-sky-800 to-blue-700 py-8 mix-blend-multiply sm:py-16 lg:py-24">
    <section className="bg-slate-900 py-8 sm:py-16 lg:py-24">
      <Container>
        <StatsList>
          {statsSection.stats.map((stat, idx) => (
            <StatsCard key={idx} stat={stat} />
          ))}
        </StatsList>
      </Container>
    </section>
  );
};

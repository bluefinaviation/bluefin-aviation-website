import { StatsCard } from "@/components/about/stats-card";
import { StatsList } from "@/components/about/stats-list";
import { Container } from "@/components/shared/section-container";

export interface Stat {
  _key: string;
  value: string;
  _type: "stat";
  label: string;
}

interface StatSectionProps {
  stats: Stat[];
}

export const StatsSection = ({
  statsSection,
}: {
  statsSection: StatSectionProps;
}) => {
  return (
    // <section className="my-24 bg-linear-to-l from-sky-800 to-blue-700 py-8 mix-blend-multiply sm:py-16 lg:py-24">
    <section className="bg-primary py-8 sm:py-16 lg:py-24">
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

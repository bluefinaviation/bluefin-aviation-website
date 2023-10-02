import { Container } from "@/components/global/section-container"
import { StatsCard } from "@/components/pages/about/stats-card"
import { StatsList } from "@/components/pages/about/stats-list"

interface Stat {
  _key: string
  value: string
  _type: string
  label: string
}
interface StatSectionProps {
  stats: Stat[]
}

export const StatsSection = ({
  statsSection,
}: {
  statsSection: StatSectionProps
}) => {
  return (
    // <section className="my-24 bg-gradient-to-l from-sky-800 to-blue-700 py-8 mix-blend-multiply sm:py-16 lg:py-24">
    <section className="bg-branding py-8 sm:py-16 lg:py-24">
      <Container>
        <StatsList>
          {statsSection.stats.map((stat, idx) => (
            <StatsCard key={idx} stat={stat} />
          ))}
        </StatsList>
      </Container>
    </section>
  )
}

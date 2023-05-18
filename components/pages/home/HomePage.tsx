import { PageContainer } from '@/components/global/PageContainer';
import { ContactSection } from '@/components/pages/home/ContactSection';
import { HeroSection } from '@/components/pages/home/HeroSection';
import { PartnersSection } from '@/components/pages/home/PartnersSection';
import { ServicesSection } from '@/components/pages/home/ServicesSection';
import { TestimonialsSection } from '@/components/pages/home/TestimonialsSection';

export const HomePage = ({ data }: { data: any }) => {
  const {
    heroSection,
    servicesSection,
    partnersSection,
    contactSection,
    testimonialsSection,
  } = data;

  return (
    <PageContainer>
      <HeroSection heroSection={heroSection} />
      <ServicesSection
        servicesSection={servicesSection.section}
        tripService={servicesSection.tripService.card}
        fuelService={servicesSection.fuelService.card}
      />
      <PartnersSection partnersSection={partnersSection} />
      <ContactSection contactSection={contactSection} />
      <TestimonialsSection testimonialsSection={testimonialsSection} />
    </PageContainer>
  );
};

// // // import Link from 'next/link';

// // // // // import { Header } from '@/components/global/Header';
// // // import ScrollUp from '@/components/global/ScrollUp';
// // // import { ProjectListItem } from '@/components/pages/home/ProjectListItem';
// // // import { resolveHref } from '@/lib/sanity.links';
// // // import type { HomePagePayload } from '@/types/sanity';

// // // export const HomePage = ({ data }: { data: HomePagePayload }) => {
// // //   // Default to an empty object to allow previews on non-existent documents
// // //   const { overview, showcaseProjects, title } = data;

// // //   return (
// // //     <div className="space-y-20">
// // //       {/* Header */}
// // //       {/* {title && <Header centered title={title} description={overview} />} */}
// // //       {/* Showcase projects */}
// // //       {showcaseProjects && showcaseProjects.length > 0 && (
// // //         <div className="mx-auto max-w-[100rem] rounded-md border">
// // //           {showcaseProjects.map((project, key) => {
// // //             const href = resolveHref(project._type, project.slug);
// // //             if (!href) {
// // //               return null;
// // //             }
// // //             return (
// // //               <Link key={key} href={href}>
// // //                 <ProjectListItem project={project} odd={key % 2} />
// // //               </Link>
// // //             );
// // //           })}
// // //         </div>
// // //       )}

// // //       {/* Workaround: scroll to top on route change */}
// // //       <ScrollUp />
// // //     </div>
// // //   );
// // // };

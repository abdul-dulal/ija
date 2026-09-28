import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ResearchAreas from "@/components/ResearchAreas";
import ResearchProjects from "@/components/research/ResearchProjects";
import Methodologies from "@/components/research/Methodologies";
import GlobalNetwork from "@/components/GlobalNetwork";
import CTA from "@/components/CTA";
import { pageImages } from "@/data/pages";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Research — IJA",
  description:
    "Explore IJA's research focus areas, featured projects and methodologies in public health, environmental health and social development.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Project"
        title="Evidence That"
        highlight="Shapes the Future"
        text="From community health to climate exposure, our research generates the evidence decision-makers need to act with confidence."
        image={pageImages.research}
        badge={{ value: "12", label: "Research disciplines" }}
        anchors={[
          { label: "Focus areas", href: "#research" },
          { label: "Projects", href: "#projects" },
          { label: "Methods", href: "#methods" },
          { label: "Network", href: "#network" },
        ]}
      />
      <Projects />
      {/* <ResearchAreas /> */}
      {/* <ResearchProjects /> */}
      {/* <Methodologies /> */}
      {/* <GlobalNetwork /> */}
      {/* <CTA /> */}
    </PageShell>
  );
}

import Header from "@/components/Header";
import TeamHero from "@/components/TeamHero";
import TeamDirectory from "@/components/TeamDirectory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Team — IJA | People Behind the Research",
  description:
    "Meet IJA's researchers, biostatisticians, editors and coordinators advancing public health, environmental health and academic research.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <TeamHero />
        <TeamDirectory />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}

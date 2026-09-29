import Image from "next/image";
import PageShell from "@/components/PageShell";
import logo from "@/app/assets/img/logo.jpeg";

export const metadata = {
  title: "Publication Archives - International Online Journal Network",
  description:
    "Read research articles published by International Online Journal Network.",
};

const articles = [
  {
    title: "Effect of Malocclusion on Bully Victim School Students",
    href: "https://iojn.org/2023/08/07/effect-of-malocclusion-on-bully-victim-school-students/",
    image: logo,
    excerpt:
      "Background: Bullying or peer victimization in schools is a specific sort of aggressive behavior and can be described as a circumstance in which a student is subjected, frequently and over time, to unpleasant acts on the part of one or more classmates. The study’s objective was to evaluate Malocclusion’s effect on bully-victim school students, specifically […]",
  },
  {
    title:
      "Hypothyroidism Among Diabetic Pregnancy and its Effect on Maternal and Fetal Outcome",
    href: "https://iojn.org/2023/08/07/hypothyroidism-among-diabetic-pregnancy-and-its-effect-on-maternal-and-fetal-outcome/",
    image: logo,
    excerpt:
      "Abstract Background: Diabetic Pregnant women with hypothyroidism are associated with adverse obstetric outcome with various maternal and fetal complications. The aim of this study was to evaluate hypothyroidism in diabetic pregnancy and its effect on maternal and fetal outcome. Material & Methods: This cross-sectional study was conducted in department of Obstetrics and Gynaecology, Women & […]",
  },
  {
    title:
      "Epidemiology of Orthopaedic Fractures and Other Traumatic Injuries among Patients Admitted in a Tertiary Care Hospital: An Observational Study",
    href: "https://iojn.org/2023/08/07/epidemiology-of-orthopaedic-fractures-and-other-traumatic-injuries-among-patients-admitted-in-a-tertiary-care-hospital-an-observational-study/",
    image: logo,
    excerpt:
      "Abstract Background: Orthopaedic fractures and traumatic injuries are a growing concern for healthcare systems worldwide. Road Traffic Accidents (RTA) are among the top five causes of illness and mortality in South East Asian nations. Trauma caused by other factors, such as accidents at work or home, falls, and assaults, significantly contribute to overall mortality and […]",
  },
  {
    title:
      "Adiposity Indices as Predictors for Metabolic Syndrome Among Bangladeshi Women: A Cross Sectional Study",
    href: "https://iojn.org/2023/07/22/adiposity-indices-as-predictors-for-metabolic-syndrome-among-bangladeshi-women-a-cross-sectional-study/",
    image: logo,
    excerpt:
      "Background: The metabolic syndrome (MS) is described by the clustering of several risk factors for cardiovascular disease (CVD) such as hypertension, dyslipidemia, obesity, insulin resistance, and high fasting plasma glucose. The prevalence of MS is increasing worldwide and previous studies have shown that MS and CVD are more common in women above 55 years of […]",
  },
];

export default function PublicationsPage() {
  return (
    <PageShell>
      <section className="container-x mx-auto max-w-[1140px] py-10 sm:py-14">
        <h1 className="sr-only">Category: Publication</h1>
        <div className="space-y-10 sm:space-y-12">
          {articles.map((article) => (
            <article key={article.href} className="publication-archive-entry">
              <h2 className="mb-5 text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
                <a
                  href={article.href}
                  className="transition-colors hover:text-teal"
                >
                  {article.title}
                </a>
              </h2>
              <a href={article.href} aria-label={`Read ${article.title}`}>
                <Image
                  src={article.image}
                  alt=""
                  width={220}
                  height={300}
                  className="mb-4 h-auto w-[220px] max-w-full"
                />
              </a>
              <p className="max-w-4xl text-base leading-relaxed text-ink">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

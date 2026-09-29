import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { publications } from "@/data/publications";

export const metadata = {
  title: "Publication Archives - International Online Journal Network",
  description:
    "Read research articles published by International Online Journal Network.",
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <section className="container-x mx-auto max-w-[1140px] py-10 sm:py-14">
        <h1 className="sr-only">Category: Publication</h1>
        <div className="space-y-10 sm:space-y-12">
          {publications.map((article) => {
            const href = `/publications/${article.slug}`;

            return (
              <article key={article.slug} className="publication-archive-entry">
                <h2 className="mb-5 text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
                  <Link href={href} className="transition-colors hover:text-teal">
                    {article.title}
                  </Link>
                </h2>
                <Link href={href} aria-label={`Read ${article.title}`}>
                  <Image
                    src={article.image}
                    alt=""
                    width={220}
                    height={300}
                    className="mb-4 h-auto w-[220px] max-w-full"
                  />
                </Link>
                <p className="max-w-4xl text-base leading-relaxed text-ink">
                  {article.excerpt}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

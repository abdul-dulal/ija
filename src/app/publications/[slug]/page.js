import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { getPublication, publications } from "@/data/publications";

export function generateStaticParams() {
  return publications.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) return { title: "Publication not found — IJA" };

  return {
    title: `${publication.title} — IJA Publications`,
    description: publication.excerpt,
  };
}

export default async function PublicationDetailPage({ params }) {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) notFound();

  return (
    <PageShell>
      <article className="container-x mx-auto max-w-290 py-25">
        <Link href="/publications" className="link-arrow mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Publications
        </Link>

        <header className="border-b border-line pb-8">
          <p className="eyebrow">Publication · {publication.publishedAt}</p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-bold text-navy sm:text-4xl lg:text-5xl">
            {publication.title}
          </h1>
        </header>

        <div className="mt-9 grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
          <Image
            src={publication.image}
            alt="International Online Journal Network publication"
            width={220}
            height={300}
            className="h-auto w-[220px] max-w-full rounded-xl border border-line"
            priority
          />

          <div>
            <h2 className="heading-lg">Abstract</h2>
            <div className="mt-5 whitespace-pre-line leading-relaxed text-slate">
              {publication.abstract}
            </div>

            {/* {publication.downloadUrl && (
              <a
                href={publication.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-9"
              >
                Download Full Article <Download className="h-4 w-4" />
              </a>
            )} */}
          </div>
        </div>
      </article>
    </PageShell>
  );
}

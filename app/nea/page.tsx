import { EB_Garamond } from 'next/font/google'
import NextImage from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, Newspaper, Camera } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

async function getNews() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function NewsPage() {
  const newsItems = await getNews();

  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      
      {/* HEADER */}
      <header className="mb-20 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-slate-50 p-4 rounded-full text-slate-800 shadow-sm border border-slate-100">
            <Newspaper size={32} />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6 text-slate-900">Νέα & Ανακοινώσεις</h1>
        <div className="w-24 h-1 bg-slate-900 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 italic max-w-2xl mx-auto">
          Ενημερωθείτε για τις δράσεις και την καθημερινότητα της Αδελφότητας.
        </p>
      </header>

      {/* LIST SECTION (HORIZONTAL LAYOUT) */}
      <section className="flex flex-col gap-12">
        {newsItems.map((post: any) => (
          <article 
            key={post._id} 
            className="group flex flex-col md:flex-row gap-8 py-10 border-b-2 border-slate-900 last:border-0 items-center"
          >
            {/* Το σταθερό πλαίσιο που ήθελες */}
            <div className="w-full md:w-[450px] h-[250px] relative flex-shrink-0 bg-slate-50 overflow-hidden rounded-sm border border-slate-100 shadow-inner flex items-center justify-center">
              {post.mainImage ? (
                <NextImage 
                  src={urlFor(post.mainImage).url()} 
                  alt={post.title}
                  fill
                  className="object-contain p-4" // p-4 για να μην ακουμπάει στις άκρες
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Camera size={32} className="text-slate-300" />
                </div>
              )}
            </div>

            {/* Δεξιά: Περιεχόμενο */}
            <div className="flex flex-col flex-grow">
              {/* Ημερομηνία & Κατηγορία */}
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="text-slate-500 font-bold uppercase tracking-tight">
                  {new Date(post.publishedAt).toLocaleDateString('el-GR')}
                </span>
                <span className="text-slate-300">-</span>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[11px]">
                  ΑΝΑΚΟΙΝΩΣΕΙΣ
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold italic text-slate-900 mb-4 group-hover:text-blue-800 transition-colors leading-tight">
                <Link href={`/nea/${post.slug}`}>
                  «{post.title}»
                </Link>
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <Link 
                href={`/nea/${post.slug}`}
                className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 mt-auto uppercase"
              >
                ΠΕΡΙΣΣΟΤΕΡΑ <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ΑΝ ΔΕΝ ΥΠΑΡΧΟΥΝ ΝΕΑ */}
      {newsItems.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 mt-10">
          <p className="text-xl italic text-slate-500 font-serif uppercase tracking-widest text-slate-400">Δεν υπάρχουν πρόσφατες ανακοινώσεις.</p>
        </div>
      )}
    </main>
  )
}
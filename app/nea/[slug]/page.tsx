import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { EB_Garamond } from 'next/font/google'
import NextImage from 'next/image'
import { PortableText } from '@portabletext/react'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

// Στο Next.js 15+, το params είναι Promise
export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Πρώτα κάνουμε await τα params
  const { slug } = await params;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body
  }`;

  // 2. Μετά στέλνουμε το slug στο Sanity
  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <div className="text-center py-20 italic text-slate-500">
        Το άρθρο δεν βρέθηκε.
      </div>
    );
  }

  return (
    <main className={`${ebGaramond.className} max-w-4xl mx-auto p-6 md:p-20 bg-white min-h-screen`}>
      <Link href="/nea" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-10 transition-colors font-bold italic">
        <ArrowLeft size={20} /> Επιστροφή στα Νέα
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold italic mb-6 leading-tight text-slate-900">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-slate-400 italic">
          <Calendar size={18} />
          {new Date(post.publishedAt).toLocaleDateString('el-GR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </div>
      </header>

      {post.mainImage && (
        <div className="relative w-full h-[300px] md:h-[550px] mb-12 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50">
          <NextImage 
            src={urlFor(post.mainImage).url()} 
            alt={post.title} 
            fill 
            className="object-contain bg-slate-50" // Το object-contain δείχνει όλη την εικόνα
            priority 
            />
        </div>
      )}

      <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed italic text-justify">
        <PortableText value={post.body} />
      </article>

      <footer className="mt-20 pt-10 border-t border-slate-100 text-center text-slate-400 italic">
        Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου
      </footer>
    </main>
  );
}
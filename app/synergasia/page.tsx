'use client'

import { EB_Garamond } from 'next/font/google'
import { Handshake, Globe, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Synergasia() {
  return (
    <main className={`${ebGaramond.className} max-w-4xl mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>
      <header className="mb-16 text-center">
        <Handshake className="w-12 h-12 mx-auto mb-6 text-slate-800" />
        <h1 className="text-5xl md:text-6xl font-bold italic mb-4">Συνεργαστείτε μαζί μας</h1>
        <p className="text-xl text-slate-600 italic">Κοινές δράσεις για την ανάδειξη της πολιτιστικής κληρονομιάς.</p>
      </header>

      <section className="space-y-12 text-xl leading-relaxed italic text-justify">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <Globe className="text-slate-400 shrink-0" size={48} />
          <p>
            Η Αδελφότης συνεργάζεται με πολιτιστικούς και εκπαιδευτικούς φορείς, μουσεία και οργανισμούς, για την προώθηση της λαογραφίας και της πολιτιστικής κληρονομιάς των Σαρακατσαναίων.
          </p>
        </div>

        <p>
          Πιστεύουμε στην εξωστρέφεια και στη δύναμη των συνεργασιών. Παραμένουμε πάντα ανοικτοί σε νέες προτάσεις, κοινές πολιτιστικές πρωτοβουλίες και εκπαιδευτικά προγράμματα που αφορούν τον νομαδικό βίο και την παράδοση της Ηπείρου.
        </p>

        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white text-center not-italic">
          <MessageCircle className="w-10 h-10 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold mb-4 italic">Έχετε κάποια πρόταση;</h2>
          <p className="text-xl mb-8 opacity-80 italic">Θα χαρούμε να συζητήσουμε κάθε ιδέα για κοινή δράση.</p>
          <Link href="/#contact" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all">
            Εποικοινωνία
          </Link>
        </div>
      </section>
    </main>
  )
}
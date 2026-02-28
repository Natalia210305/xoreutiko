'use client'

import { EB_Garamond } from 'next/font/google'
import { Users, CheckCircle2, MessageSquare } from 'lucide-react'
import Link from 'next/link' // <--- Βεβαιωθείτε ότι υπάρχει αυτή η γραμμή

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Ethelontismos() {
  const categories = [
    "Υποστήριξη Πολιτιστικών Εκδηλώσεων",
    "Ψηφιοποίηση & Οργάνωση Αρχείου",
    "Επιμέλεια Λαογραφικής Συλλογής",
    "Συνδρομή στις Εκδόσεις",
    "Υποδοχή & Ξενάγηση στο χώρο μας"
  ];

  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      <header className="mb-16 text-center">
        <Users className="w-12 h-12 mx-auto mb-6 text-slate-800" />
        <h1 className="text-5xl md:text-6xl font-bold italic mb-4">Εθελοντισμός</h1>
        <p className="text-xl text-slate-600 italic leading-relaxed">
          Κάθε συμμετοχή μετράει — και αναγνωρίζεται.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-slate max-w-none text-xl leading-relaxed italic text-justify">
          <p>
            Η παρουσία των εθελοντών μας είναι καθοριστική. Στις εκδηλώσεις μας, στις εκδόσεις, στη διοργάνωση δράσεων, στην υποστήριξη του αρχείου και του μουσειακού υλικού. Αν θέλετε να προσφέρετε χρόνο ή γνώσεις, είμαστε εδώ να σας υποδεχθούμε. Κάθε συμμετοχή μετράει - και αναγνωρίζεται.
          </p>
        </div>

        {/* Τα στοιχεία εδώ είναι απλά cards (όχι κουμπιά) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all group select-none">
              <CheckCircle2 className="text-slate-400 group-hover:text-slate-900 transition-colors" />
              <span className="text-lg font-bold italic">{item}</span>
            </div>
          ))}
        </div>

        {/* Το κουμπί Επικοινωνίας */}
        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white text-center">
          <MessageSquare className="w-10 h-10 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold italic mb-4">Θέλετε να γίνετε μέλος της ομάδας;</h2>
          <p className="text-xl mb-8 opacity-80 italic">Επικοινωνήστε μαζί μας.</p>
          
          {/* Χρήση Link για τη σωστή διαδρομή */}
          {/* Χρήση Link με Hash για να ανοίξει το pop-up στην αρχική σελίδα */}
          <Link 
            href="/#contact" 
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer"
          >
            Επικοινωνία
          </Link>
        </div>
      </section>
    </main>
  )
}
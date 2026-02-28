'use client'

import { EB_Garamond } from 'next/font/google'
import { UserPlus, CheckCircle, Mail } from 'lucide-react'
import Link from 'next/link'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function GineteMelos() {
  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      <header className="mb-16 text-center">
        <UserPlus className="w-12 h-12 mx-auto mb-6 text-slate-800" />
        <h1 className="text-5xl md:text-6xl font-bold italic mb-4">Γίνετε Μέλος</h1>
        <p className="text-xl text-slate-600 italic">Στηρίξτε την παράδοση και τον πολιτισμό μας.</p>
      </header>

      <section className="space-y-12 text-xl leading-relaxed italic text-justify">
        <p>
            Η Αδελφότητα είναι ανοικτή σε όλους όσοι αισθάνονται κοντά στη σαρακατσάνικη παράδοση και επιθυμούν να στηρίξουν το έργο της. Τα μέλη συμμετέχουν στις δράσεις και τις εκδηλώσεις, ενημερώνονται για τις πρωτοβουλίες του Συλλόγου και λαμβάνουν την εφημερίδα «Σαρακατσάνικα Χαιρετήματα» ως ένα από τα προνόμια συμμετοχής τους.
        </p>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 not-italic">Τι σημαίνει να είστε μέλος:</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1.5 text-slate-900 shrink-0" size={20} />
              <span>Δικαίωμα συμμετοχής στις δράσεις και τις εκδηλώσεις της Αδελφότητας.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1.5 text-slate-900 shrink-0" size={20} />
              <span>Τακτική ενημέρωση για όλες τις πρωτοβουλίες και τις αποφάσεις του Συλλόγου.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1.5 text-slate-900 shrink-0" size={20} />
              <span>Ως προνόμιο της συμμετοχής, τα μέλη λαμβάνουν την εφημερίδα <strong>«Σαρακατσάνικα Χαιρετήματα»</strong>.</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white text-center not-italic">
          <Mail className="w-10 h-10 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold mb-4 italic">Ενδιαφέρεστε να γίνετε μέλος;</h2>
          <p className="text-xl mb-8 opacity-80 italic">Επικοινωνήστε με τη γραμματεία.</p>
          <Link href="/#contact" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all">
            Επικοινωνία
          </Link>
        </div>
      </section>
    </main>
  )
}
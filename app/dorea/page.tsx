'use client'

import { EB_Garamond } from 'next/font/google'
import { Heart, CreditCard, Info } from 'lucide-react'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Dorea() {
  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      <header className="mb-16 text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 text-red-600 animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-bold italic mb-4">Δωρεά & Χορηγία</h1>
        <p className="text-xl text-slate-600 italic leading-relaxed">
          Η στήριξή σας είναι η δύναμή μας για τη συνέχιση της παράδοσης.
        </p>
      </header>

      <section className="space-y-12">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-xl">
          <p className="mb-6">
            Η Αδελφότητα λειτουργεί χάρη στη στήριξη των μελών και των φίλων της. 
            Αν επιθυμείτε να συμβάλετε, η βοήθειά σας μπορεί να γίνει με δωρεά, χορηγία ή με άλλες μορφές ενίσχυσης, πάντα προς όφελος των πολιτιστικών και λαογραφικών μας δράσεων. Επίσης, η Αδελφότητα είναι ανοικτή στην αποδοχή δωρεών ή κληροδοτημάτων, τα οποία αξιοποιούνται αποκλειστικά για την προώθηση των σκοπών της και σύμφωνα με το Καταστατικό.
          </p>
          <div className="flex items-start gap-4 text-slate-500 italic text-lg">
            <Info className="shrink-0 mt-1" size={20} />
            <p>Όλες οι προσφορές αντιμετωπίζονται με πλήρη διαφάνεια και καταγράφονται στα επίσημα βιβλία του σωματείου.</p>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <CreditCard className="text-slate-900" size={32} />
            <h2 className="text-3xl font-bold italic">Στοιχεία Λογαριασμού</h2>
          </div>

          <div className="space-y-8 text-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-slate-100 pb-4">
              <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Τράπεζα</span>
              <span className="md:col-span-2 font-bold text-slate-800">EUROBANK</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-slate-100 pb-4">
              <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Αριθμός Λογαριασμού</span>
              <span className="md:col-span-2 font-mono text-slate-900">0026 0630 0901060 80012</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-slate-100 pb-4">
              <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">IBAN</span>
              <span className="md:col-span-2 font-mono text-slate-900 break-all">GR 230260 63000000 901060 80012</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-slate-100 pb-4">
              <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Δικαιούχος</span>
              <span className="md:col-span-2 italic">Αδελφότης των εν Αθήναις Σαρακατσαναίων Ηπείρου</span>
            </div>
          </div>

          <div className="mt-10 bg-slate-900 text-white p-6 rounded-2xl italic text-lg">
            <strong>Οδηγία:</strong> Παρακαλείσθε ως αιτιολογία κατάθεσης να αναφέρετε το ονοματεπώνυμο, το πατρώνυμο και την πόλη του μέλους.
          </div>
        </div>
      </section>
    </main>
  )
}
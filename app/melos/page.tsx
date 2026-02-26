'use client'

import { EB_Garamond } from 'next/font/google'
import { Heart, Users, UserPlus, Handshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Melos() {
  const actions = [
    {
      title: "ΔΩΡΕΑ / ΧΟΡΗΓΙΑ",
      desc: "Οικονομική ενίσχυση για το έργο και τις δράσεις μας.",
      icon: <Heart className="text-red-500" size={32} />,
      link: "/dorea",
      color: "hover:border-red-500"
    },
    {
      title: "ΕΘΕΛΟΝΤΙΣΜΟΣ",
      desc: "Προσφέρετε χρόνο και γνώσεις στη λειτουργία της Αδελφότητας.",
      icon: <Users className="text-blue-500" size={32} />,
      link: "/ethelontismos",
      color: "hover:border-blue-500"
    },
    {
      title: "ΓΙΝΕΤΕ ΜΕΛΟΣ",
      desc: "Εγγραφείτε στην Αδελφότητα και στηρίξτε την παράδοση.",
      icon: <UserPlus className="text-slate-900" size={32} />,
      link: "/ginete-melos", // ΑΛΛΑΓΗ: Οδηγεί στη σελίδα πληροφοριών μέλους
      color: "hover:border-slate-900"
    },
    {
      title: "ΣΥΝΕΡΓΑΣΤΕΙΤΕ ΜΑΖΙ ΜΑΣ",
      desc: "Προτάσεις για κοινές πολιτιστικές και εκπαιδευτικές δράσεις.",
      icon: <Handshake className="text-emerald-600" size={32} />,
      link: "/synergasia", // ΑΛΛΑΓΗ: Οδηγεί στη σελίδα πληροφοριών συνεργασίας
      color: "hover:border-emerald-600"
    }
  ];

  return (
    <main className={`${ebGaramond.className} max-w-6xl mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">Συμμετοχή & Συνδρομή</h1>
        <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed max-w-3xl mx-auto text-justify md:text-center">
          Η Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου πορεύεται από το 1977 χάρη στη συλλογική δύναμη και τη συμμετοχή των ανθρώπων της. 
        </p>
      </header>

      {/* Grid με τα 4 Κεντρικά Κουμπιά */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {actions.map((action, index) => (
          <Link 
            key={index} 
            href={action.link}
            className={`group p-8 border-2 border-slate-100 rounded-[2rem] transition-all duration-300 bg-white shadow-sm flex flex-col justify-between min-h-[250px] ${action.color} hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
          >
            <div>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {action.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold italic mb-3 text-slate-800">
                {action.title}
              </h3>
              <p className="text-lg text-slate-500 italic leading-snug">
                {action.desc}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest mt-6 group-hover:text-slate-900 transition-colors">
              Περισσοτερα <ArrowRight size={18} />
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-24 text-center border-t border-slate-100 pt-12">
        <p className="text-slate-400 italic">
          Από το 1977, διατηρούμε ζωντανή την παράδοση των Σαρακατσαναίων.
        </p>
      </footer>
    </main>
  )
}
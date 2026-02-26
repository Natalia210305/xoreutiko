'use client'

import Image from 'next/image'
import Link from 'next/link' // Εισαγωγή του Link
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Home() {
  // Τα states και ο κώδικας για Menu/Contact αφαιρέθηκαν για να έρχονται από το Layout
  
  return (
    <main className={`${ebGaramond.className} max-w-6xl mx-auto p-4 md:p-10 text-slate-900 bg-white min-h-screen relative`}>
      
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-200 pb-10 mb-10 pr-12">
        <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
        </div>
        <div className="text-center md:text-center w-full">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-800">
            Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου (1977-σήμερα)
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 italic mt-3">
            49 Χρόνια Πολιτιστικής Προσφοράς και Δράσης
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-8 text-xl leading-relaxed text-slate-700">
          <p className="font-medium text-2xl text-justify text-slate-800">
            Από ιδρύσεως της Αδελφότητας, όλα τα συμβούλια και τα μέλη, ενωμένοι, συνεχίζουμε τον αγώνα μας για τη διάσωση και τη διάδοση της σαρακατσάνικης παράδοσης.
          </p>
          <div className="border-l-4 border-slate-300 pl-6 ">
            <p className="text-3xl font-bold italic text-slate-800">"Μαζί διατηρούμε ζωντανή την παράδοση!"</p>
          </div>
          <p className="text-justify">
            Από το 1977 υπηρετούμε σταθερά τον πολιτισμό των Σαρακατσαναίων, με δράση, με ήθος, με αγάπη για τις ρίζες μας. Η στήριξή σας μας δίνει δύναμη να συνεχίσουμε!
          </p>
          
          {/* Ενότητα με τα 4 Κεντρικά Κουμπιά Δράσης */}
          <div className="pt-12 border-t border-slate-100 mt-12">
            <h4 className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-8 text-center md:text-left">
              Πώς μπορείτε να συμμετέχετε
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Κουμπί 1: Γίνετε Μέλος */}
              <Link href="/ginete-melos" className="group flex items-center justify-between bg-slate-900 text-white p-6 rounded-2xl hover:bg-[#1e3a8a] transition-all duration-300 shadow-lg border border-slate-800">
                <div className="text-left font-sans">
                  <span className="text-xl md:text-2xl font-black block leading-tight">ΓΙΝΕΤΕ ΜΕΛΟΣ</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl group-hover:translate-x-2 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>

              {/* Κουμπί 2: Εθελοντισμός */}
              <Link href="/ethelontismos" className="group flex items-center justify-between bg-slate-900 text-white p-6 rounded-2xl hover:bg-[#1e3a8a] transition-all duration-300 shadow-lg border border-slate-800">
                <div className="text-left font-sans">
                  <span className="text-xl md:text-2xl font-black block leading-tight">ΕΘΕΛΟΝΤΙΣΜΟΣ</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl group-hover:translate-x-2 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>

              {/* Κουμπί 3: Δωρεά */}
              <Link href="/dorea" className="group flex items-center justify-between bg-white border-2 border-slate-900 text-slate-900 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-md">
                <div className="text-left font-sans">
                  <span className="text-xl md:text-2xl font-black block leading-tight uppercase">ΔΩΡΕΑ / ΧΟΡΗΓΙΑ</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-xl group-hover:translate-x-2 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>

              {/* Κουμπί 4: Συνεργασία */}
              <Link href="/synergasia" className="group flex items-center justify-between bg-white border-2 border-slate-900 text-slate-900 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-md">
                <div className="text-left font-sans">
                  <span className="text-xl md:text-2xl font-black block leading-tight uppercase">ΣΥΝΕΡΓΑΣΤΕΙΤΕ ΜΑΖΙ ΜΑΣ</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-xl group-hover:translate-x-2 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
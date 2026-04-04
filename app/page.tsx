'use client'

import { useState, useEffect } from 'react' // <--- Πρόσθεσε αυτό
import Link from 'next/link'
import { EB_Garamond } from 'next/font/google'
import NextImage from 'next/image'
import { Maximize2, X } from 'lucide-react' // <--- Πρόσθεσε αυτά]

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Home() {
 const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ΕΔΩ ΕΙΝΑΙ Η ΜΟΝΑΔΙΚΗ ΛΙΣΤΑ. ΑΝ ΔΕΝ ΕΙΝΑΙ ΕΔΩ, ΔΕΝ ΘΑ ΕΜΦΑΝΙΣΤΕΙ ΠΛΑΙΣΙΟ.
    const myImages = [
      '/μολοηματα.jpg', 
      '/ιστοριες.jpg', 
      '/tragoudia.jpg',
      '/ΣΑΡΑΚΑΤΣΑΝΑ.jpg',
      '/ekdilosi1.jpg',
      '/ekdilosi2.jpg',
      '/ekdilosi3.jpg',
      '/exofilo.png',
      '/genealogika.png',
      '/konaki.jpg',
      '/mouseio1.jpg',
      '/mouseio2.jpg',
      '/mouseio3.jpg',
      '/mouseio4.jpg',
      '/mouseio5.jpg',
      '/mouseio6.jpg',
      '/roumeliotes.jpg',
      '/topos-xronos.jpg',
      '/tragoudi1.jpg',
      '/tragoudi2.jpg',
      '/tragoudi3.jpg',
      '/xatz1.jpg',
      '/xatz2.jpg',
      '/xatz5.jpg',
      '/xoros1.jpg',
      '/xoros2.jpg',
      '/xoros3.jpg',
      '/xoros4.jpg',
      '/ΑΝΑΛΕΚΤΑ.png',
      '/ΕΦΗΜΕΡΙΔΑ.png',
      '/ΚΑΤΣΑΝΤΩΝΗΣ.jpg',
      '/ΧΝΑΡΙΑ.png',
      '/ΧΟΡΕΥΤΙΚΟ.jpg',
      '/ΧΟΡΕΥΤΙΚΟ2.jpg'
    ];

    // Ανακάτεμα
    const shuffled = [...myImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Υπολογισμός με βάση το ΠΡΑΓΜΑΤΙΚΟ μέγεθος της λίστας
  const firstEight = shuffledImages.slice(0, 8);
  const remainingImages = shuffledImages.slice(8);
  const remainingCount = remainingImages.length;

  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      
      
      {/* Το παλιό Header αφαιρέθηκε από εδώ γιατί τώρα περιλαμβάνεται στο Navigation component */}

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
      {/* 2. Gallery Αρχικής */}
      <section className="mt-32 pb-20 border-t border-slate-100 pt-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold italic mb-4">Στιγμιότυπα Αδελφότητας</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6 px-4">
          {firstEight.map((src, idx) => (
            <div key={idx} className="relative break-inside-avoid rounded-3xl overflow-hidden cursor-zoom-in group border border-slate-100 shadow-sm"
                 onClick={() => setSelectedImg(src)}>
              <NextImage src={src} alt="Gallery" width={600} height={800} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                   <Maximize2 size={24} className="text-slate-900" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {remainingCount > 0 && (
          <div className="mt-16 flex justify-center">
            <button onClick={() => setShowMoreModal(true)} className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
              Δείτε όλες τις φωτογραφίες ({remainingCount})
            </button>
          </div>
        )}
      </section>

      {/* 3. Overlay (Modal) - ΜΟΝΟ ΟΣΕΣ ΕΧΟΥΜΕ */}
      {showMoreModal && (
        <div className="fixed inset-0 z-[400] bg-white overflow-y-auto">
          <div className="sticky top-0 z-[410] bg-white/90 backdrop-blur-md p-6 flex justify-between items-center border-b">
            <h3 className="text-2xl font-bold italic">Συλλογή Φωτογραφιών ({shuffledImages.length})</h3>
            <button onClick={() => setShowMoreModal(false)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200">
              <X size={28} />
            </button>
          </div>
          <div className="p-6 md:p-12 columns-1 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {shuffledImages.map((src, idx) => (
              <div key={idx} className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-zoom-in group shadow-md"
                   onClick={() => setSelectedImg(src)}>
                <NextImage src={src} alt="Gallery" width={500} height={500} className="w-full h-auto object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Lightbox (Zoom) */}
      {selectedImg && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/95 p-4 md:p-10"
             onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white p-3 bg-white/10 rounded-full"><X size={32} /></button>
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <NextImage src={selectedImg} alt="Zoom" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}

    </main>
  )
}
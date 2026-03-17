'use client'

import { useState } from 'react'
import { EB_Garamond } from 'next/font/google'
import Image from 'next/image'
import { Newspaper, Book, Music, ChevronRight, FileText, ChevronDown, X } from 'lucide-react'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Ekdoseis() {
  const [openBook, setOpenBook] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const books = [
    { 
      title: "Σαρακατσάνικα τραγούδια της Ηπείρου", 
      year: "1983", 
      subtitle: "Συλλογή σαρακατσάνικων τραγουδιών Ηπείρου - 400 τραγούδια με λαογραφικά σχόλια.",
      desc: "Καταγραφή περίπου 400 τραγουδιών από ηλικιωμένους Σαρακατσαναίους της Ηπείρου, με παράλληλη τεκμηρίωση λαογραφικών στοιχείων. Πρόκειται για μία από τις πληρέστερες συλλογές σαρακατσάνικων τραγουδιών που έχουν εκδοθεί έως σήμερα." 
    },
    { 
      title: "Η Σαρακατσάνα – Εικόνα και Λόγος", 
      year: "2008", 
      subtitle: "Λεύκωμα αφιερωμένο στη γυναίκα της υπαίθρου, με τη στήριξη της Γ.Γ. Ισότητας",
      desc: (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div onClick={() => setZoomedImage("/ΣΑΡΑΚΑΤΣΑΝΑ.jpg")} className="relative w-[140px] h-[190px] shrink-0 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white cursor-zoom-in active:scale-95 transition-transform">
            <Image src="/ΣΑΡΑΚΑΤΣΑΝΑ.jpg" alt="Εξώφυλλο" fill className="object-contain p-1" unoptimized />
          </div>
          <p className="text-lg leading-relaxed italic text-justify text-slate-700">
            Λεύκωμα αφιερωμένο στη γυναίκα της υπαίθρου, έκδοθεν με τη στήριξη της Γενικής Γραμματείας Ισότητας. 
            Μέσα από σπάνιες φωτογραφίες και μαρτυρίες, αναδεικνύεται ο ρόλος της Σαρακατσάνικης γυναίκας 
            στην οικογένεια και στην κοινωνία, ως πυρήνας αντοχής και πολιτιστικής συνέχειας.
          </p>
        </div>
      )
    },
    { 
      title: "Μνήμη Κατσαντώνη", 
      year: "2008", 
      subtitle: "Ανατύπωση δύο ιστορικών βιογραφιών του ήρωα",
      desc: (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div onClick={() => setZoomedImage("/ΚΑΤΣΑΝΤΩΝΗΣ.jpg")} className="relative w-[140px] h-[190px] shrink-0 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white cursor-zoom-in active:scale-95 transition-transform">
            <Image src="/ΚΑΤΣΑΝΤΩΝΗΣ.jpg" alt="Εξώφυλλο" fill className="object-contain p-1" unoptimized />
          </div>
          <div className="flex justify-center w-full">
            <ul className="list-disc text-left space-y-2 max-w-fit">
              <li>«Βίος του Κατζαντώνη» του Επαμεινώνδα Φραγκίστα (1862)</li>
              <li>Μετάφραση της γαλλικής βιογραφίας του Eugene Yemeniz (1869)</li>
              <li className="list-none mt-4 italic opacity-80">(Η έκδοση έγινε με αφορμή τα 200 χρόνια από τον μαρτυρικό θάνατό του Κατσαντώνη)</li>
            </ul>
          </div>
        </div>
      )    
    },
    { 
      title: "Σαρακατσάνικα Μολόηματα", 
      year: "2012, επανέκδοση 2023", 
      subtitle: "του Ναπολέοντα Βαγγελή",
      desc: "Συλλογή εύθυμων αλλά και διδακτικών ιστοριών από τη σαρακατσάνικη ζωή, γραμμένων με το γλωσσικό ύφος και το πνεύμα της εποχής." 
    },
    { 
      title: "Σαρακατσαναίοι - Πορεία στον Τόπο και στον Χρόνο", 
      year: "2012", 
      desc: "Φωτογραφικό λεύκωμα βασισμένο σε σπάνιες ασπρόμαυρες φωτογραφίες της Ηπείρου. Η θεματική ταξινόμηση και επεξεργασία του υλικού αποτυπώνει με αυθεντικότητα τη ζωή και τις μετακινήσεις των Σαρακατσαναίων." 
    },
    { 
      title: "Σαρακατσαναίοι της Ηπείρου – Γενεαλογικά Δένδρα", 
      year: "2015, επανέκδοση 2016", 
      desc: "Λεύκωμα που καταγράφει τις οικογένειες, τις ρίζες και τις μετακινήσεις των Σαρακατσαναίων της Ηπείρου. Περιλαμβάνει πλούσιο φωτογραφικό υλικό και στοιχεία από την εποχή του νομαδικού βίου και των πρώτων χρόνων εγκατάστασης." 
    },
    { 
      title: "Στα Χνάρια της Σαρακατσάνικης Παράδοσης", 
      year: "2017", 
      subtitle: "του φιλόλογου Γ. Καπρινιώτη με συνοδευτικό CD",
      desc: (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div onClick={() => setZoomedImage("/ΧΝΑΡΙΑ.png")} className="relative w-[140px] h-[190px] shrink-0 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white cursor-zoom-in active:scale-95 transition-transform">
            <Image src="/ΧΝΑΡΙΑ.png" alt="Εξώφυλλο" fill className="object-contain p-1" unoptimized />
          </div>
          <p className="text-lg leading-relaxed italic text-justify text-slate-700">
            Ιστορικά και λαογραφικά στοιχεία, αφηγήσεις και συνεντεύξεις από ανθρώπους που έζησαν την νομαδική ζωή των Σαρακατσαναίων. Η έκδοση συνοδεύεται από CD με ηχογραφήσεις στο αυθεντικό σαρακατσάνικο ιδίωμα.
          </p>
        </div>
      )
    },
    { 
      title: "Ανάλεκτα Σαρακατσαναίων και μη", 
      year: "2017", 
      subtitle: "του φιλόλογου Θεόδωρου Γόγολου",
      desc: (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div onClick={() => setZoomedImage("/ΑΝΑΛΕΚΤΑ.png")} className="relative w-[140px] h-[190px] shrink-0 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white cursor-zoom-in active:scale-95 transition-transform">
            <Image src="/ΑΝΑΛΕΚΤΑ.png" alt="Εξώφυλλο" fill className="object-contain p-1" unoptimized />
          </div>
          <p className="text-lg leading-relaxed italic text-justify text-slate-700">
            "Μελέτη με ιστορικά, φιλολογικά και γλωσσολογικά στοιχεία για τους Σαρακατσαναίους και την πολιτιστική τους ταυτότητα." 
          </p>
        </div> 
      )
    },
    { 
      title: "Αληθινές Ιστορίες Σαρακατσαναίων Ηπείρου", 
      year: "2023", 
      subtitle: "του φιλόλογου Γ. Καπρινιώτη, βασισμένο σε προφορικές μαρτυρίες",
      desc: "Το έργο βασίζεται σε προφορικές μαρτυρίες ανθρώπων που έζησαν τον νομαδικό τρόπο ζωής. Οι αφηγήσεις τους αποτελούν πολύτιμες πηγές πρωτογενούς λαογραφικού υλικού." 
    }
  ];

  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">Εκδόσεις</h1>
        <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-slate-600 italic max-w-2xl mx-auto">
          Η καταγραφή και η διάσωση του πλούτου της σαρακατσάνικης κληρονομιάς μέσα από το έντυπο και το ηχητικό έργο της Αδελφότητας.
        </p>
      </header>

      {/* 1. ΕΦΗΜΕΡΙΔΑ */}
      <section id="efimerida" className="mb-32 scroll-mt-40">
        <div className="flex flex-col items-center mb-10 text-center">
          <Newspaper size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Εφημερίδα</h2>
        </div>
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-sm">
          <div className="max-w-4xl mx-auto space-y-10">
            <h3 className="text-3xl md:text-4xl font-bold italic text-slate-800 text-center">«Τα Σαρακατσάνικα Χαιρετήματα»</h3>
            <div className="text-xl leading-relaxed italic text-justify text-slate-700 space-y-6">
              <p>
                Η Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου εκδίδει από το 2001, χωρίς καμία διακοπή, τη μοναδική έντυπη σαρακατσάνικη εφημερίδα που κυκλοφορεί πανελλαδικά. Τα «Σαρακατσάνικα Χαιρετήματα» φτάνουν σήμερα σε περισσότερα από 1.000 σπίτια σε όλη τη χώρα. 
              </p>
              <p>
                Συνδρομητές της εφημερίδας είναι κυρίως Σαρακατσαναίοι Ηπειρώτες, Σαρακατσαναίοι από άλλες περιοχές της Ελλάδας, φίλοι της παράδοσης, καθώς και φορείς που δραστηριοποιούνται στη διάσωση και προβολή του λαϊκού μας πολιτισμού.
              </p>
              <p>
                Μέσα από τις στήλες της 12σέλιδης έκδοσης παρουσιάζονται πτυχές της σαρακατσάνικης ζωής και παράδοσης: άρθρα ιστορικά, κοινωνιολογικά και λαογραφικά, γλωσσολογικές και λογοτεχνικές μελέτες, βιωματικά κείμενα, παλιά τραγούδια, εύθυμες ιστορίες (μολοήματα-μασλάτια), παραμύθια, συνεντεύξεις και αφηγήσεις, γενεολογικά δέντρα, βιβλιοπαρουσιάσεις και θέματα επικαιρότητας. 
              </p>
              <p>
                Με αφορμή τη συμπλήρωση 100 φύλλων της εφημερίδας μας, η Αδελφότης προχώρησε στην έκδοση ενός συλλεκτικού USB, που περιλαμβάνει όλα τα πρώτα 100 φύλλα των Χαιρετημάτων.
              </p>
              <p>
                Παραθέτουμε το επετειακό 100ο φύλλο, στο οποίο πραγματοποιήθηκε καταγραφή και ταξινόμηση όλων των άρθρων που είχαν δημοσιευθεί έως τότε σε θεματικές ενότητες.
              </p>
            </div>
            <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative w-[320px] h-[100px] rounded-2xl overflow-hidden bg-white border border-slate-200 p-4 shadow-sm flex items-center justify-center">
                <Image src="/ΕΦΗΜΕΡΙΔΑ.png" alt="Λογότυπο Χαιρετήματα" fill className="object-contain p-2" unoptimized />
              </div>
              <a 
                href={`/${encodeURIComponent('ΧΑΙΡΕΤΗΜΑΤΑ-ΦΥΛΛΟ 100.pdf')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[320px] h-[100px] flex items-center justify-center gap-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-lg group cursor-pointer"
              >
                <FileText size={28} className="opacity-70 shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest opacity-60 font-bold mb-1">Άνοιγμα Αρχείου</span>
                  <span className="text-base font-bold leading-tight">Επετειακό Φύλλο 100</span>
                </div>
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ΒΙΒΛΙΑ & ΛΕΥΚΩΜΑΤΑ */}
      <section id="vivlia" className="mb-32 scroll-mt-40">
        <div className="flex flex-col items-center mb-10 text-center">
          <Book size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Βιβλία & Λευκώματα</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {books.map((book, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-400 shadow-sm transition-all">
              <button onClick={() => setOpenBook(openBook === index ? null : index)} className="w-full p-6 md:p-8 flex items-center justify-between transition-colors hover:bg-slate-50">
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">{book.year}</span>
                  <h4 className="text-xl md:text-2xl font-bold italic text-slate-800 leading-tight">{book.title}</h4>
                  {book.subtitle && <p className="text-sm md:text-base text-slate-500 italic mt-2 font-medium">{book.subtitle}</p>}
                </div>
                <ChevronDown size={28} className={`ml-4 transition-transform duration-300 text-slate-400 ${openBook === index ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openBook === index ? 'max-h-[1200px] opacity-100 border-t' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-8 bg-slate-50">{book.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ΠΑΡΑΔΟΣΙΑΚΑ ΤΡΑΓΟΥΔΙΑ */}
      <section id="tragoudia" className="mb-20 scroll-mt-40">
        <div className="flex flex-col items-center mb-10 text-center">
          <Music size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Παραδοσιακά Τραγούδια</h2>
        </div>
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold italic">«Απ’ τα τραγούδια του γάμου μας»</h3>
            <p className="text-xl opacity-65 italic leading-relaxed">
              Νο.1 (1984), Νο.2 (1985)
            </p>
            <p className="text-xl opacity-85 italic leading-relaxed">
              Το 1984 η Αδελφότητα εξέδωσε σε κασέτα και αργότερα σε CD και USB τα τραγούδια του σαρακατσάνικου γάμου, τραγουδισμένα από πολυφωνικό συγκρότημα μελών της, όπως ακριβώς τραγουδιόνταν στους παραδοσιακούς γάμους. Το 1985 ακολούθησε δεύτερη έκδοση με νέο κύκλο τραγουδιών.
            </p>
          </div>
          <Music className="absolute -right-10 -bottom-10 opacity-10 w-64 h-64" />
        </div>
      </section>

      {/* LIGHTBOX ΓΙΑ ΜΕΓΕΘΥΝΣΗ */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in duration-300" onClick={() => setZoomedImage(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-slate-300 z-[110]" onClick={() => setZoomedImage(null)}>
            <X size={48} strokeWidth={1.5} />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
            <Image src={zoomedImage} alt="Zoom" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </main>
  )
}
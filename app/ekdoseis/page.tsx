'use client'

import { useState } from 'react'
import { EB_Garamond } from 'next/font/google'
import Image from 'next/image'
import { Newspaper, Book, Music, ChevronRight, FileText, ChevronDown } from 'lucide-react'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Ekdoseis() {
  // State για τον έλεγχο του Accordion
  const [openBook, setOpenBook] = useState<number | null>(null);

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
      desc: "Λεύκωμα αφιερωμένο στη γυναίκα της υπαίθρου, έκδοθεν με τη στήριξη της Γενικής Γραμματείας Ισότητας. Μέσα από σπάνιες φωτογραφίες και μαρτυρίες, αναδεικνύεται ο ρόλος Σαρακατσάνικης γυναίκας στην οικογένεια και στην κοινωνία, ως πυρήνας αντοχής και πολιτιστικής συνέχειας." 
    },
    { 
      title: "Μνήμη Κατσαντώνη:", 
      year: "2008", 
      subtitle: "Ανατύπωση δύο ιστορικών βιογραφιών του ήρωα",
      desc: (
              <ul className="list-disc list-inside space-y-1 mt-2 text-center inline-block">
                <li>«Βίος του Κατζαντώνη» του Επαμεινώνδα Φραγκίστα (1862)</li>
                <li>Μετάφραση της γαλλικής βιογραφίας του Eugene Yemeniz (1869)</li>
                <li className="list-none mt-2 italic">(Η έκδοση έγινε με αφορμή τα 200 χρόνια από τον μαρτυρικό θάνατό του Κατσαντώνη)</li>
              </ul>
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
      desc: "Ιστορικά και λαογραφικά στοιχεία, αφηγήσεις και συνεντεύξεις από ανθρώπους που έζησαν την νομαδική ζωή των Σαρακατσαναίων. Η έκδοση συνοδεύεται από CD με ηχογραφήσεις στο αυθεντικό σαρακατσάνικο ιδίωμα." 
    },
    { 
      title: "Ανάλεκτα Σαρακατσαναίων και μη", 
      year: "2017", 
      subtitle: "του φιλόλογου Θεόδωρου Γόγολου",
      desc: "Μελέτη με ιστορικά, φιλολογικά και γλωσσολογικά στοιχεία για τους Σαρακατσαναίους και την πολιτιστική τους ταυτότητα." 
    },
    { 
      title: "Αληθινές Ιστορίες Σαρακατσαναίων Ηπείρου", 
      year: "2023", 
      subtitle: "του φιλόλογου Γ. Καπρινιώτη, βασισμένο σε προφορικές μαρτυρίες",
      desc: "Το έργο βασίζεται σε προφορικές μαρτυρίες ανθρώπων που έζησαν τον νομαδικό τρόπο ζωής. Οι αφηγήσεις τους αποτελούν πολύτιμες πηγές πρωτογενούς λαογραφικού υλικού." 
    }
  ];

  return (
    <main className={`${ebGaramond.className} max-w-6xl mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>
      
      {/* Header */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">Εκδόσεις</h1>
        <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-slate-600 italic max-w-2xl mx-auto">
          Η καταγραφή και η διάσωση του πλούτου της σαρακατσάνικης κληρονομιάς μέσα από το έντυπο και το ηχητικό έργο της Αδελφότητας.
        </p>
      </header>

      {/* 1. ΕΦΗΜΕΡΙΔΑ */}
      <section className="mb-32">
        <div className="flex flex-col items-center mb-10 text-center">
          <Newspaper size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Εφημερίδα</h2>
        </div>
        
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-sm">
          <div className="max-w-4xl mx-auto space-y-10">
            <h3 className="text-3xl md:text-4xl font-bold italic text-slate-800 text-center">«Τα Σαρακατσάνικα Χαιρετήματα»</h3>
            
            <div className="text-xl leading-relaxed italic text-justify text-slate-700 space-y-6">
              <p>
                Η Αδελφότης των εν Αθήναις Σαρακατσαναίων Ηπείρου εκδίδει από το 2001, χωρίς καμία διακοπή, τη μοναδική έντυπη σαρακατσάνικη εφημερίδα που κυκλοφορεί πανελλαδικά. Τα «Σαρακατσάνικα Χαιρετήματα» φτάνουν σήμερα σε περισσότερα από 1.000 σπίτια σε όλη τη χώρα. 
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

            <div className="pt-6 flex justify-center">
              <a 
                href={`/${encodeURIComponent('ΧΑΙΡΕΤΗΜΑΤΑ-ΦΥΛΛΟ 100.pdf')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl hover:bg-slate-800 transition-all shadow-lg group cursor-pointer"
              >
                <FileText size={24} className="opacity-70" />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest opacity-60 font-bold mb-1">Άνοιγμα Αρχείου</span>
                  <span className="text-lg font-bold">Επετειακό Φύλλο 100</span>
                </div>
                <ChevronRight size={20} className="ml-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ΒΙΒΛΙΑ & ΛΕΥΚΩΜΑΤΑ - ACCORDION METHOD */}
      <section className="mb-32">
        <div className="flex flex-col items-center mb-10 text-center">
          <Book size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Βιβλία & Λευκώματα</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white hover:border-slate-400 shadow-sm"
            >
              <button 
                onClick={() => setOpenBook(openBook === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-center transition-colors hover:bg-slate-50"
              >
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">{book.year}</span>
                  <h4 className="text-xl md:text-2xl font-bold italic text-slate-800 leading-tight">
                    {book.title}
                  </h4>
                  {book.subtitle && (
                    <p className="text-sm md:text-base text-slate-500 italic mt-2 font-medium">
                      {book.subtitle}
                    </p>
                  )}
                </div>
                <div className={`ml-4 transition-transform duration-300 text-slate-400 ${openBook === index ? 'rotate-180 text-slate-900' : ''}`}>
                  <ChevronDown size={28} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openBook === index ? 'max-h-[800px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-8 bg-slate-50 text-lg leading-relaxed italic text-justify text-slate-700">
                  {book.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ΠΑΡΑΔΟΣΙΑΚΑ ΤΡΑΓΟΥΔΙΑ */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-10 text-center">
          <Music size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Παραδοσιακά Τραγούδια</h2>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="max-w-3xl text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold italic">«Απ’ τα τραγούδια του γάμου μας»</h3>
              <p className="text-xl opacity-65 italic leading-relaxed text-justify md:text-center">
                Νο.1 (1984), Νο.2 (1985)               
              </p>
              <p className="text-xl opacity-85 italic leading-relaxed text-justify md:text-center">
                Το 1984 η Αδελφότητα εξέδωσε σε κασέτα και αργότερα σε CD και USB τα τραγούδια του σαρακατσάνικου γάμου, τραγουδισμένα από πολυφωνικό συγκρότημα μελών της, όπως ακριβώς τραγουδιόνταν στους παραδοσιακούς γάμους. Το 1985 ακολούθησε δεύτερη έκδοση με νέο κύκλο τραγουδιών.
              </p>
            </div>
          </div>
          <Music className="absolute -right-10 -bottom-10 opacity-10 w-64 h-64" />
        </div>
      </section>

    </main>
  )
}
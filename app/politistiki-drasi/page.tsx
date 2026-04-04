'use client'

import { useState } from 'react'
import { EB_Garamond } from 'next/font/google'
import NextImage from 'next/image'
import { 
  Palmtree, 
  Calendar, 
  MapPin, 
  Users, 
  Camera, 
  Music2, 
  ChevronDown, 
  ChevronRight,
  Tent,
  Sparkles,
  BookOpen,
  X,
  Maximize2
} from 'lucide-react'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

function ImageGridOrSlider({ images, onImageClick }: { images: string[], onImageClick: (src: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* MOBILE: SLIDER - Ομοιόμορφο τετράγωνο σχήμα */}
      <div className="block md:hidden relative group">
        <div 
          className="relative aspect-square bg-slate-100 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 cursor-zoom-in"
          onClick={() => onImageClick(images[currentIndex])}
        >
          <NextImage 
            key={`slide-${currentIndex}`}
            src={images[currentIndex]} 
            alt="Εικόνα" 
            fill 
            className="object-cover" 
            unoptimized
          />

          <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10">
            <ChevronRight className="rotate-180 text-slate-900 w-5 h-5" />
          </button>

          <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10">
            <ChevronRight className="text-slate-900 w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/10 backdrop-blur-md p-1.5 rounded-full">
            {images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white w-4' : 'bg-white/50 w-1.5'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP: GRID - Απόλυτη ομοιομορφία με aspect-square */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div 
            key={idx}
            className="relative aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group hover:shadow-2xl transition-all duration-500"
            onClick={() => onImageClick(src)}
          >
            <NextImage 
              src={src} 
              alt={`Εικόνα ${idx + 1}`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              unoptimized
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
                    <Maximize2 className="text-slate-900 w-6 h-6" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PolitistikiDrasi() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>      
      {/* Header */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">Πολιτιστική Δράση</h1>
        <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-slate-600 italic max-w-3xl mx-auto text-justify md:text-center">
          Από το 1977, η Αδελφότητα αναπτύσσει μια πολυδιάστατη δράση για την ανάδειξη του Σαρακατσάνικου πολιτισμού, μέσα από μόνιμες εκθέσεις, λαογραφική έρευνα και ζωντανές παραδόσεις.
        </p>
      </header>

      {/* ΚΑΤΗΓΟΡΙΑ 1: ΜΟΝΙΜΕΣ ΕΚΘΕΣΕΙΣ */}
      <section id="ektheseis" className="mb-24 scroll-mt-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="relative w-24 h-24 mb-4">
            <NextImage 
              src="/κονακι.png" 
              alt="Σαρακατσάνικο Κονάκι" 
              fill 
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold italic">Μόνιμες Εκθέσεις & Σαρακατσάνικα Κονάκια</h2>
          <p className="text-slate-500 mt-2 italic">Η παρουσία μας σε εμβληματικά μουσεία και πολιτιστικούς χώρους</p>
        </div>

        <div className="w-full space-y-4">
          {/* Μασσαλία */}
          <AccordionItem 
            id="marseille"
            title="Μασσαλία, Γαλλία"
            subtitle="2013-2019"
            isOpen={openSection === 'marseille'}
            onClick={() => toggleSection('marseille')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-justify italic leading-relaxed order-2 md:order-1">
                Η Αδελφότητα επιλέχθηκε να εκπροσωπήσει την Ελλάδα και τους Σαρακατσαναίους με την οργάνωση μόνιμης έκθεσης και κατασκευή κονακιού, το οποίο παρέμεινε στο Μουσείο Ευρωπαϊκού & Μεσογειακού Πολιτισμού στη Μασσαλία για έξι χρόνια.
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md cursor-zoom-in order-1 md:order-2" onClick={() => setSelectedImg("/konaki.jpg")}>
                <NextImage 
                  src="/konaki.jpg" 
                  alt="Σαρακατσάνικο Κονάκι στη Μασσαλία" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AccordionItem>
          
          {/* Μουσείο Χατζημιχάλη */}
          <AccordionItem 
            id="hatzimichali"
            title="Μουσείο Λαϊκής Τέχνης και Παράδοσης «Αγγελική Χατζημιχάλη»"
            subtitle="Αθήνα, 1980 - σήμερα"
            isOpen={openSection === 'hatzimichali'}
            onClick={() => toggleSection('hatzimichali')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 text-justify text-slate-700 w-full order-2 md:order-1">
                <div>Η συνεργασία της Αδελφότητας με τον Δήμο Αθηναίων και το Μουσείο Λαϊκής Τέχνης και Παράδοσης «Αγγελική Χατζημιχάλη» ξεκίνησε το 1980–1981, σχεδόν αμέσως μετά την ίδρυση του Μουσείου, και συνεχίζεται αδιάλειπτα έως σήμερα, με εξαίρεση τα διαστήματα κατά τα οποία το κτίριο παρέμενε κλειστό λόγω εργασιών. Δεν θα ήταν υπερβολή να ειπωθεί ότι η παρουσία των Σαρακατσαναίων στον χώρο του Μουσείου είναι συνυφασμένη με την πορεία της Αδελφότητάς μας.</div>
                <div>Η συνεργασία εγκαινιάστηκε με την παρουσίαση αυθεντικών αντικειμένων της σαρακατσάνικης ζωής και την κατασκευή ενός σαρακατσάνικου κονακιού από μέλη της Αδελφότητας. Το αρχικό κονάκι παρέμεινε στον χώρο για αρκετά χρόνια, έως ότου απομακρύνθηκε λόγω φυσικής φθοράς των υλικών. Τα υπόλοιπα αντικείμενα της Αδελφότητας,ωστόσο, συνέχισαν να εκτίθεται κανονικά.</div>
                <div>Το 1995 — ή και ενδεχομένως νωρίτερα — προστέθηκε στη μόνιμη έκθεση ένας αυθεντικός «αργαλειός γούρνας», όμοιος με εκείνους που έστηναν οι Σαρακατσαναίοι κατά τον νομαδικό τους βίο. Πρόκειται για εξαιρετικά σπάνιο έκθεμα, καθώς μέχρι σήμερα δεν έχει εντοπιστεί αντίστοιχος αργαλειός σε άλλο μουσείο της χώρας.</div>
                <div>Το 2015, με αφορμή τη συμπλήρωση πενήντα ετών από τον θάνατο της Αγγελικής Χατζημιχάλη, η έκθεση ανανεώθηκε και εμπλουτίστηκε με νέα αντικείμενα από τη συλλογή της Αδελφότητας, καθώς και με φωτογραφικό υλικό από το αρχείο της. Η ανανέωση πραγματοποιήθηκε με την επιμέλεια της λαογράφου και διευθύντριας του Μουσείου, κας Σταυρούλας Πισιμίση. Έκτοτε, η μεγάλη αίθουσα του επάνω ορόφου φιλοξενεί μόνιμη έκθεση αφιερωμένη αποκλειστικά στους Σαρακατσαναίους.</div>
                <div>Το 2025 η Αδελφότητα προχώρησε στην κατασκευή νέου, ορθού σαρακατσάνικου κονακιού στο εσωτερικό του Μουσείου, με τη συμβολή μελών που έζησαν οι ίδιοι τις πρώτες δεκαετίες της ζωής τους μέσα σε σαρακατσάνικες κοινότητες. Το νέο κονάκι αποτελεί πλέον αναπόσπαστο τμήμα της μόνιμης έκθεσης. Παράλληλα, πραγματοποιήθηκαν εργασίες συντήρησης του αργαλειού γούρνας, ο οποίος σήμερα λειτουργεί εκ νέου.</div>
                <div>Σήμερα, στη μόνιμη έκθεση φιλοξενούνται περισσότερα από 120 αντικείμενα της Αδελφότητας, τα οποία αποτυπώνουν με αυθεντικότητα πτυχές της νομαδικής ζωής, της οικογενειακής οργάνωσης και της υλικής και πνευματικής παράδοσης των Σαρακατσαναίων.</div>
                <div>Το Μουσείο λειτουργεί όλες τις ημέρες της εβδομάδας, πλην Δευτέρας, με ελεύθερη είσοδη για το κοινό. Η θέση του, στην καρδιά της Πλάκας, το καθιστά έναν από τους σημαντικότερους και πλέον επισκέψιμους πολιτιστικούς χώρους της Αθήνας, προσελκύοντας τόσο μεμονωμένους επισκέπτες όσο και σχολεία από όλη την Ελλάδα.</div>
                <div className="text-sm italic flex items-center gap-2 pt-2 text-slate-900 font-bold">
                  <MapPin size={16}/> Οδός Αγγ. Χατζημιχάλη 6, Πλάκα. Είσοδο ελεύθερη.
                </div>
              </div>
              <div className="w-full order-1 md:order-2">
                <ImageGridOrSlider 
                  images={["/xatz1.jpg", "/xatz5.jpg", "/xatz2.jpg", "/xatz3.jpg", "/xatz4.jpg"]} 
                  onImageClick={(src) => setSelectedImg(src)}
                />
              </div>
            </div>
          </AccordionItem>

          {/* Πνευματικό Κέντρο Ρουμελιωτών */}
          <AccordionItem 
            id="roumeliotes"
            title="Πνευματικό Κέντρο Ρουμελιωτών"
            subtitle="Αθήνα, 2017 - σήμερα"
            isOpen={openSection === 'roumeliotes'}
            onClick={() => toggleSection('roumeliotes')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-justify order-2 md:order-1">
                <div>Το 2017, με πρωτοβουλία του Πνευματικού Κέντρου Ρουμελιωτών, κατασκευάστηκε ένα σαρακατσάνικο κονάκι από την Αδελφότητα, το οποίο εκτίθεται μόνιμα στον χώρο.</div>
                <div>Μαζί με το κονάκι, η Αδελφότητα παρουσιάζει 28 αυθεντικά αντικείμενα λαϊκού πολιτισμού των Σαρακατσαναίων, ανάμεσά τους παραδοσιακές φορεσιές, υφαντά και χρηστικά είδη. Αυτά τα εκθέματα φωτίζουν πτυχές της καθημερινής ζωής και της πολιτιστικής ταυτότητας των Σαρακατσαναίων.</div>
                <div>Το Πνευματικό Κέντρο Ρουμελιωτών βρίσκεται στο κέντρο της Αθήνας, στη διεύθυνση Δαφνομήλη 1Α, Κολωνάκι, και είναι ανοικτό σε επισκέπτες που ενδιαφέρονται για τη λαογραφία και την παραδοσιακή τέχνη.</div>
                <div className="text-sm italic flex items-center gap-2 pt-2">
                  <MapPin size={14}/> Δαφνομήλη 1Α, Κολωνάκι.
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden order-1 md:order-2 border border-slate-100 shadow-sm cursor-zoom-in" onClick={() => setSelectedImg("/roumeliotes.jpg")}>
                <NextImage 
                  src="/roumeliotes.jpg" 
                  alt="Σαρακατσάνικο Κονάκι στο Πνευματικό Κέντρο Ρουμελιωτών" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* 2. ΛΑΟΓΡΑΦΙΚΟ ΥΛΙΚΟ */}
      <section id="laografiko" className="mb-24 scroll-mt-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <BookOpen size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Λαογραφικό Υλικό</h2>
          <div className="text-slate-600 mt-4 w-full text-lg italic text-center">
            Η Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου απευθύνει ανοιχτό κάλεσμα σε όλους όσοι κουβαλούν στο σπίτι ή στη μνήμη τους πολύτιμα στοιχεία της σαρακατσάνικης παράδοσης, να τα μοιραστούν μαζί μας, ώστε να μη χαθούν και να συνεχίσουν να αφηγούνται την ιστορία μας στις επόμενες γενιές.
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold italic mb-4 flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 overflow-hidden bg-slate-100 rounded-lg">
                <NextImage src="/antikeimena.png" alt="Αντικείμενα" fill className="object-contain" priority />
              </div>
              Αντικείμενα
            </h3>
            <div className="space-y-4 text-justify text-slate-700">
              <div>Η Αδελφότητα έχει συγκεντρώσει πλήθος αυθεντικών αντικειμένων της παραδοσιακής, νομαδικής ζωής των Σαρακατσαναίων: ξυλόγλυπτα, εργαλεία, φορεσιές, υφαντά και είδη καθημερινής χρήσης.</div>
              <div>Μέρος αυτών εκτίθεται στο Μουσείο Λαϊκής Τέχνης και Παράδοσης “Αγγελική Χατζημιχάλη” και στο Πνευματικό Κέντρο Ρουμελιωτών, ενώ η συλλογή της Αδελφότητας εμπλουτίζεται διαρκώς με νέα αντικείμενα.</div>
              <div>Όλα τα αντικείμενα καταγράφονται σε ειδικό Βιβλίο Δωρεών, με αναφορά στον δωρητή και σύντομη περιγραφή, και φέρουν καρτελάκι ταυτοποίησης με τα αντίστοιχα στοιχεία.</div>
              <div className="text-sm bg-slate-50 p-3 rounded-lg border-l-4 border-slate-300 italic">Στόχος μας η διάσωση και ανάδειξη του υλικού αυτού μέσα από μουσειακές εκθέσεις στην Αθήνα.</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold italic mb-4 flex items-center gap-3">
              <span className="bg-slate-100 p-2 rounded-xl">🎶</span> Παλιά, Ανέκδοτα Τραγούδια
            </h3>
            <div className="space-y-4 text-justify text-slate-700">
              <div>Η Αδελφότητα διασώζει και καταγράφει παλιά, ανέκδοτα σαρακατσάνικα τραγούδια, πολλά από τα οποία σώζονται μόνο προφορικά.</div>
              <div>Στόχος μας είναι να τα συγκεντρώσουμε, να τα ηχογραφήσουμε σε στούντιο και να τα αποδώσουμε “με το στόμα”, όπως τα τραγουδούσαν οι παλαιότερες γενιές.</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold italic mb-4 flex items-center gap-3">
              <span className="bg-slate-100 p-2 rounded-xl">📷</span> Φωτογραφίες
            </h3>
            <div className="space-y-4 text-justify text-slate-700"> 
              <div>Η Αδελφότητα έχει συγκεντρώσει πάνω από 1.000 σπάνιες ασπρόμαυρες φωτογραφίες από τα τέλη του 19ου και τις αρχές του 20ού αιώνα, που αποτυπώνουν σκηνές από την καθημερινότητα, τα ήθη και τα έθιμα των Σαρακατσαναίων.</div>
              <div>Η συλλογή αυτή αποτελεί πολύτιμο τεκμήριο λαογραφικής και κοινωνικής ιστορίας και συνεχίζει να εμπλουτίζεται με νέες προσθήκες, ώστε να αποτελέσει τη βάση για μελλοντικές εκδόσεις, όπως η ανανεωμένη έκδοση των Γενεαλογικών Δέντρων ή ένα νέο φωτογραφικό λεύκωμα.</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold italic mb-4 flex items-center gap-3">
              <span className="bg-slate-100 p-2 rounded-xl">📜</span> Ιστορίες και Παραμύθια
            </h3>
            <div className="space-y-4 text-justify text-slate-700">
              <div>Αναζητούμε και καταγράφουμε ιστορίες, μουραπάδες και παραμύθια της σαρακατσάνικης προφορικής παράδοσης — αφηγήσεις που πέρασαν από γενιά σε γενιά και αποτελούν ζωντανή μας μνήμη.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ΧΟΡΕΥΤΙΚΟ & ΧΟΡΩΔΙΑ */}
      <section id="choreftiko" className="mb-24 scroll-mt-32">
        <div className="flex flex-col items-center mb-10 text-center">
          <Users size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Χορευτικό & Χορωδία</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden shadow-md cursor-zoom-in group" onClick={() => setSelectedImg("/ΧΟΡΕΥΤΙΚΟ.jpg")}>
            <NextImage src="/ΧΟΡΕΥΤΙΚΟ.jpg" alt="Χορευτικό 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden shadow-md cursor-zoom-in group" onClick={() => setSelectedImg("/ΧΟΡΕΥΤΙΚΟ2.jpg")}>
            <NextImage src="/ΧΟΡΕΥΤΙΚΟ2.jpg" alt="Χορευτικό 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          
          <div className="p-8 md:p-12 text-center col-span-1 md:col-span-2">
            <div className="text-lg md:text-xl leading-relaxed italic text-slate-700 w-full text-justify md:text-center">
                Η Αδελφότητα διατηρεί ενεργό χορευτικό συγκρότημα και χορωδιακό τμήμα, με συμμετοχές σε πολιτιστικά δρώμενα, ανταμώματα και φεστιβάλ. Τα μαθήματα παραδοσιακού χορού και τραγουδιού είναι ανοιχτά για όλους όσοι επιθυμούν να γνωρίσουν από κοντά τη σαρακατσάνικη παράδοση.
            </div>
          </div>
        </div>
      </section>

      {/* 4. ΠΑΡΑΔΟΣΙΑΚΕΣ ΕΚΔΗΛΩΣΕΙΣ */}
      <section id="ekdiloseis" className="mb-24 scroll-mt-32">
        <div className="flex flex-col items-center mb-12 text-center">
          <Sparkles size={48} className="text-slate-800 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold italic">Παραδοσιακές Εκδηλώσεις</h2>
          <div className="text-slate-600 mt-4 w-full text-lg italic text-center">
            Η Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου διοργανώνει κάθε χρόνο μια σειρά από πολιτιστικές και κοινωνικές εκδηλώσεις, που στοχεύουν στη διατήρηση και ανάδειξη της σαρακατσάνικης παράδοσης.
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-2xl text-white">
                <Calendar size={24} />
              </div>
              <h3 className="text-2xl font-bold italic">Ετήσιες Δράσεις</h3>
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div className="flex gap-3">
                <div className="text-slate-900 font-bold">•</div>
                <div><strong>Ετήσιος χορός:</strong> Πραγματοποιείται στα τέλη Ιανουαρίου στην Αθήνα και αποτελεί σημείο συνάνμησης μελών και φίλων της Αδελφότητας.</div>
              </div>
              <div className="flex gap-3">
                <div className="text-slate-900 font-bold">•</div>
                <div><strong>Πολιτιστικές εκδηλώσεις:</strong> Σε συνεργασία με φορείς και οργανισμούς, με στόχο τη διάδοση της σαρακατσάνικης παράδοσης και την προβολή του έργου της Αδελφότητας.</div>
              </div>
              <div className="flex gap-3">
                <div className="text-slate-900 font-bold">•</div>
                <div><strong>Τακτικές συναντήσεις:</strong> Στα γραφεία της Αδελφότητας και σε άλλους χώρους, γίνονται συναντήσεις των μελών, με σκοπό την ενίσχυση των δεσμών και των ανταλλαγών απόψεων.</div>
              </div>
              <div className="flex gap-3">
                <div className="text-slate-900 font-bold">•</div>
                <div><strong>Εκδρομές:</strong> Σε προορισμούς εντός και εκτός Ελλάδας, συνδυάζοντας τη γνωριμία με τον τόπο και τον πολιτισμό με την ψυχαγωγία.</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-2xl text-white border border-white/20">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold italic">Συμμετοχές</h3>
            </div>
            
            <div className="mb-6 opacity-80 italic">Η Αδελφότης συμμετέχει ενεργά στα ετήσια ανταμώματα και εκδηλώσεις που διοργανώνουν:</div>

            <div className="space-y-4 text-white/90">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <ChevronRight size={18} className="text-slate-400" />
                <div>Η Πανελλήνια Ομοσπονδία Συλλόγων Σαρακατσαναίων στο <strong>Περτούλι Τρικάλων</strong></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <ChevronRight size={18} className="text-slate-400" />
                <div>Οι Σύλλογοι Σαρακατσαναίων Ηπειρωτών <strong>στην Ήπειρο</strong></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <ChevronRight size={18} className="text-slate-400" />
                <div>Οι Σύλλογοι Σαρακατσαναίων Αττικής <strong>στην Πάρνηθα</strong></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <ChevronRight size={18} className="text-slate-400" />
                <div>Η Πανηπειρωτική Συνομοσπονδία Ελλάδος στην εκδήλωση <strong>«Η Πίτα του Ηπειρώτη»</strong></div>
              </div>
            </div>
          </div>
        </div>

        <ImageGridOrSlider 
          images={['/ekdilosi1.jpg', '/ekdilosi2.jpg', '/ekdilosi3.jpg']} 
          onImageClick={(src) => setSelectedImg(src)}
        />
      </section>

      {/* LIGHTBOX (MODAL) */}
      {selectedImg && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white p-3 bg-white/10 rounded-full z-[610] hover:bg-white/20 transition-all">
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <NextImage src={selectedImg} alt="Zoom" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </main>
  )
}

function AccordionItem({ title, subtitle, children, isOpen, onClick, id }: any) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-slate-400 transition-all">
      <button 
        onClick={onClick}
        className="w-full p-6 md:p-8 flex items-center justify-between text-center md:text-left transition-colors hover:bg-slate-50"
      >
        <div className="flex-1">
          <h4 className="text-xl md:text-2xl font-bold italic text-slate-800 leading-tight">{title}</h4>
          <p className="text-sm md:text-base text-slate-500 italic mt-2 font-medium">{subtitle}</p>
        </div>
        <div className={`ml-4 transition-transform duration-300 text-slate-400 ${isOpen ? 'rotate-180 text-slate-900' : ''}`}>
          <ChevronDown size={28} />
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-8 bg-slate-50 text-lg leading-relaxed italic text-slate-700">
          {children}
        </div>
      </div>
    </div>
  )
}
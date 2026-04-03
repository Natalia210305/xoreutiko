'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { EB_Garamond } from 'next/font/google'
import Image from 'next/image'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const pathname = usePathname()
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsContactOpen(true)
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [pathname])

  const closeMenu = () => setIsMenuOpen(false)

  // ΕΔΩ ΠΡΟΣΘΕΣΑ ΤΑ SUBMENU ΠΟΥ ΖΗΤΗΣΕΣ
  const navLinks = [
    { name: "Αρχική", href: "/" },
    { 
      name: "Η Αδελφότητα", 
      href: "/adelfotita",
      submenu: [
        { name: "Ιστορικό & Σκοπός", href: "/adelfotita#idrysi" },
        { name: "Ιδρυτικά Μέλη", href: "/adelfotita#members" },
        { name: "Διοικητικά Συμβούλια", href: "/adelfotita#ds" },
        { name: "Τιμητικές Διακρίσεις & Αναγνωρίσεις", href: "/adelfotita#awards" },
        { name: "Έδρα – Ιδιόκτητοι Χώροι", href: "/adelfotita#edra" },
      ]
    },
    { 
      name: "Πολιτιστική Δράση", 
      href: "/politistiki-drasi",
      submenu: [
        { name: "Μόνιμες Εκθέσεις & Σαρακατσάνικα Κονάκια", href: "/politistiki-drasi#ektheseis" },
        { name: "Λαογραφικό Υλικό", href: "/politistiki-drasi#laografiko" },
        { name: "Χορευτικό & Χορωδία", href: "/politistiki-drasi#choreftiko" },
        { name: "Παραδοσιακές Εκδηλώσεις", href: "/politistiki-drasi#ekdiloseis" },
      ]
    },
    { 
      name: "Εκδόσεις", 
      href: "/ekdoseis",
      submenu: [
        { name: "Εφημερίδα", href: "/ekdoseis#efimerida" },
        { name: "Βιβλία & Λευκώματα", href: "/ekdoseis#vivlia" },
        { name: "Παραδοσιακά Τραγούδια", href: "/ekdoseis#tragoudia" },
      ]
    },
    { name: "Νέα & Ανακοινώσεις", href: "/nea" },
    { name: "Γίνετε Μέλος", href: "/melos" },
    { name: "Επικοινωνία", href: "/epikoinonia" },
  ]

  return (
    <div className={ebGaramond.className}>
      
      {/* ΚΥΡΙΑ ΚΕΦΑΛΙΔΑ - ΤΕΡΜΑ ΠΑΝΩ */}
      <header className="w-full bg-white pt-8 pb-4">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
             <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image 
                  src="/logo.png" 
                  alt="Λογότυπο Αδελφότητας" 
                  fill 
                  className="object-contain"
                />
             </div>
             <div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                  Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου
                </h1>
                <p className="text-xl md:text-2xl italic text-slate-600 mt-2">
                  (1977-σήμερα)
                </p>
                <p className="text-sm md:text-base font-medium text-slate-500 mt-1 italic border-slate-100 pt-2">
                  49 Χρόνια Πολιτιστικής Προσφοράς και Δράσης
                </p>
             </div>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="relative w-full z-50 bg-white border-y border-slate-100 shadow-sm mb-0">
        {/* Στο κινητό (md:hidden) χρησιμοποιούμε justify-end για να πάει το κουμπί δεξιά */}
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-center md:justify-center">
          
          {/* Desktop Links - Μένουν στο κέντρο */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 w-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className={`text-[11px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative py-1 flex items-center gap-1 ${
                    pathname === link.href ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform" />}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>

                {link.submenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-max min-w-[200px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="bg-white border border-slate-100 shadow-xl rounded-md py-2 overflow-hidden">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-[12px] text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-50 last:border-0 transition-colors font-medium text-center"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - Τώρα είναι μέσα στο flex container και σπρώχνεται δεξιά */}
          <div className="flex md:hidden w-full justify-end">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="flex items-center gap-2 text-slate-900 cursor-pointer group p-2 px-4 rounded-full border border-slate-100 bg-white shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {isMenuOpen ? "ΚΛΕΙΣΙΜΟ" : "ΜΕΝΟΥ"}
              </span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 pt-24 animate-in fade-in zoom-in duration-300 text-slate-900 font-sans md:hidden overflow-y-auto">
          <button onClick={closeMenu} className="absolute top-8 right-8 p-2 text-slate-500">
            <X size={32}/>
          </button>
          
          <div className="flex flex-col w-full max-w-sm mx-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col border-b border-slate-50">
                <div className="flex items-center justify-between py-4">
                  <Link 
                    href={link.href} 
                    onClick={closeMenu} 
                    className="text-2xl font-medium hover:text-blue-600 transition-colors italic"
                  >
                    {link.name}
                  </Link>
                  
                  {/* Αν υπάρχει υπομενού, εμφάνισε το βελάκι */}
                  {link.submenu && (
                    <button 
                      onClick={() => setMobileSubOpen(mobileSubOpen === link.name ? null : link.name)}
                      className={`p-2 transition-transform duration-300 ${mobileSubOpen === link.name ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                    >
                      <ChevronDown size={24} />
                    </button>
                  )}
                </div>

                {/* Εμφάνιση των υποεπιλογών αν το μενού είναι ανοιχτό */}
                {link.submenu && mobileSubOpen === link.name && (
                  <div className="flex flex-col bg-slate-50 rounded-xl mb-4 py-2 animate-in slide-in-from-top-2 duration-300">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={closeMenu}
                        className="px-6 py-3 text-lg text-slate-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <button 
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-8 left-8 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-slate-800 transition-all z-50 flex items-center gap-2 group cursor-pointer"
      >
        <FaPhoneAlt size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm uppercase tracking-widest">Επικοινωνία</span>
      </button>

      {/* Pop-up Επικοινωνίας */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300 text-slate-900">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-8">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full cursor-pointer"><X size={28} /></button>
            <h2 className="text-3xl font-bold border-b pb-4 mb-6 text-slate-800 italic">Επικοινωνία</h2>
            
            <div className="space-y-6 text-lg text-slate-700">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-slate-900 mt-1" />
                <p><strong>Διεύθυνση γραφείων:</strong> Ζήνωνος 30, Αθήνα, Τ.Κ. 10437</p>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold text-xl">
                <FaPhoneAlt /> <p>210 5240777</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-slate-600" /> <p><strong>e-mail:</strong> xairetimata@gmail.com</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 font-sans">
                <a href="https://www.facebook.com/share/1CHrxnsVt3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 cursor-pointer transition-opacity">
                  <FaFacebook /> Facebook
                </a>
                <a href="https://www.instagram.com/sarakatsanaioi_ipeirou_athina?igsh=bnA2czd5OXZzemM3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#E4405F] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 cursor-pointer transition-opacity">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://youtube.com/@adelfotitasha?si=TwE_XcEhdpq7rKhz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 cursor-pointer transition-opacity">
                  <FaYoutube /> Youtube
                </a>
              </div>

              <div className="pt-6 h-[350px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.7831!2d23.72244!3d37.98547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd330!2sZinonos%2030%2C%20Athina%20104%2037!5e0!3m2!1sel!2sgr!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react' // Προστέθηκε το useEffect
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Προστέθηκε το usePathname
import { Menu, X } from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { EB_Garamond } from 'next/font/google'

// Η δήλωση της γραμματοσειράς
const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const pathname = usePathname() // Προστέθηκε για τον έλεγχο της διαδρομής

  // ΑΥΤΟ ΤΟ ΚΟΜΜΑΤΙ ΑΝΟΙΓΕΙ ΤΟ POP-UP ΟΤΑΝ ΤΟ LINK ΕΧΕΙ ΤΟ #contact
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsContactOpen(true)
      // Καθαρίζουμε το hash για να μπορεί να ξαναπατηθεί το link αν χρειαστεί
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [pathname])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className={ebGaramond.className}>
      
      {/* Navigation Button */}
      <nav className="fixed top-6 right-6 md:top-10 md:right-12 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="p-3 bg-white/80 backdrop-blur-md shadow-md hover:bg-slate-100 rounded-full transition-colors text-slate-900 cursor-pointer border border-slate-200"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-3xl shadow-2xl animate-in fade-in zoom-in duration-300 text-slate-900 font-sans">
          <Link href="/" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Αρχική Σελίδα</Link>
          <Link href="/adelfotita" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Η Αδελφότητα</Link>
          <Link href="/politistiki-drasi" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Πολιτιστική Δράση</Link>
          <Link href="/ekdoseis" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Εκδόσεις</Link>
          <Link href="/nea" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Νέα & Ανακοινώσεις</Link>          <Link href="/melos" onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">Γίνετε Μέλος/Συνεργάτης</Link>
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
              
              {/* Social Media Buttons */}
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

              {/* Διορθωμένος Χάρτης Google Maps */}
              <div className="pt-6 h-[350px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.823438416625!2d23.7213296123497!3d37.98408197181827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd12572cfe7f%3A0x42320a4c9cb31d95!2zzpbOrs69z4nOvc6_z4IgMzAsIM6RzrjOrs69zrEgMTA0IDM3!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr" 
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
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsContactOpen(true)
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [pathname])

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { name: "Αρχική", href: "/" },
    { name: "Η Αδελφότητα", href: "/adelfotita" },
    { name: "Πολιτιστική Δράση", href: "/politistiki-drasi" },
    { name: "Εκδόσεις", href: "/ekdoseis" },
    { name: "Νέα", href: "/nea" },
    { name: "Γίνετε Μέλος", href: "/melos" },
  ]

  return (
    <div className={ebGaramond.className}>
      
      {/* ΚΕΝΤΡΑΡΙΣΜΕΝΗ NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col items-center gap-4">

          {/* 2. Desktop Links (Κεντραρισμένα κάτω από το Logo) */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 w-full border-t border-slate-50 pt-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-[11px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group py-1 ${
                  pathname === link.href ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Τοποθετημένο Πάνω Δεξιά όπως πριν */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden absolute top-10 right-6 flex items-center gap-2 text-slate-900 cursor-pointer group bg-white/80 backdrop-blur-sm p-2 px-3 rounded-full shadow-sm border border-slate-100"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {isMenuOpen ? "ΚΛΕΙΣΙΜΟ" : "ΜΕΝΟΥ"}
            </span>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
           {/* Mobile Menu Overlay (Μόνο για κινητά) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 text-3xl shadow-2xl animate-in fade-in zoom-in duration-300 text-slate-900 font-sans md:hidden">
          <button onClick={closeMenu} className="absolute top-10 right-10 p-2"><X size={32}/></button>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="hover:text-blue-600 transition-colors cursor-pointer">
              {link.name}
            </Link>
          ))}
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

      {/* Pop-up Επικοινωνίας (Χωρίς αλλαγές) */}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.757421332768!2d23.722881376442654!3d37.98278290008588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd254f65c92d%3A0x6a0f7e9f3b185b1c!2sZinonos%2030%2C%20Athina%20104%2037!5e0!3m2!1sel!2sgr!4v1709123456789!5m2!1sel!2sgr" 
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
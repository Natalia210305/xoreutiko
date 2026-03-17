'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${ebGaramond.className} bg-[#f8f9fa] border-t border-slate-200 pt-16 pb-8 mt-20 text-slate-700`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Στήλη 1: Λογότυπο & Επικοινωνία */}
          <div className="space-y-6">
            <div className="w-20 h-20 md:w-24 md:h-24 relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-4 font-sans text-[13px] md:text-sm tracking-wide">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-slate-400" size={14} />
                <a href="tel:2105240777" className="hover:text-blue-600 transition-colors">210 5240777</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-slate-400" size={14} />
                <a href="mailto:xairetimata@gmail.com" className="hover:text-blue-600 transition-colors">xairetimata@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-slate-400 mt-1" size={14} />
                <span>Ζήνωνος 30, Αθήνα, Τ.Κ. 10437</span>
              </div>
            </div>
          </div>

          {/* Στήλη 2: Χρήσιμα Links (Garamond) */}
          <div>
            <h4 className="text-xl font-bold mb-6 italic text-slate-900 border-b border-slate-200 pb-2 inline-block">Χρήσιμα Links</h4>
            <ul className="space-y-3 text-base md:text-lg">
              <li><Link href="/adelfotita" className="hover:text-blue-600 transition-colors">Η Αδελφότητα</Link></li>
              <li><Link href="/politistiki-drasi" className="hover:text-blue-600 transition-colors">Πολιτιστική Δράση</Link></li>
              <li><Link href="/ekdoseis" className="hover:text-blue-600 transition-colors">Εκδόσεις</Link></li>
              <li><Link href="/nea" className="hover:text-blue-600 transition-colors">Νέα & Ανακοινώσεις</Link></li>
            </ul>
          </div>

          {/* Στήλη 3: Κοινωνικά Δίκτυα (Garamond + Sans) */}
          <div>
            <h4 className="text-xl font-bold mb-6 italic text-slate-900 border-b border-slate-200 pb-2 inline-block">Ακολουθήστε μας</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://www.facebook.com/share/1CHrxnsVt3/?mibextid=wwXIfr" target="_blank" className="p-3 bg-white shadow-sm rounded-full text-[#1877F2] hover:scale-110 transition-transform border border-slate-100"><FaFacebook size={18} /></a>
              <a href="https://www.instagram.com/sarakatsanaioi_ipeirou_athina?igsh=bnA2czd5OXZzemM3" target="_blank" className="p-3 bg-white shadow-sm rounded-full text-[#E4405F] hover:scale-110 transition-transform border border-slate-100"><FaInstagram size={18} /></a>
              <a href="https://youtube.com/@adelfotitasha?si=TwE_XcEhdpq7rKhz" target="_blank" className="p-3 bg-white shadow-sm rounded-full text-[#FF0000] hover:scale-110 transition-transform border border-slate-100"><FaYoutube size={18} /></a>
            </div>
            <p className="text-xs md:text-[11px] leading-relaxed uppercase tracking-[0.2em] font-bold text-slate-500 font-sans">
              Διατηρούμε ζωντανή την παράδοση των Σαρακατσαναίων από το 1977.
            </p>
          </div>
        </div>

        {/* Bottom Bar (Sans-serif για καθαρότητα) */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 font-sans">
          <p>© Copyright {currentYear} | Αδελφότης των εν Αθήναις Σαρακατσαναίων Ηπείρου</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Πολιτική Απορρήτου</Link>
            <Link href="/cookies" className="hover:text-slate-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
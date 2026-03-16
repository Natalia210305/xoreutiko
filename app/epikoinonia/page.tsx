'use client'

import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function EpikoinoniaPage() {
  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>
      
      {/* Τίτλος (Όπως στην Αδελφότητα) */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">Επικοινωνία</h1>
        <p className="text-2xl italic text-slate-600 underline decoration-slate-300 underline-offset-8">
          Ελάτε σε επαφή μαζί μας
        </p>
      </header>

      {/* Κύριο Περιεχόμενο */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        
        {/* Αριστερή Στήλη: Στοιχεία & Social */}
        <div className="space-y-12">
          
          {/* Κουτί Διεύθυνσης (Στυλ όπως "Ο Σκοπός μας") */}
          <div className="bg-slate-50 p-10 rounded-2xl border-l-8 border-slate-900 shadow-sm space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-bold text-slate-500">Έδρα Αδελφότητας</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-2xl italic leading-relaxed text-slate-800">
                <FaMapMarkerAlt className="mt-2 shrink-0 text-slate-900" size={24} />
                <p>Ζήνωνος 30, Αθήνα, <br />Τ.Κ. 10437 (3ος όροφος)</p>
              </div>

              <div className="flex items-center gap-4 text-3xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
                <FaPhoneAlt className="shrink-0" size={28} />
                <a href="tel:2105240777">210 5240777</a>
              </div>

              <div className="flex items-center gap-4 text-xl italic text-slate-700 hover:text-blue-700 transition-colors border-t border-slate-200 pt-6">
                <FaEnvelope className="shrink-0 text-slate-400" size={22} />
                <a href="mailto:xairetimata@gmail.com">xairetimata@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Ενότητα Social Media (Με κουμπιά όπως στο Pop-up) */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold border-b pb-4 mb-8 italic">Ακολουθήστε μας</h2>
            <div className="flex flex-wrap gap-4 font-sans">
              <a href="https://www.facebook.com/share/1CHrxnsVt3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                <FaFacebook size={24} /> Facebook
              </a>
              <a href="https://www.instagram.com/sarakatsanaioi_ipeirou_athina?igsh=bnA2czd5OXZzemM3" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 bg-[#E4405F] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                <FaInstagram size={24} /> Instagram
              </a>
              <a href="https://youtube.com/@adelfotitasha?si=TwE_XcEhdpq7rKhz" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                <FaYoutube size={24} /> Youtube
              </a>
            </div>
          </div>
        </div>

        {/* Δεξιά Στήλη: Χάρτης (Στυλ όπως οι εικόνες των βραβεύσεων) */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b pb-4 mb-2 italic">Πού θα μας βρείτε</h2>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.75730412803!2d23.72291507641219!3d37.982798100021575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3006b9967d%3A0x69680327f12f006e!2zzpbOrs69z4nOvc6_z4IgMzAsIM6RzrjOrs69zrEgMTA0IDM3!5e0!3m2!1sel!2sgr!4v1710580000000!5m2!1sel!2sgr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-transform duration-700 group-hover:scale-105"
            ></iframe>
          </div>
          <p className="text-sm text-slate-500 italic text-center">
            Κάντε κλικ στον χάρτη για οδηγίες πλοήγησης
          </p>
        </div>

      </section>

      {/* Footer-Like σημείωση (Προαιρετικό) */}
      <section className="pt-16 border-t border-slate-100 text-center">
        <p className="text-xl italic text-slate-500">
          Τα γραφεία μας είναι ανοιχτά για όλα τα μέλη και τους φίλους της Αδελφότητας.
        </p>
      </section>

    </main>
  )
}
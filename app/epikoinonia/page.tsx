'use client'

import { useState } from 'react'
import { EB_Garamond } from 'next/font/google'
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin', 'greek'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export default function EpikoinoniaPage() {
  return (
    <main className={`${ebGaramond.className} max-w-[1600px] mx-auto p-6 md:p-20 text-slate-900 bg-white min-h-screen`}>
      
      {/* Τίτλος */}
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
          
          {/* Κουτί Διεύθυνσης */}
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

          {/* Ενότητα Social Media */}
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

        {/* Δεξιά Στήλη: Χάρτης */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-b pb-4 mb-2 italic">Πού θα μας βρείτε</h2>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
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
        </div>
      </section>

      {/* --- ΝΕΑ ΕΝΟΤΗΤΑ: ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ --- */}
      <section className="max-w-4xl mx-auto mb-24 pt-16 border-t border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold italic mb-4">Στείλτε μας Μήνυμα</h2>
          <p className="text-xl text-slate-500 italic">Θα χαρούμε να ακούσουμε τις προτάσεις ή τις ερωτήσεις σας.</p>
        </div>

        {/* --- ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ ΜΕ ΤΟ ΚΛΕΙΔΙ ΣΟΥ --- */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans"
        >
          {/* ΕΔΩ ΜΠΗΚΕ ΤΟ ΚΛΕΙΔΙ ΣΟΥ */}
          <input type="hidden" name="access_key" value="faff74b1-4f4a-4578-9ebc-bf2dd1805930" />
          
          {/* Αυτό το πεδίο εμποδίζει τα Bot να σου στέλνουν Spam (είναι κρυφό) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Ονοματεπώνυμο</label>
            <input name="name" required type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="π.χ. Ιωάννης Γιαννακός" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email</label>
            <input name="email" required type="email" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder="π.χ. info@gmail.com" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Το Μήνυμά σας</label>
            <textarea name="message" required rows={6} className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none" placeholder="Γράψτε εδώ το μήνυμά σας..."></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center pt-4">
            <button type="submit" className="flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl group cursor-pointer">
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ
            </button>
          </div>
        </form>
      </section>

      {/* Footer-Like σημείωση */}
      <section className="pt-16 border-t border-slate-100 text-center">
        <p className="text-xl italic text-slate-500">
          Τα γραφεία μας είναι ανοιχτά για όλα τα μέλη και τους φίλους της Αδελφότητας.
        </p>
      </section>

    </main>
  )
}
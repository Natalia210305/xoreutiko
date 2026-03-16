import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ subsets: ['latin', 'greek'] })

export default function CookiesPage() {
  return (
    <div className={`${ebGaramond.className} max-w-4xl mx-auto px-6 py-20 text-slate-800 leading-relaxed`}>
      <h1 className="text-4xl font-bold italic mb-8 border-b pb-4">Πολιτική Cookies</h1>
      
      <section className="space-y-6 text-lg">
        <p>
          Ο ιστότοπός μας χρησιμοποιεί "cookies" για να βελτιώσει την εμπειρία περιήγησής σας. Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή ή τη συσκευή σας.
        </p>

        <h2 className="text-2xl font-bold mt-8">Τι είδους Cookies χρησιμοποιούμε;</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Απαραίτητα Cookies:</strong> Χρειάζονται για τη σωστή τεχνική λειτουργία της ιστοσελίδας.</li>
          <li><strong>Cookies Τρίτων (Third-party):</strong> Χρησιμοποιούμε υπηρεσίες όπως τα Google Maps και το YouTube για την προβολή περιεχομένου. Αυτές οι υπηρεσίες ενδέχεται να τοποθετούν δικά τους cookies.</li>
          <li><strong>Cookies Στατιστικών:</strong> Ενδέχεται να χρησιμοποιούμε ανώνυμα στατιστικά για να καταλάβουμε ποιες σελίδες είναι πιο δημοφιλείς στους επισκέπτες μας.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Διαχείριση Cookies</h2>
        <p>
          Μπορείτε να ρυθμίσετε τον περιηγητή σας (Browser) ώστε να αποκλείει ή να διαγράφει τα cookies. Ωστόσο, ορισμένα μέρη της ιστοσελίδας ενδέχεται να μην λειτουργούν σωστά χωρίς αυτά.
        </p>

        <p className="mt-8 italic text-slate-500">
          Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
        </p>
      </section>
    </div>
  )
}
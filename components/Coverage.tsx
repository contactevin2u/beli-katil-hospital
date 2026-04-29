import { MapPin } from './Icon';

const coverage = [
  { state: 'Selangor', cities: ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang', 'Kajang', 'Cheras', 'Ampang', 'Puchong', 'Cyberjaya', 'Putrajaya', 'Bangi', 'Rawang', 'Semenyih', 'Sepang', 'Kuala Selangor', 'Banting', 'Sungai Buloh', 'Hulu Langat', 'Gombak'] },
  { state: 'Kuala Lumpur', cities: ['Bangsar', 'Mont Kiara', 'Setapak', 'Wangsa Maju', 'Kepong', 'Bukit Bintang', 'KLCC', 'Cheras', 'Sentul', 'Pudu', 'Jalan Ipoh', 'Sri Petaling', 'OUG', 'Damansara'] },
  { state: 'Pulau Pinang', cities: ['Georgetown', 'Bayan Lepas', 'Butterworth', 'Bukit Mertajam', 'Air Itam', 'Tanjung Tokong', 'Gelugor', 'Jelutong', 'Sungai Petani', 'Perai', 'Nibong Tebal', 'Balik Pulau'] },
  { state: 'Johor', cities: ['Johor Bahru', 'Skudai', 'Kulai', 'Pasir Gudang', 'Iskandar Puteri', 'Senai', 'Batu Pahat', 'Muar', 'Kluang', 'Pontian', 'Kota Tinggi', 'Mersing', 'Segamat', 'Tangkak'] },
  { state: 'Perak', cities: ['Ipoh', 'Taiping', 'Kampar', 'Sitiawan', 'Teluk Intan', 'Lumut', 'Kuala Kangsar', 'Parit Buntar', 'Bagan Serai', 'Tapah', 'Slim River', 'Kerian', 'Manjung', 'Gerik'] },
  { state: 'Negeri Sembilan', cities: ['Seremban', 'Nilai', 'Port Dickson', 'Bahau', 'Tampin', 'Rembau', 'Kuala Pilah', 'Jelebu', 'Mantin', 'Senawang', 'Labu', 'Lukut'] },
  { state: 'Melaka', cities: ['Bandar Melaka', 'Ayer Keroh', 'Bukit Beruang', 'Alor Gajah', 'Jasin', 'Masjid Tanah', 'Merlimau', 'Durian Tunggal', 'Batu Berendam', 'Cheng', 'Klebang'] },
  { state: 'Kedah', cities: ['Alor Setar', 'Sungai Petani', 'Kulim', 'Jitra', 'Langkawi', 'Pendang', 'Yan', 'Kuala Kedah', 'Baling', 'Sik', 'Bandar Baharu', 'Pokok Sena', 'Kubang Pasu'] },
  { state: 'Pahang', cities: ['Kuantan', 'Temerloh', 'Bentong', 'Raub', 'Mentakab', 'Kuala Lipis', 'Pekan', 'Jerantut', 'Cameron Highlands', 'Genting Highlands', 'Maran', 'Rompin'] },
  { state: 'Terengganu', cities: ['Kuala Terengganu', 'Kemaman', 'Dungun', 'Marang', 'Besut', 'Setiu', 'Hulu Terengganu', 'Kuala Berang', 'Chukai', 'Jerteh'] },
  { state: 'Kelantan', cities: ['Kota Bharu', 'Pasir Mas', 'Tanah Merah', 'Tumpat', 'Pasir Puteh', 'Machang', 'Kuala Krai', 'Gua Musang', 'Bachok', 'Jeli'] },
  { state: 'Perlis', cities: ['Kangar', 'Arau', 'Padang Besar', 'Kuala Perlis', 'Beseri', 'Chuping', 'Sanglang', 'Simpang Empat', 'Kaki Bukit'] },
  { state: 'Sabah', cities: ['Kota Kinabalu', 'Sandakan', 'Tawau', 'Lahad Datu', 'Keningau', 'Beaufort', 'Kudat', 'Putatan', 'Penampang', 'Papar', 'Ranau', 'Semporna', 'Kunak', 'Tuaran'] },
  { state: 'Sarawak', cities: ['Kuching', 'Miri', 'Sibu', 'Bintulu', 'Sri Aman', 'Sarikei', 'Kapit', 'Limbang', 'Mukah', 'Samarahan', 'Serian'] },
  { state: 'Labuan', cities: ['Victoria', 'Layang-Layang', 'Patau-Patau', 'Rancha-Rancha', 'Kerupang', 'Tanjung Aru', 'Sungai Bedaun', 'Lubok Temiang'] }
];

export function Coverage() {
  return (
    <section id="liputan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <MapPin size={14} /> Liputan Penghantaran
          </span>
          <h2 className="section-title mt-3">Beli & Sewa Katil Hospital — Liputan Seluruh Malaysia</h2>
          <p className="section-sub">
            Hub utama di Batu Caves (Selangor) dan cawangan di Kota Kinabalu (Sabah). Penghantaran
            kami sampai ke 14 negeri + W.P. Labuan: <strong>4 jam</strong> untuk Lembah Klang,{' '}
            <strong>1–3 hari</strong> untuk negeri lain — termasuk pulau seperti Langkawi & Pulau
            Pinang.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coverage.map((c) => (
            <details key={c.state} className="rounded-2xl bg-white border border-slate-100 p-5 group">
              <summary className="cursor-pointer flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-700" /> {c.state}
                </span>
                <span className="text-slate-400 text-xs group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

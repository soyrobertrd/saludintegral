import { Link } from 'react-router-dom';

const doctors = [
  {
    name: "Dr. Elena Rodriguez",
    specialty: "Chief of Cardiology",
    experience: "18 Years",
    location: "Main Campus, Tower A",
    status: "Accepting Patients",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVxsRCbnBpi0ROydjIw7ftHSEXK8Wzn_ff4n99IFVe3mx68i0KbN8DuT17tgDNWaUBNtkQCsdOF8A6imOWX3kb4s84QC7eDiGeLs3lTqedNbWo7hs5_h5bkEWnh0gS97kbg3nhBnhZWiV1ErKV5QZuPF7WE51jkGyC2fSfIECW5sDhvU4XIhmfg7DteYQKOkKyOYfsZp2u05IO3dxmkM7m0ZVGkdGYV0-J9SRp5YYxxoJDUCWzGYT2oLADJnciKB0eBzC2tGXwtw"
  },
  {
    name: "Dr. Marcus Thorne",
    specialty: "Senior Neurosurgeon",
    experience: "22 Years",
    location: "North Clinic Specialty Center",
    status: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDocnlAZVcvu5ElmltCYiBDz4UqnZ0wgZ_mLenn9s2ZEcVXgc02uaod70deK4RiCgUxYB9eADzr8OKJEoajnRTpkrYtIBXgWVXo2k71VVEuuq3uRHFM01ed7ZD4aktNb6hBrAPMN1BiFHiAO_S4uvlI1tTuuzEAisEM8kwhO7HSuSVh-C8GQFy00uzjKtg9-0P13L5NRADfgCSv-QLH25Nw94NGkbP0KTcf2PasuuPG6_-7WZvnFQaCQiD24Roue9lzeh5Cit0qnA"
  },
  {
    name: "Dr. Sarah Jenkins",
    specialty: "Pediatric Specialist",
    experience: "12 Years",
    location: "West Wing Center",
    status: "Video Consult Available",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_yoAge9aq-fH_0U0KsFG8HhakkXxdP3UBa-VxDWo_kc6HSeDj04vu_o0KJqh5lhSiyLow4sdZN4YqMxOru7h8qpk-eD1H0X0jyYaATXoSg5ADKLbT49YdDZDUkkL__mRErnFn_kUU_vLOUNUlOzVY4HZv_6hVdNDsQhWNXQCtx1uJlJTqdB2Uf042GPTY6A1MkBA_EqKvqCA69GykHLKtpXRBm5LQBWqWj4Idbp85rRbvtA6KMiXMqhe9AVxmxj_j-lr3Zkm9Ig"
  },
  {
    name: "Dr. Julian Chen",
    specialty: "Dermatology Lead",
    experience: "9 Years",
    location: "Main Campus, Skin Center",
    status: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARI08cGZTDXTRq8rnmQq4PTYRKemtqxIftnHSznDhkEtuPM-6LYBeCFy3ulEIcYER6JotFvih0S92fpY3x9ag5nsxYklI3AL7QgGB1mnwzD2jy0zbWBjAamN69pUYlS-Jws52EXYw0_sr_gHww6Ixy0TS0ecTNN_nSeXAWr9tJ_arQ7X4ROc9x9f3Lcu2uTERjMUC1bnssNMWEX4ul8pwIGKnWk7m9yoaVJc-c35S8sTr9jwD1B0OkGjZrfsd6gQHqOL-qReCWHA"
  },
  {
    name: "Dr. Robert Miller",
    specialty: "Orthopedic Surgeon",
    experience: "25 Years",
    location: "West Wing Center",
    status: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBTSFBLAhEzJq4WHjl_dUwyKmonwhjsrCYnO96ZD4RM8i9fuZsThyyN2rGq-6WMs1xrdwGE914TDkOqFA0Uja__AJQgtDSauhqxKldJPeWlowguqweMntl3gkG3RPumffuIcVAokBPBjP1az-BSTlVucgBwZ2CterA5IHI6ZlK1_uIkQVtSIWTeJxwaRtJLdFDQ1CORIonHDQFHocrOdEgV7amapuCid9jw35z2da4FKfSYM3OuDpku1C-1qlgqGDfW7sax2kGRQ"
  },
  {
    name: "Dr. Amanda Kalu",
    specialty: "Internal Medicine",
    experience: "14 Years",
    location: "Main Campus, North Wing",
    status: "Accepting Patients",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFqWc-dNHjXvggR_uUeYQ5ADjZIhnrjlWNgp2H2gBdlNRKWbjpQ4qM1zMqtHrGN5ksl10P6JOBqVP8AdomTAsuAAf6xRWQUgldcVFxgsj5Nk3t0lLIH57hceMjv3HVEV6nvE7TXL8ADbRC9JtJR_9nAB4UgmoRIJxR9UUyrz7Vcbsq-NPAH_zRPBFgefuNqVWo0_glRlc2hf0bRsTjutBn5uu8YdMeXiLX5n5q8hgmKU5Mrop_3bm44xIyBnPHfI4m836JqbHSig"
  }
];

export default function Doctors() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-700">
            <span className="font-label text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">Medical Staff Directory</span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-6 leading-tight">World-Class Care, Personal Attention.</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              Connect with over 200 board-certified specialists dedicated to your health. Our sanctuary of medical expertise is organized to help you find the right care, right now.
            </p>
          </div>
          <div className="flex gap-4 animate-in slide-in-from-right-8 duration-700">
            <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col items-center justify-center min-w-[140px] border border-outline-variant/10 shadow-sm">
              <span className="font-headline text-3xl font-bold text-primary">24/7</span>
              <span className="text-xs font-label text-on-surface-variant font-bold uppercase tracking-wider mt-1">Emergency Care</span>
            </div>
            <div className="premium-gradient p-6 rounded-2xl flex flex-col items-center justify-center min-w-[140px] shadow-lg">
              <span className="font-headline text-3xl font-bold text-white">15+</span>
              <span className="text-xs font-label text-white/80 font-bold uppercase tracking-wider mt-1">Specialties</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-surface-container-lowest shadow-sm rounded-3xl md:rounded-full p-2 flex flex-col md:flex-row gap-2 items-center border border-outline-variant/10">
          <div className="flex-1 flex items-center px-6 w-full">
            <span className="material-symbols-outlined text-outline mr-3">search</span>
            <input className="bg-transparent border-none focus:outline-none w-full text-on-surface font-body py-4" placeholder="Search by name or keyword..." type="text"/>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden md:block"></div>
          <div className="flex-1 flex items-center px-6 w-full">
            <span className="material-symbols-outlined text-outline mr-3">stethoscope</span>
            <select className="bg-transparent border-none focus:outline-none w-full text-on-surface font-body py-4 appearance-none cursor-pointer">
              <option>All Specialties</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Oncology</option>
            </select>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden md:block"></div>
          <div className="flex-1 flex items-center px-6 w-full">
            <span className="material-symbols-outlined text-outline mr-3">location_on</span>
            <select className="bg-transparent border-none focus:outline-none w-full text-on-surface font-body py-4 appearance-none cursor-pointer">
              <option>All Locations</option>
              <option>Main Campus</option>
              <option>North Clinic</option>
              <option>West Wing Center</option>
            </select>
          </div>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:variant-primary-container transition-all hover:scale-105 shadow-md w-full md:w-auto">
            Search
          </button>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, idx) => (
            <article key={idx} className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm group hover-lift border border-outline-variant/5">
              <div className="relative h-80 overflow-hidden bg-surface-dim">
                <img alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={doctor.image} />
                {doctor.status && (
                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black font-label uppercase shadow-lg border border-white/20 backdrop-blur-md ${doctor.status.includes('Accepting') ? 'bg-secondary/90 text-white' : 'bg-tertiary/90 text-white'}`}>
                      {doctor.status}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-1">{doctor.name}</h3>
                  <p className="text-on-surface-variant font-medium text-sm">{doctor.specialty}</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg mr-3 fill-current">workspace_premium</span>
                    <span className="font-medium">{doctor.experience} of Experience</span>
                  </div>
                  <div className="flex items-center text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg mr-3 fill-current">location_on</span>
                    <span className="font-medium">{doctor.location}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 border-2 border-primary/20 hover:border-primary/40 text-primary py-3.5 rounded-2xl font-bold text-sm transition-all active:scale-95">Profile</button>
                  <Link to="/booking" className="flex-1 bg-primary text-on-primary py-3.5 rounded-2xl font-bold text-sm hover:variant-primary-container transition-all shadow-md flex items-center justify-center active:scale-95">Book Now</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center">
          <button className="group flex flex-col items-center space-y-2 text-primary font-black uppercase tracking-widest text-xs hover:opacity-80 transition-all">
            <span>Load More Specialists</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </button>
        </div>
      </section>

      {/* Referral Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="premium-gradient p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">Can't find your specialist?</h2>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 opacity-90">
              Our concierge team is available to help you navigate our directory and match you with the right provider based on your specific medical history and needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                <span className="material-symbols-outlined">call</span>
                Contact Concierge
              </button>
              <button className="text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                Request Referral
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="glass-card p-10 rounded-[2.5rem] shadow-sm">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                </div>
                <div>
                  <h4 className="text-primary font-extrabold text-lg">Elite Clinical Sanctuary</h4>
                  <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Certified Quality Care</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2.5 w-56 bg-primary/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                </div>
                <div className="h-2.5 w-40 bg-primary/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 animate-pulse delay-75"></div>
                </div>
                <div className="h-2.5 w-48 bg-primary/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, GraduationCap, Mail, MessageCircle, HeartPulse, Brain, Thermometer, Baby, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Staff() {
  const staffCategories = ["Todos", "Médicos Especialistas", "Enfermería de Élite", "Salud Mental", "Gestión Clínica"];
  
  const staff = [
    { 
      id: "1", 
      name: "Dra. Elena Martínez", 
      role: "Gestión de Cuidados Crónicos", 
      edu: "Harvard Medical School", 
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
      icon: <HeartPulse size={16} />
    },
    { 
      id: "2", 
      name: "Dr. Roberto Santos", 
      role: "Unidad de Cuidados Paliativos", 
      edu: "Universidad de Navarra", 
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
      icon: <Stethoscope size={16} />
    },
    { 
      id: "3", 
      name: "Dra. Lucía Valerio", 
      role: "Cardiología Diagnóstica", 
      edu: "Instituto de Cardiología", 
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
      icon: <Activity size={16} />
    },
    { 
      id: "4", 
      name: "Lic. Ana Beltrán", 
      role: "Enfermería Intensivista", 
      edu: "Johns Hopkins Hospital", 
      img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=95&w=1200",
      category: "Enfermería de Élite",
       icon: <Thermometer size={16} />
    },
    { 
      id: "5", 
      name: "Dr. Juan Diego", 
      role: "Psicología Clínica", 
      edu: "Universidad de Chile", 
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=95&w=1200",
      category: "Salud Mental",
       icon: <Brain size={16} />
    },
    { 
      id: "6", 
      name: "Dra. Sofía Reyes", 
      role: "Medicina Interna", 
      edu: "Mayo Clinic", 
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
       icon: <Stethoscope size={16} />
    },
    { 
      id: "7", 
      name: "Dr. Marcos Paredes", 
      role: "Medicina General", 
      edu: "UASD", 
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
       icon: <Stethoscope size={16} />
    },
    { 
      id: "8", 
      name: "Dra. Karla Luna", 
      role: "Ginecología y Obstetricia", 
      edu: "UNIBE", 
      img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
       icon: <Baby size={16} />
    },
    { 
      id: "9", 
      name: "Dr. Luis Mendoza", 
      role: "Ortopedia Reconstructiva", 
      edu: "PUCMM", 
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=95&w=1200",
      category: "Médicos Especialistas",
       icon: <Stethoscope size={16} />
    }
  ];

  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block"
            >
              Cuerpo Médico SI+
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-on-surface font-headline tracking-tighter leading-tight"
            >
              Nuestro Personal.
            </motion.h1>
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {staffCategories.map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${i === 0 ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20' : 'bg-surface-container-low text-on-surface-variant hover:border-primary border-outline-variant/10 hover:bg-surface-container-high'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Staff Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {staff.map((person, idx) => (
            <motion.article 
               key={person.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="group"
            >
              <div className="aspect-3/4 rounded-4xl bg-surface-container-low overflow-hidden mb-8 relative border border-outline-variant/10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                 <img 
                    src={person.img} 
                    alt={person.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-95 group-hover:brightness-100" 
                 />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                       <Link to={`/staff/${person.id}`} className="grow bg-primary px-6 py-5 rounded-2xl flex justify-between items-center text-white shadow-2xl hover:bg-primary-container transition-all hover:scale-[1.02]">
                          <span className="text-xs font-black uppercase tracking-widest">Ver Perfil Completo</span>
                          <ArrowRight size={18} />
                       </Link>
                       <button aria-label="Enviar mensaje" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg border border-outline-variant/10 transition-transform hover:scale-105 active:scale-95">
                          <Mail size={20} />
                       </button>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                       {person.icon}
                    </div>
                    <h3 className="text-2xl font-black text-on-surface font-headline tracking-tighter group-hover:text-primary transition-colors leading-none">{person.name}</h3>
                 </div>
                 
                 <div className="flex flex-col gap-2 pl-11">
                    <span className="text-[11px] font-black uppercase tracking-widest text-primary opacity-60 leading-none">{person.role}</span>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-widest">
                       <GraduationCap size={16} className="opacity-40" /> {person.edu}
                    </div>
                 </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Inquiry Section */}
        <section className="mt-32 p-12 md:p-20 bg-primary/5 rounded-4xl border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter mb-4 leading-tight">¿No encuentra su especialista?</h2>
              <p className="text-lg md:text-xl text-on-surface-variant font-body opacity-70">Nuestro equipo de conserjería le ayudará a encontrar el personal adecuado.</p>
           </div>
           <Link to="/contact" className="relative z-10 bg-primary text-on-primary px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container transition-all duration-300 shadow-xl shadow-primary/30 flex items-center gap-4 hover:scale-[1.03] hover:-translate-y-1 active:scale-95">
              <MessageCircle size={22} /> Hablar con un especialista ahora
           </Link>
        </section>
      </div>
    </main>
  );
}

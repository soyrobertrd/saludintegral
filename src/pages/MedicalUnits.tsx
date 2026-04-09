import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, Brain, Baby, Microscope, Activity, Stethoscope, 
  HeartPulse, Syringe, Zap, LifeBuoy, HeartHandshake, ClipboardList, UserPlus
} from 'lucide-react';

const units = [
  { id: 'cardio', title: "Cardiología", icon: <Heart size={32} />, color: "bg-red-500/10 text-red-600", desc: "Prevención, diagnóstico y tratamiento de enfermedades cardiovasculares." },
  { id: 'neuro', title: "Neurología", icon: <Brain size={32} />, color: "bg-blue-500/10 text-blue-600", desc: "Cuidado especializado del sistema nervioso y trastornos cerebrales." },
  { id: 'pedia', title: "PediatrÍa", icon: <Baby size={32} />, color: "bg-yellow-500/10 text-yellow-600", desc: "Atención médica integral para recién nacidos, niños y adolescentes." },
  { id: 'diag', title: "Diagnóstico", icon: <Microscope size={32} />, color: "bg-emerald-500/10 text-emerald-600", desc: "Laboratorio y tecnología de imagenología de última generación." },
  { id: 'chronic', title: "Cuidados Crónicos", icon: <HeartPulse size={32} />, color: "bg-primary/10 text-primary", desc: "Gestión continua para pacientes con condiciones de salud persistentes." },
  { id: 'palliative', title: "Cuidados Paliativos", icon: <LifeBuoy size={32} />, color: "bg-indigo-500/10 text-indigo-600", desc: "Enfoque en la calidad de vida y alivio del dolor para pacientes." },
  { id: 'oncology', title: "Oncología", icon: <Syringe size={32} />, color: "bg-purple-500/10 text-purple-600", desc: "Tratamiento avanzado y acompañamiento oncológico integral." },
  { id: 'rehab', title: "Rehabilitación", icon: <Activity size={32} />, color: "bg-orange-500/10 text-orange-600", desc: "Terapia física y recuperación funcional post-tratamiento." },
  { id: 'internal', title: "Medicina Interna", icon: <Stethoscope size={32} />, color: "bg-slate-500/10 text-slate-600", desc: "Atención primaria especializada para adultos y prevención." },
  { id: 'geriatrics', title: "Geriatría", icon: <UserPlus size={32} />, color: "bg-teal-500/10 text-teal-600", desc: "Cuidado especializado para la salud y bienestar de adultos mayores." },
  { id: 'psych', title: "Salud Mental", icon: <HeartHandshake size={32} />, color: "bg-rose-500/10 text-rose-600", desc: "Apoyo psicológico y psiquiátrico con enfoque empático." },
  { id: 'emergency', title: "Emergencias 24/7", icon: <Zap size={32} />, color: "bg-red-600/10 text-red-700", desc: "Estabilización rápida y cuidados críticos en todo momento." },
];

export default function MedicalUnits() {
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">PORTAFOLIO CLÍNICO</span>
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface mb-8">Nuestras Unidades Médicas</h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl opacity-80 leading-relaxed font-body">
              Infraestructura diseñada para la gestión clínica de alto nivel, fusionando tecnología de punta con la empatía necesaria en cada etapa del tratamiento.
            </p>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {units.map((unit, i) => (
            <motion.article 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group flex flex-col"
            >
              <div className={`w-16 h-16 ${unit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {unit.icon}
              </div>
              <h3 className="text-xl font-black font-headline text-on-surface mb-3 group-hover:text-primary transition-colors">{unit.title}</h3>
              <p className="text-sm text-on-surface-variant opacity-60 leading-relaxed mb-8 flex-1">
                {unit.desc}
              </p>
              <Link 
                to="/booking" 
                className="w-full py-4 rounded-2xl border border-primary text-primary font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all text-center flex items-center justify-center gap-2"
              >
                Solicitar Cita <ClipboardList size={14} />
              </Link>
            </motion.article>
          ))}
        </section>

        <footer className="mt-20 pt-10 border-t border-outline-variant/10 text-center">
          <p className="text-on-surface-variant text-sm font-medium opacity-60 italic">
            Estamos continuamente expandiendo nuestras especialidades para brindarle un cuidado integral.
          </p>
        </footer>
      </div>
    </main>
  );
}

import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Clinics() {
  const units = [
    { name: "Unidad de Nutrición y Diabetes", location: "Ala Este, Nivel 2", features: ["Monitoreo continuo", "Nutrigenética", "Educación diabetológica"] },
    { name: "Centro de Cardiología Avanzada", location: "Ala Norte, Nivel 3", features: ["Ecocardiografía Doppler", "MAPA/Holter", "Rehabilitación cardíaca"] },
    { name: "Pabellón de Cuidados Paliativos", location: "Anexo Garden, Nivel 1", features: ["Ambiente terapéutico", "Unidad de dolor", "Soporte familiar"] },
    { name: "Consultorios de Medicina Interna", location: "Ala Sur, Nivel 2", features: ["Gestión crónica", "Evaluación ejecutiva", "Seguimiento ARS"] }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">
              Infraestructura Médica de Clase Ejecutiva.
            </h1>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-10">
              Salud Integral cuenta con unidades físicas diseñadas para la comodidad y privacidad del paciente, integrando tecnología de punta en cada consultorio.
            </p>
            <div className="flex gap-4">
              <Link to="/booking" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-container transition-all">Programar Visita</Link>
              <Link to="/contact" className="border border-outline-variant px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-all">Ver Mapa</Link>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-xl"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2r5t0y9u8i7o6p5l4k3j2h1g0f9e8d7c6b5a4Z3Y2X1W0V9U8T7S6R5-4Q3P2O1n0" className="w-full h-full object-cover" alt="Clinic Interior" /></div>
            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-xl mt-12"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_v8r5Q0w8W1n2e1r0t9L8n7m6O5G4R3v2w1p0k9f8d7u6y5t4r3e2w1q0p9o8n-7M6l5k4j3i2h1G1F5e4d3c2b1a0Z9Y8X7W6V5U4T3S2R1" className="w-full h-full object-cover" alt="Medical Office" /></div>
          </div>
        </header>

        <h2 className="text-2xl font-black mb-12 font-headline tracking-tighter text-center">Nuestras Unidades Especializadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {units.map((unit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="text-primary" size={20} />
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 p-3 rounded-full">
                  <ArrowUpRight className="text-primary" size={20} />
                </button>
              </div>
              <h3 className="text-xl font-black mb-2 font-headline tracking-tighter">{unit.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">{unit.location}</p>
              <ul className="space-y-3">
                {unit.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                    <CheckCircle2 className="text-primary/40" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Scan, Zap, ShieldCheck, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Diagnostics() {
  const imagingServices = [
    { title: "Resonancia Magnética (MRI)", desc: "Imágenes de alta resolución para neurología y cardiología.", icon: <Scan /> },
    { title: "Tomografía (CT Scan)", desc: "Diagnóstico rápido y preciso para emergencias y seguimiento crónico.", icon: <Zap /> },
    { title: "Rayos X Digitales", desc: "Radiología de baja dosis con entrega de resultados inmediata.", icon: <ShieldCheck /> },
    { title: "Ecografía Avanzada", desc: "Sonografía Doppler y 4D para diagnóstico preventivo.", icon: <FileSearch /> }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="text-xs font-black uppercase tracking-widest text-primary">Diagnóstico de Precisión</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter max-w-3xl leading-tight">
            Tecnología de Imágenes para un Diagnóstico Certero.
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl mb-12">
            Nuestra unidad de imágenes diagnósticas utiliza equipos de última generación para capturar cada detalle, permitiendo a nuestros especialistas diseñar planes de tratamiento más efectivos.
          </p>
          <Link to="/booking" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20">
            Agendar un Examen
          </Link>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {imagingServices.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover-lift"
            >
              <div className="text-primary mb-6">{s.icon}</div>
              <h3 className="text-lg font-bold mb-3 font-headline tracking-tight">{s.title}</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-sm">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9l8y7x6c5v4b3n2m1L0k9j8h7g6f5d4s3a2P1" alt="Advanced Imaging Equipment" />
          </div>
          <div>
            <h2 className="text-2xl font-black mb-8 font-headline tracking-tighter">Preparación y Proceso</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Cita y Pre-vuelo", desc: "Verifique si su examen requiere ayuno o contraste con nuestro equipo de atención." },
                { step: "02", title: "Captura de Alta Fidelidad", desc: "Personal técnico certificado le guiará durante el proceso para asegurar comodidad." },
                { step: "03", title: "Entrega Digital", desc: "Resultados disponibles en 24-48 horas directamente en su Portal del Paciente." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-primary/20 font-headline leading-none">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

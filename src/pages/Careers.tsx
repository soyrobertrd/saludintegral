import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const values = [
    { title: "Excelencia Médica", desc: "Nos comprometemos con los más altos estándares de rigor clínico y actualización científica.", icon: <GraduationCap /> },
    { title: "Cuidado Humano", desc: "Buscamos profesionales que vean más allá del síntoma y traten a la persona con dignidad.", icon: <Heart /> },
    { title: "Innovación Operativa", desc: "Buscamos optimizar cada proceso para mejorar la experiencia del paciente y del staff.", icon: <Rocket /> }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="text-xs font-black uppercase tracking-widest text-primary">Únete a Nuestro Equipo</span>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter max-w-3xl mx-auto leading-tight">
            Desarrolla tu Carrera en el Centro de Excelencia Médica.
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto mb-12">
            Salud Integral es más que una clínica; es un ecosistema de profesionales dedicados a transformar la gestión de salud en la República Dominicana.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container shadow-xl transition-all">Ver Vacantes</button>
            <Link to="/contact" className="px-10 py-5 rounded-2xl border border-outline-variant font-black text-sm uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-all">Enviar CV</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-3xl bg-surface-container-low border border-outline-variant/10 shadow-sm"
            >
              <div className="text-primary mb-8">{v.icon}</div>
              <h3 className="text-lg font-bold mb-4 font-headline tracking-tight">{v.title}</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </section>

        <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-8 font-headline tracking-tighter text-white">Buscamos Talento en Especialidades Crónicas.</h2>
              <p className="text-lg opacity-70 mb-10 font-body">Estamos expandiendo nuestra unidad de cuidados paliativos y oncología clínica. Si tienes pasión por el cuidado integral, queremos conocerte.</p>
              <ul className="space-y-4">
                {["Médicos Internistas Especializados", "Enfermería de Cuidados Avanzados", "Gestores de Seguros Médicos", "Bio-analistas Clínicos"].map((job, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                    <Briefcase className="text-primary w-4 h-4" /> {job}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSRU6I7V8-M3G2-M3N1-v1c1G1-x1x1-z1Z1-y1Y1-w1W1-v1V1" className="w-full h-full object-cover" alt="Medical Staff Working" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}

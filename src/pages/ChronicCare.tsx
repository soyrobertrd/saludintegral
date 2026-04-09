import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Beaker, ShieldCheck, Heart, Zap, BookOpen, Truck, Users } from 'lucide-react';

export default function ChronicCare() {
  const conditions = [
    { title: "Insuficiencia Cardíaca", icon: <Heart size={18} /> },
    { title: "Insuficiencia Renal", icon: <Activity size={18} /> },
    { title: "Insuficiencia Hepática", icon: <Beaker size={18} /> },
    { title: "Insuficiencia Pulmonar", icon: <Zap size={18} /> }
  ];

  const benefits = [
    { title: "Identificación Proactiva", desc: "Detección temprana de necesidades de cuidado para prevenir complicaciones.", icon: <ShieldCheck /> },
    { title: "Coordinación de AT", desc: "Gestión oportuna de atención domiciliaria y ambulatoria personalizada.", icon: <Truck /> },
    { title: "Apoyo Educativo", desc: "Recursos de formación para el paciente, cuidadores y su núcleo familiar.", icon: <BookOpen /> },
    { title: "Entrega de Medicamentos", desc: "Dispensación directa de fármacos para el control estricto de su enfermedad.", icon: <Beaker /> }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 text-xs font-black uppercase tracking-widest text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link to="/services" className="hover:text-primary transition-colors">Servicios</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary">Viviendo Crónicos Complejos</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-8 border border-blue-500/5">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">ARS Primera: Especializado</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">
                Viviendo Crónicos Complejos.
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-body">
                Diseñado para pacientes que requieren atención continua debido a múltiples afecciones crónicas. Promovemos una cultura del cuidado para el manejo oportuno de complicaciones.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Link to="/booking" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-container shadow-xl transition-all">
                   Solicitar Evaluación
                 </Link>
                 <div className="flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-xl border border-outline-variant/10 text-xs font-bold">
                    <Users size={18} className="text-primary" /> Programa Multidisciplinario
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 outline outline-outline-variant/10 rounded-3xl p-8 bg-surface-container-lowest shadow-sm">
               {conditions.map((cond, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/5 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all cursor-default"
                 >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-white group-hover:text-primary">
                      {cond.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{cond.title}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-black font-headline tracking-tighter mb-4">Beneficios del Programa</h2>
            <p className="text-sm text-on-surface-variant font-body max-w-xl mx-auto">Nuestro compromiso es ofrecerte las herramientas necesarias para estabilizar tu condición y mejorar tu día a día.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10 hover:shadow-xl transition-all"
              >
                <div className="text-primary mb-6 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-sm font-black mb-2 font-headline uppercase tracking-tight">{b.title}</h3>
                <p className="text-[11px] text-on-surface-variant font-body leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Target & Requirements */}
        <section className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-12 md:p-20 flex flex-col lg:flex-row gap-20 items-center overflow-hidden relative">
          <div className="relative z-10 lg:w-1/2">
            <h2 className="text-2xl font-black mb-8 font-headline tracking-tighter">¿Quiénes califican para el programa?</h2>
            <p className="text-lg opacity-70 mb-12 font-body">Dirigido a afiliados de ARS Primera con plan básico vigente que requieren un control estricto de su polimedicación y estado clínico.</p>
            <div className="space-y-6">
              {[
                "Mayoría de edad (18+ años)",
                "Afiliado activo en ARS Primera",
                "Diagnóstico de múltiples condiciones crónicas",
                "Paciente polimedicado validado por especialista"
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold">
                   <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px]">✓</div>
                   {req}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><Activity className="text-white" size={20} /></div>
                <h4 className="font-black text-sm uppercase tracking-widest">Coordinación SI</h4>
             </div>
             <p className="text-xs font-medium leading-relaxed opacity-60 mb-8">
               En Salud Integral, realizamos la coordinación directa con ARS Primera para autorizaciones, entrega de medicamentos a domicilio y visitas médicas ambulatorias específicas para su cuadro clínico.
             </p>
             <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">Ver Documentación Requerida</button>
          </div>
        </section>
      </div>
    </div>
  );
}

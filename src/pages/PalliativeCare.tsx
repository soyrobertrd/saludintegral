import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Flower, ShieldPlus, Home, Smartphone, Users2, Info } from 'lucide-react';

export default function PalliativeCare() {
  const benefits = [
    "Herramientas para mejorar la calidad de vida",
    "Equipo de profesionales capacitados",
    "Atención médica domiciliaria bajo demanda",
    "Dispensación de medicamentos sintomáticos",
    "Apoyo psicológico y espiritual familiar"
  ];

  const resources = [
    { title: "Para el Paciente", items: ["Manejo integral del dolor", "Servicio de enfermería especializada", "Apoyo psicológico", "Trabajo social personalizado", "Visitas domiciliarias recurrentes"] },
    { title: "Para Cuidadores", items: ["Taller de herramientas de cuidado", "Bienestar emocional", "Acompañamiento psicológico", "Reducción de sobrecarga"] }
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
          <span className="text-primary">Programa Siempre Juntos</span>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-rose-500/10 px-4 py-2 rounded-full mb-8 border border-rose-500/5">
              <span className="text-xs font-black text-rose-600 uppercase tracking-widest">ARS Primera: Siempre Juntos</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">
              Acompañamiento y Bienestar en Cada Etapa.
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-body">
              Con el programa **Siempre Juntos**, brindamos atención activa, global e integral a personas con enfermedades avanzadas y sus familias, orientada siempre a evitar el dolor y aliviar los síntomas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
                <Home className="text-rose-500" size={20} />
                <span className="text-xs font-bold">Atención Domiciliaria</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
                <Smartphone className="text-rose-500" size={20} />
                <span className="text-xs font-bold">Coordinación Digital</span>
              </div>
            </div>

            <Link to="/booking" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container shadow-xl transition-all">
              Consultar Ingreso al Programa
            </Link>
          </motion.div>

          {/* Video Placeholder or Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-sm relative bg-black"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/STqyNef_V9E?si=uxfHfUSqe6gYiHFz" 
              title="Programa Siempre Juntos" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </section>

        {/* Benefits & How we do it */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black font-headline tracking-tighter mb-4">¿Qué hacemos por ti?</h2>
            <p className="text-on-surface-variant font-body max-w-2xl mx-auto">Sabemos que el mayor acto de amor es cuidar. Por eso ponemos a disposición de las familias una propuesta integral de servicios para el alivio del sufrimiento y la mejora de la calidad de vida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-container-low p-12 rounded-3xl border border-outline-variant/10">
              <h3 className="text-xl font-black mb-8 font-headline tracking-tight">Beneficios del Programa</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-on-surface">
                    <div className="w-6 h-6 bg-rose-500/10 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-12">
              <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
                <h3 className="text-lg font-black mb-4 font-headline tracking-tight">Requisitos de Ingreso</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><ShieldPlus className="text-primary" size={18} /> Pertenecer a <strong>ARS Primera</strong></li>
                  <li className="flex items-center gap-3 text-sm font-medium"><Users2 className="text-primary" size={18} /> Ser mayor de 18 años</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><Heart className="text-primary" size={18} /> Diagnóstico de enfermedad avanzada</li>
                </ul>
              </div>
              <div className="flex gap-6 items-center">
                 <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-outline-variant/5">
                   <Flower className="text-rose-500" />
                 </div>
                 <p className="text-sm font-body italic text-on-surface-variant leading-relaxed">"Procuramos sensibilizar a la sociedad sobre la importancia del acompañamiento y la dignidad en esta etapa de la vida."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="mb-32">
          <h2 className="text-2xl font-black mb-16 font-headline tracking-tighter text-center">Recursos Disponible: SI-Primera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <div key={i} className="bg-surface-container-lowest p-12 rounded-3xl border border-outline-variant/10 shadow-sm">
                <h3 className="text-lg font-black mb-8 font-headline uppercase tracking-widest text-primary/60">{res.title}</h3>
                <ul className="grid grid-cols-1 gap-4">
                   {res.items.map((item, j) => (
                     <li key={j} className="flex items-center gap-3 text-sm font-bold text-on-surface-variant">
                        <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
                        {item}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteers Banner */}
        <section className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-16 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-black mb-6 font-headline tracking-tighter text-white">Voluntarios Siempre Juntos</h2>
              <p className="text-lg opacity-70 mb-8 font-body">Un equipo interdisciplinario que brinda apoyo a las familias. Una persona capacitada puede aliviar la sobrecarga del cuidador con el simple hecho de escuchar.</p>
              <button className="bg-white text-on-surface px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/90 transition-all">Unirse al Voluntariado</button>
            </div>
            <div className="flex bg-white/5 p-8 rounded-3xl border border-white/10 gap-6 items-center">
               <Info className="text-primary shrink-0" size={32} />
               <p className="text-sm font-medium text-white/80">Este programa es coordinado directamente con el departamento médico de ARS Primera para pacientes elegibles.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

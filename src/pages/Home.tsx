import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import { ArrowRight, Activity, Users, ShieldCheck, HeartPulse, Stethoscope } from 'lucide-react';

const heroSlides = [
  {
    tag: "CUIDADOS PALIATIVOS & CRÓNICOS",
    title: "Cuidado médico humano en los momentos que más importan.",
    desc: "Acompañamos a pacientes y familias con atención paliativa profesional, respeto y cercanía. Usted no está solo en este camino.",
    image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&q=80&w=1600",
    primaryAction: "Hablar con un especialista ahora",
    primaryPath: "/contact",
    secondaryAction: "Ver cómo podemos ayudarte",
    secondaryPath: "/palliative-care",
    bullets: null
  },
  {
    tag: "ATENCIÓN A DOMICILIO",
    title: "Atención médica a domicilio, sin complicaciones.",
    desc: "Llevamos el cuidado hasta tu hogar para mayor comodidad, tranquilidad y seguimiento continuo.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1600",
    primaryAction: "Solicitar atención",
    primaryPath: "/booking",
    secondaryAction: null,
    secondaryPath: null,
    bullets: ["Evaluación médica en casa", "Seguimiento personalizado", "Atención para pacientes crónicos y paliativos"]
  },
  {
    tag: "ESTAMOS AQUÍ PARA TI",
    title: "No tienes que pasar por esto solo.",
    desc: "Nuestro equipo está listo para orientarte y ayudarte a tomar la mejor decisión para tu familiar.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1600",
    primaryAction: "Escribir por WhatsApp",
    primaryPath: "https://wa.me/18095550199",
    secondaryAction: null,
    secondaryPath: null,
    bullets: null
  }
];

const medicalNews = [
  {
    id: 'telemedicina-2',
    title: "IA en Cardiología Preventiva: El Futuro del Diagnóstico",
    desc: "Nuestra clínica introduce nuevos protocolos que utilizan machine learning para predecir eventos cardiovasculares.",
    date: "12 May, 2024",
    category: "INNOVACIÓN",
    categoryColor: "bg-emerald-400",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'mindfulness',
    title: "Conexión Intestino-Cerebro: Un Enfoque Holístico",
    desc: "Cómo la ciencia nutricional moderna está remodelando nuestra comprensión de la salud mental.",
    date: "10 May, 2024",
    category: "BIENESTAR",
    categoryColor: "bg-blue-400",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'feria-salud',
    title: "Gran Apertura del Ala Pediátrica el Próximo Mes",
    desc: "Ampliamos nuestro compromiso con la salud familiar con instalaciones diseñadas para el confort infantil.",
    date: "08 May, 2024",
    category: "COMUNIDAD",
    categoryColor: "bg-purple-400",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600"
  }
];

const featuredDoctors = [
  { id: '1', name: "Dra. Elena Martínez", sub: "Gestión de Cuidados Crónicos", education: "Harvard Medical School", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=95&w=1200" },
  { id: '2', name: "Dr. Roberto Santos", sub: "Unidad de Cuidados Paliativos", education: "Universidad de Navarra", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=95&w=1200" },
  { id: '3', name: "Dra. Lucía Valerio", sub: "Cardiología Diagnóstica", education: "Instituto de Cardiología", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=95&w=1200" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Slider Section - 100vh */}
      <section className="relative h-screen flex items-center overflow-hidden bg-on-surface">
        <AnimatePresence>
           <motion.div 
             key={currentSlide}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute inset-0 z-0"
           >
              <img 
                src={heroSlides[currentSlide].image} 
                className="w-full h-full object-cover brightness-[0.75]" 
                alt="Healthcare Excellence" 
              />
              <div className="absolute inset-0 bg-linear-to-r from-on-surface/60 via-on-surface/30 to-transparent"></div>
           </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto w-full px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8 block drop-shadow-sm">
                {heroSlides[currentSlide].tag}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight font-headline tracking-tight max-w-2xl">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg text-white/85 mb-8 leading-relaxed font-body max-w-xl">
                {heroSlides[currentSlide].desc}
              </p>

              {/* Bullets (slide 2) */}
              {heroSlides[currentSlide].bullets && (
                <ul className="mb-10 space-y-3">
                  {heroSlides[currentSlide].bullets!.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                      <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5"><path d="M1 5l3 3 7-7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-4">
                  {heroSlides[currentSlide].primaryPath?.startsWith('http') ? (
                    <a
                      href={heroSlides[currentSlide].primaryPath!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-on-primary px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
                    >
                      {heroSlides[currentSlide].primaryAction}
                    </a>
                  ) : (
                    <Link
                      to={heroSlides[currentSlide].primaryPath!}
                      className="bg-primary text-on-primary px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
                    >
                      {heroSlides[currentSlide].primaryAction}
                    </Link>
                  )}

                  {heroSlides[currentSlide].secondaryAction && heroSlides[currentSlide].secondaryPath && (
                    <Link
                      to={heroSlides[currentSlide].secondaryPath!}
                      className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-on-surface transition-all border border-white/20"
                    >
                      {heroSlides[currentSlide].secondaryAction}
                    </Link>
                  )}
                </div>

                {/* Microtexto slide 3 */}
                {currentSlide === 2 && (
                  <p className="text-white/50 text-[10px] font-medium tracking-wide">
                    Respuesta rápida y orientación sin compromiso
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Centered Slider Indicators at the absolute end (bottom) */}
          <div className="absolute -bottom-6 left-0 w-full flex justify-center items-center z-20 pointer-events-none">
             <div className="flex gap-3 pointer-events-auto">
                {heroSlides.map((_, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 hover:bg-primary ${currentSlide === idx ? 'w-16 bg-primary' : 'w-8 bg-white/30'}`} 
                   />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 max-w-7xl mx-auto px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="md:col-span-6 lg:col-span-5 bg-primary/5 rounded-3xl p-12 border border-primary/10 flex flex-col justify-between relative group overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Users className="text-primary mb-12 group-hover:scale-110 transition-transform" size={48} />
              <div>
                 <div className="text-5xl lg:text-7xl font-black text-on-surface font-headline mb-4 tracking-tighter group-hover:text-primary transition-colors">
                   <AnimatedCounter value={15} suffix="k+" />
                 </div>
                 <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-60">Consultas Especializadas Realizadas</p>
              </div>
           </motion.div>

           <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/5 rounded-3xl p-10 border border-secondary/10 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                 <Activity className="text-secondary mb-8 group-hover:rotate-12 transition-transform" size={32} />
                 <div className="text-4xl font-black text-on-surface font-headline mb-2 group-hover:text-secondary transition-colors">
                   <AnimatedCounter value={98} suffix="%" />
                 </div>
                 <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Satisfacción Directa</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-tertiary/5 rounded-3xl p-10 border border-tertiary/10 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                 <ShieldCheck className="text-tertiary mb-8 group-hover:scale-110 transition-transform" size={32} />
                 <div className="text-4xl font-black text-on-surface font-headline mb-2 group-hover:text-tertiary transition-colors">
                   <AnimatedCounter value={120} suffix="+" />
                 </div>
                 <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Convenios ARS Premium</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:col-span-2 bg-on-surface/5 rounded-3xl p-10 border border-outline-variant/5 flex items-center gap-8 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/20 transition-all">
                    <HeartPulse className="text-primary animate-pulse" size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black font-headline tracking-tighter uppercase whitespace-nowrap group-hover:text-primary transition-colors">Gestión de Casos SI+</h4>
                    <p className="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-black opacity-40">Monitoreo activo las 24 horas</p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-32 max-w-7xl mx-auto px-8 bg-surface-container-lowest border-y border-outline-variant/5 rounded-[4rem]">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">PORTAFOLIO CLÍNICO</span>
          <h2 className="text-3xl md:text-6xl font-black mb-8 font-headline tracking-tighter">Especialidades con Enfoque Humano</h2>
          <p className="text-lg text-on-surface-variant font-body opacity-80 leading-relaxed">Infraestructura diseñada para la gestión clínica de alto nivel, fusionando tecnología y empatía.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Consultas Especializadas", link: "/services", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" },
            { title: "Analíticas Avanzadas", link: "/labs", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400" },
            { title: "Cuidados Crónicos", link: "/chronic-care", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" },
            { title: "Cuidados Paliativos", link: "/palliative-care", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400" }
          ].map((area, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="group rounded-3xl bg-white border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                 <img src={area.img} alt={area.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              </div>
              <div className="p-10 flex flex-col flex-1">
                 <h3 className="text-xl font-black mb-6 font-headline tracking-tighter group-hover:text-primary transition-colors">{area.title}</h3>
                 <Link to={area.link} className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                   Ver Detalles <ArrowRight size={14} />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Staff Preview */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-2xl">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">ELITE MEDICAL STAFF</span>
              <h2 className="text-3xl md:text-6xl font-black font-headline tracking-tighter leading-tight">Conozca a nuestro equipo de especialistas</h2>
           </div>
           <Link to="/staff" className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary hover:gap-5 transition-all">
              Ver Todo el Equipo <ArrowRight size={18} />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {featuredDoctors.map((doc, i) => (
              <motion.div key={doc.id} transition={{ delay: i * 0.1 }} className="group">
                 <div className="aspect-3/4 rounded-3xl bg-surface-container-low overflow-hidden mb-8 relative border border-outline-variant/5 shadow-sm">
                   <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Link to={`/staff/${doc.id}`} className="bg-primary px-6 py-4 rounded-xl flex justify-between items-center text-white shadow-xl">
                         <span className="text-[9px] font-black uppercase tracking-widest">Perfil Profesional</span>
                         <ArrowRight size={16} />
                      </Link>
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-black text-on-surface font-headline tracking-tighter mb-2 group-hover:text-primary transition-colors">{doc.name}</h3>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-60">
                      <Stethoscope size={14} /> {doc.sub}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* News Hub */}
      <section className="py-32 bg-surface-container-lowest border-t border-outline-variant/10 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">EDITORIAL SI+</span>
                <h2 className="text-3xl md:text-6xl font-black font-headline tracking-tighter">Investigación y Bienestar</h2>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {medicalNews.map((news, i) => (
               <motion.article key={i} className="group flex flex-col">
                  <div className="h-64 rounded-2xl overflow-hidden mb-8 border border-outline-variant/5">
                     <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex-1">
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-4 block">{news.category}</span>
                     <Link to={`/blog/${news.id}`}>
                        <h3 className="text-xl font-black font-headline text-on-surface mb-6 group-hover:text-primary transition-colors tracking-tight leading-tight">{news.title}</h3>
                     </Link>
                     <p className="text-on-surface-variant text-xs leading-relaxed mb-8 opacity-70 line-clamp-2">
                        {news.desc}
                     </p>
                     <Link to={`/blog/${news.id}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                        Leer Artículo <ArrowRight size={14} />
                     </Link>
                  </div>
               </motion.article>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#1a4fc4] to-[#1a3a9f] p-14 md:p-20 text-center"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-white font-headline tracking-tighter leading-tight mb-6"
              >
                ¿Listo para comenzar tu viaje hacia una salud plena?
              </motion.h2>
              <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-12">
                Únase a nuestra red exclusiva de pacientes y experimente un sistema de salud que verdaderamente valora su tiempo y su vida.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-[#1a4fc4] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all shadow-2xl shadow-black/20"
                >
                  Solicitar Invitación
                </Link>
                <Link
                  to="/portal"
                  className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
                >
                  Ver Beneficios
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

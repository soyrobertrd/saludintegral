import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope } from 'lucide-react';

const heroSlides = [
  {
    tag: "CUIDADOS PALIATIVOS & CRÓNICOS",
    title: "Cuidado médico humano",
    titleAccent: "en los momentos que más importan.",
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
    title: "Atención médica a domicilio,",
    titleAccent: "sin complicaciones.",
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
    title: "No tienes que pasar",
    titleAccent: "por esto solo.",
    desc: "Nuestro equipo está listo para orientarte y ayudarte a tomar la mejor decisión para tu familiar.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1600",
    primaryAction: "Escribir por WhatsApp",
    primaryPath: "https://wa.me/18098178536",
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
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'mindfulness',
    title: "Conexión Intestino-Cerebro: Un Enfoque Holístico",
    desc: "Cómo la ciencia nutricional moderna está remodelando nuestra comprensión de la salud mental.",
    date: "10 May, 2024",
    category: "BIENESTAR",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'feria-salud',
    title: "Gran Apertura del Ala Pediátrica el Próximo Mes",
    desc: "Ampliamos nuestro compromiso con la salud familiar con instalaciones diseñadas para el confort infantil.",
    date: "08 May, 2024",
    category: "COMUNIDAD",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600"
  }
];

const featuredDoctors = [
  { id: '1', name: "Dra. Elena Martínez", sub: "Gestión de Cuidados Crónicos", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=95&w=1200" },
  { id: '2', name: "Dr. Roberto Santos", sub: "Unidad de Cuidados Paliativos", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=95&w=1200" },
  { id: '3', name: "Dra. Lucía Valerio", sub: "Cardiología Diagnóstica", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=95&w=1200" }
];

const WA_SVG = (
  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732.737 5.291 2.022 7.491l-2.147 7.772 7.949-2.083a14.83 14.83 0 007.108 1.813h.006c8.208 0 14.862-6.656 14.862-14.865 0-4.103-1.662-7.817-4.349-10.507l-.075-.132zM16.062 28.228h-.005a12.3 12.3 0 01-6.399-1.784l-.457-.272-4.749 1.245 1.268-4.628-.298-.474a12.335 12.335 0 01-1.889-6.565c0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353l-.824.125z"/>
  </svg>
);

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

      {/* ── HERO SLIDER ── */}
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
            <img src={heroSlides[currentSlide].image} className="w-full h-full object-cover brightness-[0.75]" alt="Hero" />
            <div className="absolute inset-0 bg-linear-to-r from-on-surface/60 via-on-surface/30 to-transparent" />
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight font-headline tracking-tight max-w-2xl">
                {heroSlides[currentSlide].title}{' '}
                <span className="text-blue-300">{heroSlides[currentSlide].titleAccent}</span>
              </h1>
              <p className="text-lg text-white/85 mb-8 leading-relaxed font-body max-w-xl">
                {heroSlides[currentSlide].desc}
              </p>

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
                    <a href={heroSlides[currentSlide].primaryPath!} target="_blank" rel="noopener noreferrer"
                      className="bg-primary text-on-primary px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20">
                      {heroSlides[currentSlide].primaryAction}
                    </a>
                  ) : (
                    <Link to={heroSlides[currentSlide].primaryPath!}
                      className="bg-primary text-on-primary px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20">
                      {heroSlides[currentSlide].primaryAction}
                    </Link>
                  )}
                  {heroSlides[currentSlide].secondaryAction && heroSlides[currentSlide].secondaryPath && (
                    <Link to={heroSlides[currentSlide].secondaryPath!}
                      className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-on-surface transition-all border border-white/20">
                      {heroSlides[currentSlide].secondaryAction}
                    </Link>
                  )}
                </div>
                {currentSlide === 2 && (
                  <p className="text-white/50 text-[10px] font-medium tracking-wide">
                    Respuesta rápida y orientación sin compromiso
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider dots — fixed at bottom of hero */}
        <div className="absolute bottom-[10px] left-0 w-full flex justify-center items-center z-20">
          <div className="flex gap-3">
            {heroSlides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 hover:bg-primary ${currentSlide === idx ? 'w-16 bg-primary' : 'w-8 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Cómo podemos ayudarte? ── */}
      <section className="py-24 px-8 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-on-surface">¿Cómo podemos ayudarte?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🏠", title: "Atención médica a domicilio", desc: "Llevamos el cuidado hasta tu hogar, evitando traslados innecesarios y brindando mayor comodidad al paciente." },
              { emoji: "💙", title: "Cuidados paliativos", desc: "Acompañamiento profesional enfocado en mejorar la calidad de vida del paciente y brindar apoyo a la familia." },
              { emoji: "📋", title: "Seguimiento médico continuo", desc: "Evaluación constante para adaptar el tratamiento según la evolución del paciente." },
              { emoji: "👨‍👩‍👧", title: "Orientación a familiares", desc: "Te ayudamos a entender cada paso para tomar decisiones con mayor tranquilidad." }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-outline-variant/10 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="text-4xl mb-6">{card.emoji}</div>
                <h3 className="font-black text-on-surface font-headline text-lg mb-3 leading-tight group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-70">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso simple ── */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Así Funciona</span>
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-on-surface">Recibir atención es más fácil de lo que imaginas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-outline-variant/20 z-0" />
            {[
              { num: "01", title: "Escríbenos por WhatsApp", desc: "Cuéntanos tu situación y te orientamos de inmediato." },
              { num: "02", title: "Evaluamos el caso", desc: "Nuestro equipo médico analiza la necesidad del paciente." },
              { num: "03", title: "Coordinamos la atención", desc: "Agendamos la visita en el lugar y momento adecuado." },
              { num: "04", title: "Acompañamiento continuo", desc: "Damos seguimiento para garantizar el bienestar del paciente." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
                  <span className="text-white font-black text-xl font-headline">{step.num}</span>
                </div>
                <h3 className="font-black text-on-surface font-headline text-lg mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-on-surface-variant opacity-75 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloque emocional ── */}
      <section className="py-24 px-8 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-5xl mb-8">🤝</div>
            <p className="text-2xl md:text-4xl font-black font-headline tracking-tight text-on-surface leading-tight mb-6">
              Sabemos que estás pasando por un momento delicado.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-4 opacity-80">
              Tomar decisiones médicas no siempre es fácil, y por eso nuestro equipo está aquí para acompañarte con respeto, claridad y compromiso.
            </p>
            <p className="text-sm font-black text-primary uppercase tracking-widest mb-10">No solo atendemos pacientes, acompañamos familias.</p>
            <a href="https://wa.me/18098178536" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20">
              {WA_SVG} Hablar con un especialista ahora
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ¿Por qué elegir Salud Integral? ── */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Nuestro Diferencial</span>
              <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-on-surface mb-8 leading-tight">¿Por qué elegir Salud Integral PSS?</h2>
              <div className="space-y-4">
                {[
                  "Atención centrada en el paciente y su entorno",
                  "Enfoque humano en cada etapa del proceso",
                  "Comodidad de atención en el hogar",
                  "Comunicación clara y constante",
                  "Equipo comprometido con el bienestar integral"
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5"><path d="M1 5l3 3 7-7" stroke="#1a4fc4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-sm font-medium text-on-surface leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-4/3 border border-outline-variant/5 shadow-sm">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=900" alt="Atención médica humana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-on-surface/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Portafolio Clínico ── */}
      <section className="py-32 max-w-7xl mx-auto px-8 bg-surface-container-lowest border-y border-outline-variant/5 rounded-4xl">
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
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="group rounded-3xl bg-white border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-xl">
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

      {/* ── Staff Preview ── */}
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

      {/* ── EDITORIAL SI+ — penúltima ── */}
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
                  <p className="text-on-surface-variant text-xs leading-relaxed mb-8 opacity-70 line-clamp-2">{news.desc}</p>
                  <Link to={`/blog/${news.id}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                    Leer Artículo <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 px-8 bg-[#1a4fc4]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-white mb-4 leading-tight">
              Estamos aquí para ayudarte
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Si necesitas orientación o deseas coordinar atención, escríbenos directamente. Nuestro equipo te responderá lo antes posible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="https://wa.me/18098178536" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1a4fc4] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all shadow-2xl shadow-black/20">
                {WA_SVG} Escribir por WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                Ver Beneficios del Portal
              </Link>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a href="tel:+18098178536" className="text-white font-black text-lg hover:text-white/80 transition-colors">📱 (809) 817-8536</a>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Atención en Santo Domingo y zonas cercanas</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

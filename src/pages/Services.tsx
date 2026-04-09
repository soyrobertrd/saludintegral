import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Activity, Heart, Shield, Biohazard, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Consultas Especializadas",
      desc: "Acceso a una red de especialistas líderes en cardiología, neurología, oncología y más.",
      icon: <Stethoscope className="text-primary" size={32} />,
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=75&w=800",
      features: ["Segunda opinión médica", "Telemedicina premium", "Gestión de citas prioritaria"]
    },
    {
      title: "Bio-Bóveda: Laboratorios",
      desc: "Procesamiento de analíticas con tecnología de bio-precisión y resultados en tiempo real.",
      icon: <Biohazard className="text-secondary" size={32} />,
      img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=75&w=800",
      features: ["Marcadores oncológicos", "Pruebas genéticas", "Perfil metabólico completo"]
    },
    {
      title: "Gestión de Cuidados Crónicos",
      desc: "Programas personalizados para el manejo de patologías de larga duración con monitoreo activo.",
      icon: <Activity className="text-tertiary" size={32} />,
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=75&w=800",
      features: ["Monitoreo 24/7", "Coordinación de enfermería", "Acompañamiento familiar"]
    },
    {
      title: "Cuidados Paliativos",
      desc: "Dignidad y confort integral para pacientes en etapas avanzadas, enfocado en calidad de vida.",
      icon: <Heart className="text-rose-500" size={32} />,
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=75&w=800",
      features: ["Manejo del dolor", "Soporte espiritual", "Atención domiciliaria"]
    },
    {
      title: "Pediatría Especializada",
      desc: "Cuidado experto para los más pequeños en un ambiente diseñado para su tranquilidad.",
      icon: <Baby className="text-amber-500" size={32} />,
      img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=75&w=800",
      features: ["Crecimiento y desarrollo", "Vacunación internacional", "Urgentología pediátrica"]
    }
  ];

  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <header className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block"
          >
            Servicios SI+
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-on-surface font-headline tracking-tighter leading-tight"
          >
            Un ecosistema de cuidado diseñado para la excelencia.
          </motion.h1>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 gap-32">
          {services.map((service, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-sm shadow-primary/5 relative bg-surface-container-low border border-outline-variant/10">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100" 
                    />
                   <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h2>
                <p className="text-xl text-on-surface-variant font-body leading-relaxed opacity-80">
                  {service.desc}
                </p>
                <ul className="space-y-4 pt-4">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">
                       <Shield className="text-primary shrink-0" size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                   <Link to="/contact" className="bg-on-surface text-white px-10 py-5 rounded-xml rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 inline-flex items-center gap-4 shadow-xl shadow-on-surface/10 hover:scale-[1.03] hover:-translate-y-1 active:scale-95">
                     Hablar con un especialista ahora <ArrowRight size={18} />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}

import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, CheckCircle2, Users, Activity, HeartPulse } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
  const coreValues = [
    {
      title: "Integridad Médica",
      desc: "Protocolos estrictos basados en evidencia para diagnósticos precisos.",
      icon: <Target size={28} className="text-primary" />,
      bg: "bg-primary/10",
      accent: "border-primary/20"
    },
    {
      title: "Compasión Activa",
      desc: "Trato digno y soporte emocional en cada etapa del tratamiento.",
      icon: <Heart size={28} className="text-rose-500" />,
      bg: "bg-rose-500/10",
      accent: "border-rose-500/20"
    },
    {
      title: "Transparencia",
      desc: "Claridad total en procesos de cobertura y gestión de seguros.",
      icon: <ShieldCheck size={28} className="text-sky-500" />,
      bg: "bg-sky-500/10",
      accent: "border-sky-500/20"
    }
  ];

  const visionPillars = [
    { label: "Liderazgo en Bio-Análisis Avanzado", detail: "Tecnología de vanguardia para diagnósticos de precisión" },
    { label: "Excelencia en Cuidados Paliativos", detail: "Programas humanos de acompañamiento clínico y emocional" },
    { label: "Integración Digital del Paciente", detail: "Portal unificado para gestión, citas y resultados en tiempo real" }
  ];

  return (
    <main className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.article initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Nuestra Misión</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">
              Más que un Centro Médico, somos un Ecosistema de Cuidado.
            </h1>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8 opacity-80">
              Salud Integral nació de la necesidad de ofrecer una alternativa de alta gama en la gestión de pacientes con necesidades complejas. Nos especializamos en ser el puente entre el personal médico especializado, las aseguradoras y la tranquilidad del paciente.
            </p>
            <div className="flex bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 gap-6">
              <div className="text-4xl font-headline font-black text-primary/20">SI+</div>
              <div>
                <h2 className="font-bold text-sm mb-1 uppercase tracking-tight">Excelencia en Trayectoria</h2>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed opacity-70">Combinamos décadas de experiencia clínica de nuestros fundadores en una visión médica moderna y digital.</p>
              </div>
            </div>
          </motion.article>

          <footer className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="aspect-4/5 rounded-3xl overflow-hidden shadow-sm border border-outline-variant/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=75&w=800" 
                className="w-full h-full object-cover" 
                alt="Clinic Architecture" 
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-lg border border-outline-variant/10 max-w-[240px] hidden md:block">
              <blockquote className="text-sm font-bold text-on-surface leading-snug">"Un diagnóstico preciso es el primer paso hacia la dignidad de vida."</blockquote>
              <cite className="mt-4 text-[9px] font-black uppercase tracking-widest text-primary block not-italic">— Dirección Ejecutiva</cite>
            </div>
          </footer>
        </section>

        {/* Estadísticas */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.article
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-5 bg-primary/5 rounded-3xl p-12 border border-primary/10 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Users className="text-primary mb-12 group-hover:scale-110 transition-transform" size={48} />
              <div>
                <div className="text-5xl lg:text-7xl font-black text-on-surface font-headline mb-4 tracking-tighter group-hover:text-primary transition-colors">
                  <AnimatedCounter value={15} suffix="k+" />
                </div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-60">Consultas Especializadas Realizadas</p>
              </div>
            </motion.article>

            <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.article
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-secondary/5 rounded-3xl p-10 border border-secondary/10 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                <Activity className="text-secondary mb-8 group-hover:rotate-12 transition-transform" size={32} />
                <div className="text-4xl font-black text-on-surface font-headline mb-2 group-hover:text-secondary transition-colors">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Satisfacción Directa</p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-tertiary/5 rounded-3xl p-10 border border-tertiary/10 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                <ShieldCheck className="text-tertiary mb-8 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-black text-on-surface font-headline mb-2 group-hover:text-tertiary transition-colors">
                  <AnimatedCounter value={120} suffix="+" />
                </div>
                <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Convenios ARS Premium</p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="sm:col-span-2 bg-on-surface/5 rounded-3xl p-10 border border-outline-variant/5 flex items-center gap-8 group hover:bg-white transition-all shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/20 transition-all">
                  <HeartPulse className="text-primary animate-pulse" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black font-headline tracking-tighter uppercase group-hover:text-primary transition-colors">Gestión de Casos SI+</h3>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-black opacity-40">Monitoreo activo las 24 horas</p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-inverse-surface text-inverse-on-surface rounded-4xl mb-32 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden rounded-t-4xl lg:rounded-l-4xl lg:rounded-tr-none">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=75&w=800"
                alt="Visión Corporativa"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-on-surface/50" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                  Visión 2030
                </span>
              </div>
            </div>

            <div className="p-12 md:p-16 flex flex-col justify-center">
              <header className="flex items-center gap-3 mb-6">
                <Eye className="text-primary" size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Visión Corporativa</span>
              </header>
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-headline tracking-tighter text-white leading-tight">
                Ser el referente de excelencia médica en el Caribe.
              </h2>
              <p className="text-lg opacity-60 mb-10 font-body leading-relaxed">
                Lideramos a través de la medicina de precisión y el acompañamiento humano integral, redefiniendo el estándar de atención para pacientes crónicos y oncológicos en la región.
              </p>
              <ul className="space-y-4">
                {visionPillars.map((pillar, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-black text-white mb-1">{pillar.label}</p>
                      <p className="text-[11px] text-white/50 font-medium leading-relaxed">{pillar.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((v, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-12 rounded-3xl bg-surface-container-lowest border ${v.accent} shadow-sm text-center transition-all group`}
            >
              <div className={`w-[72px] h-[72px] ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-8 border ${v.accent} group-hover:scale-110 transition-transform duration-300`}>
                {v.icon}
              </div>
              <h3 className="text-lg font-black mb-4 font-headline tracking-tight text-on-surface">{v.title}</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-70">{v.desc}</p>
            </motion.article>
          ))}
        </section>

        {/* Excellence Standards Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-32">
          {/* Image side */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm aspect-4/3"
            >
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=75&w=800"
                alt="Instrumentos quirúrgicos de precisión"
                className="w-full h-full object-cover brightness-95"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            {/* JCI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-6 bg-white p-5 rounded-2xl shadow-xl border border-outline-variant/10 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-primary" size={22} />
              </div>
              <footer className="block">
                <p className="font-black text-on-surface text-sm leading-none mb-1">JCI</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">Accredited Excellence</p>
              </footer>
            </motion.div>
          </div>

          {/* Content side */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">El Estándar</span>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface font-headline tracking-tighter leading-tight mb-6">
              Nuestros Estándares de Excelencia e Liderazgo Internacional.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 opacity-80">
              Salud Integral opera en la intersección de los estándares globales de salud y la calidez local. Nuestros protocolos están certificados contra los referentes más rigurosos del mundo.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Protocolos Gold-Standard", desc: "Adherencia a las Metas Internacionales de Seguridad del Paciente (IPSG) en cada departamento." },
                { title: "Alianzas de Investigación Global", desc: "Colaboración con instituciones médicas de primer nivel en EE.UU. y Europa para ensayos clínicos." },
                { title: "Logística Concierge", desc: "Gestión internacional de pacientes para turismo médico y viajeros corporativos." }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-on-surface text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </section>

        {/* Values Bento Grid */}
        <section className="mt-32">
          <header className="text-center mb-16">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Los Pilares</span>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface font-headline tracking-tighter">Valores que nos Guían</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 01 Integridad */}
            <motion.article
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 shadow-sm hover:border-primary/20 transition-all"
            >
              <span className="text-4xl font-black text-on-surface/10 font-headline block mb-4">01</span>
              <h3 className="font-black text-on-surface font-headline text-xl mb-3">Integridad</h3>
              <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">Mantenemos los más altos estándares éticos en la práctica clínica y la transparencia administrativa.</p>
            </motion.article>

            {/* Patient-First (featured blue) */}
            <motion.article
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#1a4fc4] text-white rounded-4xl p-10 shadow-xl flex flex-col items-center justify-center text-center md:row-span-2"
            >
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-8">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="font-black font-headline text-3xl mb-6 leading-tight">Cultura Centrada en el Paciente</h3>
              <p className="text-white/70 text-base leading-relaxed">Cada decisión que tomamos, desde el diseño arquitectónico hasta los protocolos de laboratorio, se centra en la tranquilidad del paciente.</p>
            </motion.article>

            {/* 02 Innovación */}
            <motion.article
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 shadow-sm hover:border-primary/20 transition-all"
            >
              <span className="text-4xl font-black text-on-surface/10 font-headline block mb-4">02</span>
              <h3 className="font-black text-on-surface font-headline text-xl mb-3">Innovación</h3>
              <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">Invirtiendo en diagnósticos de vanguardia y transformación digital de la salud.</p>
            </motion.article>

            {/* 03 Excelencia */}
            <motion.article
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 shadow-sm hover:border-primary/20 transition-all"
            >
              <span className="text-4xl font-black text-on-surface/10 font-headline block mb-4">03</span>
              <h3 className="font-black text-on-surface font-headline text-xl mb-3">Excelencia</h3>
              <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">Persiguiendo calidad cero defectos en resultados clínicos y prestación de servicios.</p>
            </motion.article>

            {/* 04 Empatía */}
            <motion.article
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 shadow-sm hover:border-primary/20 transition-all"
            >
              <span className="text-4xl font-black text-on-surface/10 font-headline block mb-4">04</span>
              <h3 className="font-black text-on-surface font-headline text-xl mb-3">Empatía</h3>
              <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">Tratando a cada individuo con la compasión y calidez que merece en cada interacción.</p>
            </motion.article>
          </div>
        </section>

      </div>
    </main>
  );
}

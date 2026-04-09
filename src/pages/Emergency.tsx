import { motion } from 'framer-motion';
import { Clock, PhoneCall, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

export default function Emergency() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Urgent Header */}
        <section className="bg-rose-600 rounded-3xl p-10 md:p-16 mb-20 text-white relative overflow-hidden shadow-2xl shadow-rose-200">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-white">Centro de Urgencias 24/7</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-8 font-headline tracking-tighter leading-tight max-w-2xl">
              Atención Inmediata para Situaciones Críticas.
            </h1>
            <p className="text-lg opacity-80 mb-10 font-body max-w-xl">
              Nuestra unidad de urgencias está diseñada para responder con prioridad a pacientes de nuestros programas y al público general con tiempos de triaje optimizados.
            </p>
            <a href="tel:+18095552273" className="inline-flex items-center gap-4 bg-white text-rose-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all shadow-xl">
              <PhoneCall size={18} /> Llamar a Emergencias (809) 555-CARE
            </a>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* Triage Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Prioridad Chrono", desc: "Triaje automático preferente para pacientes inscritos en el programa SI-Chronic.", icon: <Clock /> },
            { title: "Unidad de Trauma", desc: "Estabilización inmediata para emergencias quirúrgicas y traumatismos.", icon: <ShieldCheck /> },
            { title: "Protocolo Stroke", desc: "Respuesta rápida para accidentes cerebrovasculares con equipo de neuro-diagnóstico.", icon: <Activity /> }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="text-rose-600 mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold mb-4 font-headline tracking-tight">{item.title}</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-black mb-8 font-headline tracking-tighter">Qué traer a Emergencias</h2>
            <div className="space-y-6">
              {[
                { q: "Identificación y Seguro", a: "Cédula de identidad y carnet de ARS vigente para agilizar el registro." },
                { q: "Historial de Medicación", a: "Lista de fármacos actuales (especialmente si es paciente crónico)." },
                { q: "Exámenes Recientes", a: "Si dispone de resultados externos, traerlos puede acelerar el diagnóstico." }
              ].map((faq, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{faq.q}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10 relative overflow-hidden">
            <h3 className="text-xl font-black mb-6 font-headline tracking-tight">Soporte Vital Avanzado</h3>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed font-body">Contamos con ambulancias equipadas y conexión directa con las principales unidades de cuidados intensivos del país.</p>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-primary/10">
              <div className="w-12 h-12 bg-rose-50 flex items-center justify-center rounded-xl">
                <AlertTriangle className="text-rose-600" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Ubicación Norte</p>
                <p className="text-sm font-bold text-on-surface">Pabellón de Urgencias, Nivel 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 relative">
             <div className="bg-primary p-12 text-center text-white relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
                   <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black font-headline tracking-tighter mb-2">¡Mensaje Recibido!</h2>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Referencia: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
             </div>
             
             <div className="p-12 text-center">
                <p className="text-on-surface-variant font-body leading-relaxed mb-10 text-sm">
                   Gracias <span className="text-primary font-black uppercase">{formData.name || 'Paciente'}</span>. Nuestro equipo de coordinación ha recibido su solicitud y le contactará en breve.
                </p>
                <div className="bg-surface-container-low p-6 rounded-2xl mb-10 border border-outline-variant/5">
                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-outline-variant/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Tiempo de espera</span>
                      <span className="text-xs font-bold text-primary">~15 minutos</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Departamento</span>
                      <span className="text-xs font-bold">Atención al Cliente</span>
                   </div>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-3"
                >
                   <ArrowLeft size={16} /> Volver al Portal
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Column */}
          <div className="flex flex-col">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="mb-12"
            >
               <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[9px] font-black text-primary uppercase tracking-widest">Soporte Operativo 24/7</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">
                  Coordine con nuestros <span className="text-primary">expertos.</span>
               </h1>
               <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">Estamos aquí para gestionar sus trámites con ARS Primera, programar sus analíticas en Bio-Bóveda y asegurar su ingreso a los programas crónicos.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               {[
                 { icon: <Phone size={20} />, title: "Línea Directa", detail: "(809) 555-0199", bg: "bg-surface-container-low" },
                 { icon: <Mail size={20} />, title: "Correo Electrónico", detail: "hola@saludintegral.com", bg: "bg-surface-container-low" },
                 { icon: <MapPin size={20} />, title: "Sede Central", detail: "Av. Churchill, Suites 204", bg: "bg-surface-container-low" },
                 { icon: <Clock size={20} />, title: "Horario Clínica", detail: "L-V: 8a-8p | S: 8a-12p", bg: "bg-surface-container-low" }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className={`${item.bg} p-8 rounded-3xl border border-outline-variant/10 flex flex-col items-start group hover:bg-white transition-all`}
                 >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-6 border border-outline-variant/5">
                       {item.icon}
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">{item.title}</h4>
                    <span className="text-sm font-bold text-on-surface">{item.detail}</span>
                 </motion.div>
               ))}
            </div>

            <div className="p-10 bg-inverse-surface text-inverse-on-surface rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-black font-headline mb-4 tracking-tighter">¿Atención Urgente?</h4>
                 <p className="text-sm opacity-60 mb-8 max-w-sm">Nuestro centro de respuesta rápida está disponible 24/7 para emergencias críticas fuera de horario de oficina.</p>
                 <a href="tel:8095550199" className="inline-flex items-center gap-4 bg-primary px-8 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all">
                    Llamar de Emergencia <Phone size={14} />
                 </a>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex flex-col">
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-white p-10 lg:p-14 rounded-3xl border border-outline-variant/10 shadow-sm relative"
             >
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                   <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-2">Nombre Completo</label>
                            <input 
                               type="text" 
                               placeholder="Nombre..." 
                               className="w-full px-6 py-4 bg-surface-container-low rounded-xl outline-none font-bold text-sm border border-transparent focus:border-primary/20 transition-all" 
                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                               required 
                            />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-2">Su Email</label>
                           <input type="email" placeholder="Email..." className="w-full px-6 py-4 bg-surface-container-low rounded-xl outline-none font-bold text-sm border border-transparent focus:border-primary/20 transition-all" required />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-2">Motivo</label>
                         <select className="w-full px-6 py-4 bg-surface-container-low rounded-xl outline-none font-bold text-sm appearance-none cursor-pointer border border-transparent focus:border-primary/20">
                            <option>Inscripción a Programa Crónico</option>
                            <option>Dudas sobre Analíticas</option>
                            <option>Gestión de Seguros</option>
                            <option>Otros</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-2">Su Mensaje</label>
                        <textarea placeholder="¿Cómo podemos asistirle hoy?" rows={4} className="w-full px-6 py-4 bg-surface-container-low rounded-xl outline-none font-bold text-sm border border-transparent focus:border-primary/20 transition-all resize-none" required></textarea>
                      </div>
                   </div>
                   <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-primary-container shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3">
                      Enviar Solicitud <Send size={16} />
                   </button>
                   <p className="text-[9px] text-center font-bold text-on-surface-variant/40 uppercase tracking-widest">Compromiso total con su privacidad médica.</p>
                </form>
             </motion.div>
          </div>

        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-primary" size={20} />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Nuestra Ubicación</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black font-headline tracking-tighter text-on-surface mb-8">
            Encuéntrenos en Santo Domingo.
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm" style={{ height: '480px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15140.209385947348!2d-69.99076534999999!3d18.435932249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8a03ea62ea83%3A0x948ec8938930d077!2sSalud%20Integral!5e0!3m2!1ses-419!2sdo!4v1775761415755!5m2!1ses-419!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Salud Integral en Google Maps"
              className="w-full h-full"
            />
            {/* Floating address card */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/10 max-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-black text-on-surface text-sm">Salud Integral</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary">Sede Central</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                Av. Churchill, Suites 204<br />Santo Domingo, RD
              </p>
              <a
                href="https://maps.google.com/?q=Salud+Integral+Santo+Domingo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[9px] font-black text-primary uppercase tracking-widest hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

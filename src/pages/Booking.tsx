import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ClipboardList, ShieldCheck, CheckCircle2, QrCode, Download, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: 'Consulta Especializada',
    doctor: 'Asignación Automática',
    date: '',
    time: '',
    name: '',
    phone: '',
    insurance: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const steps = [
    { id: 1, label: "Servicio", icon: <ClipboardList size={14} /> },
    { id: 2, label: "Especialista", icon: <User size={14} /> },
    { id: 3, label: "Fecha y Hora", icon: <Calendar size={14} /> },
    { id: 4, label: "Confirmación", icon: <CheckCircle2 size={14} /> }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/10 overflow-hidden"
        >
          <div className="bg-primary p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
             </div>
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
             >
                <CheckCircle2 className="text-white text-4xl" size={40} />
             </motion.div>
             <h2 className="text-3xl font-black text-white mb-2 font-headline tracking-tighter">Cita Confirmada</h2>
             <p className="text-white/70 text-sm font-medium tracking-wide">Código de Reserva: SI-{Math.floor(Math.random() * 900000 + 100000)}</p>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-2 gap-8 mb-12 border-b border-outline-variant/10 pb-12">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Paciente</span>
                <span className="text-sm font-bold text-on-surface">{formData.name || "Invitado Salud Integral"}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Servicio</span>
                <span className="text-sm font-bold text-on-surface">{formData.service}</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Fecha y Hora</span>
                <span className="text-sm font-bold text-on-surface">{formData.date || 'Pendiente'} • {formData.time || '09:00 AM'}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Médico</span>
                <span className="text-sm font-bold text-on-surface">{formData.doctor}</span>
              </div>
            </div>

            <div className="flex items-center gap-10">
               <div className="w-24 h-24 bg-surface-container-high rounded-2xl flex items-center justify-center border border-outline-variant/10 shrink-0">
                  <QrCode className="text-primary/40" size={48} />
               </div>
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest mb-2">Instrucciones</h4>
                 <p className="text-[11px] text-on-surface-variant leading-relaxed">Presente este código en la recepción 15 minutos antes de su cita. Si es beneficiario de ARS Primera, su autorización ya ha sido procesada.</p>
               </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-surface-container-high px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest hover:bg-surface-container-highest transition-all">
                <Download size={16} /> Descargar Ticket
              </button>
              <Link to="/" className="flex-1 bg-primary text-on-primary px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all">
                Finalizar
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-40 pb-24 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-xs font-black text-primary uppercase tracking-widest">Reserva Premium</span>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-4 font-headline tracking-tighter">Agenda tu Cita.</h1>
          <p className="text-on-surface-variant font-body mb-12">Complete los pasos para asegurar su espacio en nuestro centro médico de especialidades.</p>
          
          <div className="flex justify-between items-center max-w-lg mx-auto relative mb-20 px-4">
             <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/20 -translate-y-1/2 z-0"></div>
             {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                   <motion.div 
                     animate={{ 
                        backgroundColor: step >= s.id ? 'var(--color-primary)' : 'var(--color-surface-container-highest)',
                        color: step >= s.id ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)'
                     }}
                     className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg border-2 border-background"
                   >
                     {step > s.id ? <CheckCircle2 size={16} /> : s.icon}
                   </motion.div>
                   <span className={`text-[9px] font-black uppercase tracking-tighter ${step >= s.id ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                      {s.label}
                   </span>
                </div>
             ))}
          </div>
        </div>

        <motion.form 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface-container-lowest p-8 md:p-16 rounded-3xl border border-outline-variant/5 shadow-2xl shadow-sm"
          onSubmit={handleSubmit}
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="st1" className="space-y-12">
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Seleccionar Especialidad o Programa</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Cuidados Crónicos', 'Cuidados Paliativos', 'Laboratorio', 'Consulta General'].map((opt) => (
                      <button 
                        key={opt}
                        type="button"
                        onClick={() => setFormData({...formData, service: opt})}
                        className={`p-6 rounded-3xl border-2 text-left transition-all ${formData.service === opt ? 'border-primary bg-primary/5' : 'border-outline-variant/10 hover:border-primary/40'}`}
                      >
                         <h4 className="text-sm font-black mb-1">{opt}</h4>
                         <p className="text-[10px] opacity-60 font-medium">Disponibilidad inmediata</p>
                      </button>
                    ))}
                  </div>
                </div>
                <button type="button" onClick={nextStep} className="w-full bg-primary text-on-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 group">
                  Siguiente paso <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="st2" className="space-y-12">
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Seleccionar Médico Especialista</label>
                  <div className="grid grid-cols-1 gap-4">
                    {['Asignación Automática', 'Dra. Elena Martínez (Gestión Crónica)', 'Dr. Roberto Santos (Paliativos)'].map((opt) => (
                      <button 
                        key={opt}
                        type="button"
                        onClick={() => setFormData({...formData, doctor: opt})}
                        className={`p-6 rounded-3xl border-2 text-left flex items-center justify-between transition-all ${formData.doctor === opt ? 'border-primary bg-primary/5' : 'border-outline-variant/10 hover:border-primary/40'}`}
                      >
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black uppercase text-[10px]">{opt[0]}</div>
                            <span className="text-sm font-bold">{opt}</span>
                         </div>
                         {formData.doctor === opt && <CheckCircle2 size={20} className="text-primary" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                   <button type="button" onClick={prevStep} className="flex-1 bg-surface-container-high py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4"><ArrowLeft size={18} /> Atrás</button>
                   <button type="button" onClick={nextStep} className="flex-2 bg-primary text-on-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4">Siguiente paso <ArrowRight size={18} /></button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="st3" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Elegir Fecha</label>
                    <input 
                      type="date" 
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full p-6 bg-surface-container-low rounded-3xl outline-none border border-outline-variant/10 focus:border-primary transition-all font-bold text-sm" 
                    />
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Hora Disponible</label>
                    <div className="grid grid-cols-2 gap-3">
                       {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'].map(t => (
                         <button 
                            key={t}
                            type="button"
                            onClick={() => setFormData({...formData, time: t})}
                            className={`p-4 rounded-2xl text-[10px] font-black uppercase tracking-wider outline outline-px outline-outline-variant/10 transition-all ${formData.time === t ? 'bg-primary text-on-primary outline-primary' : 'hover:outline-primary/40'}`}
                         >
                            {t}
                         </button>
                       ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                   <button type="button" onClick={prevStep} className="flex-1 bg-surface-container-high py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4"><ArrowLeft size={18} /> Atrás</button>
                   <button type="button" onClick={nextStep} className="flex-2 bg-primary text-on-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 group">Continuar <ArrowRight size={18} /></button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="st4" className="space-y-12">
                <div className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Nombre Completo</label>
                         <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Escriba su nombre..." className="w-full p-6 bg-surface-container-low rounded-3xl border-none outline-none font-bold text-sm focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Teléfono</label>
                         <input type="tel" onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+1 (809)..." className="w-full p-6 bg-surface-container-low rounded-3xl border-none outline-none font-bold text-sm focus:ring-2 focus:ring-primary/20" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">ARS / Seguro Médico</label>
                      <input type="text" onChange={(e) => setFormData({...formData, insurance: e.target.value})} placeholder="ARS Primera, Humano, etc." className="w-full p-6 bg-surface-container-low rounded-3xl border-none outline-none font-bold text-sm focus:ring-2 focus:ring-primary/20" />
                   </div>
                </div>
                
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mb-8 flex items-start gap-4">
                   <ShieldCheck className="text-primary shrink-0" size={24} />
                   <p className="text-[11px] font-medium leading-relaxed opacity-70">
                      Al confirmar, sus datos serán procesados bajo la ley 172-13. Si es paciente de ARS Primera, su cobertura será pre-autorizada automáticamente para su evaluación.
                   </p>
                </div>

                <div className="flex gap-4">
                   <button type="button" onClick={prevStep} className="flex-1 bg-surface-container-high py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4"><ArrowLeft size={18} /> Reviso</button>
                   <button type="submit" className="flex-2 bg-primary text-on-primary py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl shadow-primary/20">Confirmar Reserva</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </div>
  );
}

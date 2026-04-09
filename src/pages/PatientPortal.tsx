import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User, Settings, LogOut, Calendar, FileText, Activity,
  Clock, Bell, Search, Download, Stethoscope, Heart,
  Thermometer, Wind, MessageSquare, BookOpen, ChevronRight,
  CheckCircle2, AlertCircle, Plus, Phone, Mail, Edit3, Shield
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────── */
const stats = [
  { label: "Ritmo Cardíaco", value: "72", unit: "bpm", icon: <Heart className="text-red-500" size={20} />, trend: "Estable", color: "bg-red-500/10" },
  { label: "Glucosa", value: "95", unit: "mg/dL", icon: <Activity className="text-orange-500" size={20} />, trend: "-2%", color: "bg-orange-500/10" },
  { label: "Oxígeno", value: "98", unit: "%", icon: <Wind className="text-blue-500" size={20} />, trend: "Óptimo", color: "bg-blue-500/10" },
  { label: "Temperatura", value: "36.6", unit: "°C", icon: <Thermometer className="text-yellow-600" size={20} />, trend: "Normal", color: "bg-yellow-500/10" }
];

const allResults = [
  { title: "Hemograma Completo", date: "08/04/2026", status: "Listo", doctor: "Laboratorio Central", type: "Laboratorio" },
  { title: "Perfil Lipídico", date: "02/04/2026", status: "Listo", doctor: "Dra. Elena Martínez", type: "Laboratorio" },
  { title: "Rayos X Tórax", date: "28/03/2026", status: "Archivado", doctor: "Dr. Roberto Santos", type: "Imagen" },
  { title: "Ecocardiograma", date: "15/03/2026", status: "Archivado", doctor: "Dra. Lucía Valerio", type: "Imagen" },
  { title: "Glucosa en Ayunas", date: "01/03/2026", status: "Archivado", doctor: "Laboratorio Central", type: "Laboratorio" },
  { title: "TSH — Función Tiroidea", date: "14/02/2026", status: "Archivado", doctor: "Dra. Sofía Reyes", type: "Laboratorio" },
];

const appointments = [
  { title: "Consulta — Cuidados Crónicos", doctor: "Dra. Elena Martínez", date: "15 Abr, 2026", time: "10:30 AM", status: "Confirmada", color: "bg-primary/10 border-primary/20 text-primary" },
  { title: "Control Cardiológico", doctor: "Dra. Lucía Valerio", date: "22 Abr, 2026", time: "09:00 AM", status: "Pendiente", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-600" },
  { title: "Revisión Psicológica", doctor: "Dr. Juan Diego", date: "30 Abr, 2026", time: "02:00 PM", status: "Pendiente", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-600" },
  { title: "Hemograma Rutinario", doctor: "Laboratorio Central", date: "05 May, 2026", time: "08:00 AM", status: "Programada", color: "bg-sky-500/10 border-sky-500/20 text-sky-600" },
];

const pastAppointments = [
  { title: "Consulta General", doctor: "Dr. Marcos Paredes", date: "01 Abr, 2026", time: "11:00 AM" },
  { title: "Control Lipídico", doctor: "Dra. Sofía Reyes", date: "18 Mar, 2026", time: "03:00 PM" },
];

const messages = [
  { from: "Dra. Elena Martínez", subject: "Resultados de su hemograma", preview: "Sus valores han mejorado considerablemente. Continue con la dieta baja en sodio...", time: "Hace 2h", unread: true },
  { from: "Centro Médico SI+", subject: "Recordatorio de cita — 15 Abr", preview: "Le recordamos que tiene una cita programada el 15 de abril a las 10:30 AM...", time: "Hace 1d", unread: true },
  { from: "Dr. Juan Diego", subject: "Recursos de apoyo emocional", preview: "Le comparto algunos ejercicios de mindfulness que discutimos en la sesión...", time: "Hace 3d", unread: false },
  { from: "Lab Central", subject: "Perfil lipídico disponible", preview: "Sus resultados del perfil lipídico ya están disponibles para descarga...", time: "Hace 5d", unread: false },
];

const history = [
  { date: "Mar 2026", event: "Diagnóstico Hipertensión Arterial Leve", doctor: "Dr. Marcos Paredes", type: "diagnosis" },
  { date: "Ene 2026", event: "Inicio Programa Cuidados Crónicos", doctor: "Dra. Elena Martínez", type: "program" },
  { date: "Nov 2025", event: "Cirugía Ambulatoria — Biopsia", doctor: "Dra. Sofía Reyes", type: "procedure" },
  { date: "Sep 2025", event: "Primera Consulta Cardiológica", doctor: "Dra. Lucía Valerio", type: "consult" },
  { date: "Jun 2025", event: "Evaluación Psicológica Inicial", doctor: "Dr. Juan Diego", type: "consult" },
];

/* ─── Sub-views ──────────────────────────────────────────── */
function DashboardView() {
  return (
    <div className="space-y-10">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-surface-container-lowest p-6 rounded-4xl border border-outline-variant/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center`}>{s.icon}</div>
              <span className="text-[9px] font-black text-primary bg-primary/10 px-2 py-1 rounded-lg uppercase">{s.trend}</span>
            </div>
            <div className="text-2xl font-black text-on-surface">{s.value}<span className="text-xs font-bold opacity-40 ml-1">{s.unit}</span></div>
            <div className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Results */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-on-surface font-headline">Últimos Resultados</h3>
            <button className="text-[9px] font-black text-primary uppercase tracking-widest hover:underline">Ver Todo</button>
          </div>
          <div className="space-y-3">
            {allResults.slice(0, 3).map((r, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:border hover:border-primary/20 transition-all border border-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-outline-variant/10 text-primary">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{r.title}</h4>
                    <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-50">{r.doctor} · {r.date}</p>
                  </div>
                </div>
                <button className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Download size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Next Appointment */}
        <div className="space-y-6">
          <div className="bg-primary/5 p-8 rounded-4xl border border-primary/10">
            <h4 className="font-black text-on-surface font-headline mb-2">Próxima Cita</h4>
            <p className="text-xs text-on-surface-variant mb-6 opacity-70">Cuidados Crónicos — Dra. Elena Martínez</p>
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-outline-variant/10">
                <Calendar className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">15 Abr</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-outline-variant/10">
                <Clock className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">10:30 AM</span>
              </div>
            </div>
            <Link to="/booking" className="block w-full text-center bg-primary text-on-primary py-3 rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              Re-agendar
            </Link>
          </div>

          <div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
            <div className="relative z-10">
              <h4 className="font-black font-headline mb-2">Resumen de Salud</h4>
              <p className="text-[10px] opacity-60 mb-6">Estado General: <span className="text-primary font-black uppercase">Óptimo</span></p>
              {[{ label: "Cumplimiento", val: 85 }, { label: "Actividad Física", val: 60 }].map((bar, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">
                    <span>{bar.label}</span><span>{bar.val}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div style={{ width: `${bar.val}%` }} className="h-full bg-primary rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppointmentsView() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black font-headline text-on-surface">Mis Citas</h2>
        <Link to="/booking" className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
          <Plus size={14} /> Agendar Cita
        </Link>
      </div>

      <div>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Próximas</h3>
        <div className="space-y-4">
          {appointments.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className={`flex items-center justify-between p-6 rounded-2xl border ${a.color.split(' ').filter(c => c.startsWith('bg-') || c.startsWith('border-')).join(' ')} bg-opacity-10`}>
              <div className="flex items-center gap-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${a.color.split(' ').filter(c => c.startsWith('bg-')).join(' ')}`}>
                  <Calendar size={20} className={a.color.split(' ').filter(c => c.startsWith('text-')).join(' ')} />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">{a.title}</h4>
                  <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{a.doctor}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-on-surface">{a.date}</p>
                <p className="text-[9px] font-bold text-on-surface-variant opacity-60">{a.time}</p>
                <span className={`text-[8px] font-black uppercase tracking-widest ${a.color.split(' ').filter(c => c.startsWith('text-')).join(' ')}`}>{a.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-4">Historial de Citas</h3>
        <div className="space-y-3">
          {pastAppointments.map((a, i) => (
            <div key={i} className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl border border-outline-variant/5 opacity-60">
              <div>
                <h4 className="font-bold text-on-surface text-sm">{a.title}</h4>
                <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">{a.doctor}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-on-surface">{a.date}</p>
                <p className="text-[9px] text-on-surface-variant">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultsView() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black font-headline text-on-surface">Mis Resultados</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/30" size={15} />
          <input placeholder="Buscar resultado..." className="bg-surface-container-low border border-outline-variant/10 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-primary transition-all w-56" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allResults.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 group hover:border-primary/20 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/10">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-sm mb-1">{r.title}</h4>
                <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-50">{r.type} · {r.date}</p>
                <p className="text-[9px] font-bold text-on-surface-variant opacity-40">{r.doctor}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${r.status === 'Listo' ? 'bg-primary/10 text-primary' : 'bg-surface-container-low text-on-surface-variant/50'}`}>
                {r.status}
              </span>
              {r.status === 'Listo' && (
                <button className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Download size={15} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black font-headline text-on-surface">Perfil Médico</h2>
        <button className="flex items-center gap-2 border border-outline-variant/20 text-on-surface-variant px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
          <Edit3 size={14} /> Editar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10">
            <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant/50 mb-6">Datos Personales</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Nombre Completo", value: "Juan Pérez García" },
                { label: "Cédula", value: "001-0000001-1" },
                { label: "Fecha de Nacimiento", value: "12 Mar, 1980" },
                { label: "Grupo Sanguíneo", value: "O+" },
                { label: "Teléfono", value: "+1 (809) 555-0000" },
                { label: "Correo", value: "juan.perez@email.com" },
              ].map((field, i) => (
                <div key={i}>
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-50 mb-1">{field.label}</p>
                  <p className="text-sm font-bold text-on-surface">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10">
            <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant/50 mb-6">Cobertura de Salud</h3>
            <div className="flex items-center gap-5 p-5 bg-primary/5 rounded-2xl border border-primary/10 mb-4">
              <Shield className="text-primary" size={28} />
              <div>
                <p className="font-black text-on-surface">ARS Primera</p>
                <p className="text-[10px] text-on-surface-variant font-bold opacity-60">Plan Salud Plus — Crónico Familiar</p>
                <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-1">Activa hasta Dic 2026</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-on-surface-variant/70 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" size={14} /> Consultas Cubiertas</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" size={14} /> Laboratorios</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" size={14} /> Hospitalización</div>
              <div className="flex items-center gap-2"><AlertCircle className="text-yellow-500" size={14} /> Medicamentos: 80%</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10">
            <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant/50 mb-6">Condiciones & Alergias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-3">Diagnósticos Activos</p>
                {["Hipertensión Arterial (Leve)", "Dislipidemia"].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <span className="text-sm text-on-surface font-medium">{c}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-3">Alergias Conocidas</p>
                {["Penicilina (Severa)", "Mariscos (Moderada)"].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    <span className="text-sm text-on-surface font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <User size={40} />
            </div>
            <h4 className="font-black font-headline text-on-surface text-lg">Juan Pérez</h4>
            <p className="text-[9px] font-black uppercase tracking-widest text-primary mt-1">Paciente Crónico — ARS Primera</p>
            <div className="mt-6 w-full flex flex-col gap-3">
              <button className="flex items-center gap-3 px-5 py-3 bg-surface-container-low rounded-xl text-sm text-on-surface-variant font-bold hover:text-primary transition-colors">
                <Phone size={15} /> +1 (809) 555-0000
              </button>
              <button className="flex items-center gap-3 px-5 py-3 bg-surface-container-low rounded-xl text-sm text-on-surface-variant font-bold hover:text-primary transition-colors">
                <Mail size={15} /> juan.perez@email.com
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-4xl border border-outline-variant/10">
            <h4 className="font-black text-on-surface mb-4">Médico Tratante</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Stethoscope size={20} />
              </div>
              <div>
                <p className="font-black text-on-surface text-sm">Dra. Elena Martínez</p>
                <p className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant opacity-60">Cuidados Crónicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessagesView() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black font-headline text-on-surface">Mensajes</h2>
      <div className="bg-surface-container-lowest rounded-4xl border border-outline-variant/10 overflow-hidden">
        {messages.map((m, i) => (
          <div key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`flex items-start gap-5 p-6 border-b border-outline-variant/5 cursor-pointer transition-colors ${m.unread ? 'bg-primary/3' : ''} hover:bg-surface-container-low`}>
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <User size={20} />
              </div>
              {m.unread && <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${m.unread ? 'font-black' : 'font-bold'} text-on-surface`}>{m.from}</p>
                <span className="text-[9px] text-on-surface-variant opacity-50 font-bold shrink-0">{m.time}</span>
              </div>
              <p className={`text-xs ${m.unread ? 'font-bold text-on-surface' : 'text-on-surface-variant/70'} mb-1`}>{m.subject}</p>
              <p className="text-[10px] text-on-surface-variant opacity-50 truncate">{m.preview}</p>
              {selected === i && (
                <div className="mt-4 pt-4 border-t border-outline-variant/10">
                  <p className="text-sm text-on-surface-variant leading-relaxed">{m.preview}</p>
                  <button className="mt-3 text-[9px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-1">
                    Responder <ChevronRight size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoryView() {
  const typeColors: Record<string, string> = {
    diagnosis: "bg-red-500/10 text-red-500 border-red-500/20",
    program: "bg-primary/10 text-primary border-primary/20",
    procedure: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    consult: "bg-sky-500/10 text-sky-500 border-sky-500/20",
  };
  const typeLabels: Record<string, string> = {
    diagnosis: "Diagnóstico", program: "Programa",
    procedure: "Procedimiento", consult: "Consulta"
  };
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-black font-headline text-on-surface">Historial Médico</h2>
      <div className="relative">
        <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-outline-variant/10" />
        <div className="space-y-6">
          {history.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
              className="flex items-start gap-6 pl-12 relative">
              <div className="absolute left-0 w-11 h-11 bg-surface-container-lowest rounded-full border-2 border-outline-variant/10 flex items-center justify-center text-primary shrink-0">
                <BookOpen size={16} />
              </div>
              <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all">
                <div className="flex items-start justify-between mb-2 gap-4">
                  <h4 className="font-bold text-on-surface text-sm leading-tight">{h.event}</h4>
                  <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest border shrink-0 ${typeColors[h.type]}`}>
                    {typeLabels[h.type]}
                  </span>
                </div>
                <p className="text-[9px] font-bold text-on-surface-variant opacity-50 uppercase tracking-widest">{h.doctor}</p>
                <p className="text-[9px] font-black text-on-surface-variant opacity-40 mt-1">{h.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Portal ───────────────────────────────────────── */
export default function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Activity size={18} /> },
    { id: 'citas', label: 'Mis Citas', icon: <Calendar size={18} /> },
    { id: 'resultados', label: 'Resultados', icon: <FileText size={18} /> },
    { id: 'mensajes', label: 'Mensajes', icon: <MessageSquare size={18} />, badge: 2 },
    { id: 'historial', label: 'Historial', icon: <BookOpen size={18} /> },
    { id: 'perfil', label: 'Perfil Médico', icon: <User size={18} /> },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-surface-container-lowest p-10 lg:p-14 rounded-3xl shadow-2xl border border-outline-variant/10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <User className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl font-black text-on-surface mb-2 font-headline tracking-tighter text-center">Acceso Pacientes</h2>
          <p className="text-on-surface-variant mb-10 text-sm font-body text-center">Ingrese sus credenciales para gestionar su salud.</p>

          <div className="space-y-4 mb-8">
            <input type="text" placeholder="Cédula / ID" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold text-sm" />
            <input type="password" placeholder="Contraseña" className="w-full px-6 py-4 bg-surface-container-low rounded-2xl outline-none border border-transparent focus:border-primary/20 transition-all font-bold text-sm" />
          </div>

          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-primary text-on-primary py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
          >
            Iniciar Sesión
          </button>

          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <p className="text-xs text-on-surface-variant font-bold text-center">¿Eres paciente nuevo?</p>
            <Link to="/contact" className="text-xs font-black text-primary uppercase tracking-widest mt-2 block text-center hover:underline">Solicitar Acceso</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const views: Record<string, JSX.Element> = {
    dashboard: <DashboardView />,
    citas: <AppointmentsView />,
    resultados: <ResultsView />,
    mensajes: <MessagesView />,
    historial: <HistoryView />,
    perfil: <ProfileView />,
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex">
      {/* Sidebar */}
      <aside className="w-72 bg-surface-container-lowest border-r border-outline-variant/10 hidden lg:flex flex-col p-8">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white"><Stethoscope size={20} /></div>
            <span className="font-headline font-black text-lg tracking-tighter">Portal<span className="text-primary">SI</span></span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === item.id ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
            >
              <span className="flex items-center gap-3">{item.icon} {item.label}</span>
              {item.badge && activeTab !== item.id && (
                <span className="w-5 h-5 bg-primary text-on-primary rounded-full text-[9px] flex items-center justify-center font-black">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-outline-variant/10 space-y-1">
          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low">
            <Settings size={18} /> Ajustes
          </button>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={18} /> Salir
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-surface-container-low/80 backdrop-blur-xl border-b border-outline-variant/5 px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-black font-headline tracking-tight text-on-surface">Hola, Juan Pérez</h1>
            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Paciente de Cuidados Crónicos · ARS Primera</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
              <input type="text" placeholder="Buscar..." className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary/20 w-52" />
            </div>
            <button className="relative p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10 text-on-surface-variant">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        {/* Tab content */}
        <div className="p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {views[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}


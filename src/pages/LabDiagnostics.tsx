import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Microscope, FileText, Zap, FlaskConical } from 'lucide-react';

export default function LabDiagnostics() {
  const labServices = [
    { name: "Hematología Completa", time: "2-4 horas" },
    { name: "Química Clínica", time: "4-6 horas" },
    { name: "Perfil de Lípidos", time: "6 horas" },
    { name: "Pruebas de Función Renal", time: "4 horas" },
    { name: "Diagnóstico Inmunológico", time: "24-48 horas" },
    { name: "Citología y Biopsias", time: "3-5 días" }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-8 border border-emerald-500/5"
          >
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Laboratorio de Alta Precisión</span>
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-on-surface mb-6 font-headline tracking-tighter leading-tight max-w-4xl mx-auto">
            Diagnósticos Rápidos y Confiables para su Bienestar.
          </h1>
          <p className="text-lg text-on-surface-variant mb-12 leading-relaxed font-body max-w-2xl mx-auto">
            Nuestra unidad de analíticas clínicas procesa más de 500 tipos de pruebas con tecnología automatizada para garantizar resultados exactos en tiempo récord.
          </p>
          <Link to="/booking" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-container shadow-xl transition-all">
            Agendar Analítica
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Resultados en Línea", desc: "Acceso inmediato a sus analíticas a través de nuestro portal seguro.", icon: <Zap /> },
            { title: "Bio-Bóveda", desc: "Almacenamiento seguro de muestras especiales para seguimiento crónico.", icon: <Microscope /> },
            { title: "Alta Tecnología", desc: "Equipos automatizados de última generación para reducir errores humanos.", icon: <FlaskConical /> },
            { title: "Reportes Detallados", desc: "Gráficos evolutivos para pacientes en programas de monitoreo.", icon: <FileText /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover-lift"
            >
              <div className="text-emerald-500 mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold mb-3 font-headline tracking-tight">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="bg-surface-container-lowest p-10 md:p-12 rounded-3xl border border-outline-variant/10 shadow-xl">
            <h2 className="text-2xl font-black mb-8 font-headline tracking-tighter">Analíticas Disponibles</h2>
            <div className="space-y-4">
              {labServices.map((service, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-outline-variant/10 last:border-0 group">
                  <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{service.name}</span>
                  <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded-full">{service.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black mb-6 font-headline tracking-tighter">Preparación para sus Pruebas</h2>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6">Algunas analíticas requieren ayuno de 8 a 12 horas. Consulta los requisitos específicos llamando a nuestro centro de atención.</p>
              <div className="flex bg-primary/5 p-6 rounded-3xl border border-primary/10 gap-5 items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">info</span>
                </div>
                <p className="text-xs font-medium text-on-surface-variant">Pruebas urgentes de glucosa y perfil químico no requieren cita previa en horario de 7 AM a 10 AM.</p>
              </div>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-sm">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMU1J-M_kON5g45N-y1U891s_R3_dCH1hA8L20531Vz8F9Ird9uE5v_sX1x8hR5GqXfRzt6O0Q_8-f4uXv5Qj72a4-U8Pz86H_Nl4N_X-R54V76r8Rk7e_l8g4Z_D-2C_K_w0G8r3W60V64w3V98sW75Y6j2j3u0o3-7I51E6kL4u4v2j2N7G1R1o5A9V3-3L1" alt="Laboratory Advanced Tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

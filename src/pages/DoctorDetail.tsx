import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Award, ArrowLeft, Mail, Phone, HeartPulse, Brain, Thermometer, Baby } from 'lucide-react';

const doctors = [
  { 
    id: '1', 
    name: "Dra. Elena Martínez", 
    specialty: "Gestión de Cuidados Crónicos", 
    education: "Harvard Medical School", 
    bio: "La Dra. Martínez es pionera en la integración de protocolos de monitoreo remoto para pacientes con condiciones complejas. Con más de 15 años de experiencia, lidera nuestra unidad de continuidad clínica.",
    achievements: ["Premio Excelencia Médica 2022", "Publicación en New England Journal of Medicine", "Certificación en IA Médica"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=95&w=1200",
    icon: <HeartPulse size={20} />
  },
  { 
    id: '2', 
    name: "Dr. Roberto Santos", 
    specialty: "Unidad de Cuidados Paliativos", 
    education: "Universidad de Navarra", 
    bio: "Especialista en medicina del dolor y soporte oncológico. El Dr. Santos se enfoca en la dignidad del paciente a través de cuidados paliativos que integran bienestar emocional y clínico.",
    achievements: ["Master en Cuidados Paliativos", "Director Asociado de Ética Clínica", "Autor de 'Dignidad al final de la vida'"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=95&w=1200",
    icon: <Stethoscope size={20} />
  },
  { 
    id: '3', 
    name: "Dra. Lucía Valerio", 
    specialty: "Cardiología Diagnóstica", 
    education: "Instituto de Cardiología de Madrid", 
    bio: "Experta en imagen cardiovascular avanzada y prevención de enfermedades coronarias. Lidera el programa de cardiología preventiva 'Corazón Sano'.",
    achievements: ["Investigadora Principal en Arritmias", "Miembro de la Sociedad Dominicana de Cardiología", "Certificación en Ecocardiografía 4D"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=95&w=1200",
    icon: <HeartPulse size={20} />
  },
  { 
    id: '4', 
    name: "Lic. Ana Beltrán", 
    specialty: "Enfermería Intensivista", 
    education: "Johns Hopkins Hospital", 
    bio: "Especialista en el manejo de pacientes críticos y soporte vital avanzado. La Lic. Beltrán coordina los protocolos de seguridad del paciente en nuestra unidad de cuidados intensivos.",
    achievements: ["Certificación CCRN", "Líder de Seguridad del Paciente 2023", "Especialista en Soporte Extracorpóreo"],
    image: "https://images.unsplash.com/photo-1590611357128-6a319458813e?auto=format&fit=crop&q=95&w=1200",
    icon: <Thermometer size={20} />
  },
  { 
    id: '5', 
    name: "Dr. Juan Diego", 
    specialty: "Psicología Clínica", 
    education: "Universidad de Chile", 
    bio: "Dedicado al soporte emocional de pacientes con diagnósticos crónicos. El Dr. Diego utiliza terapias cognitivo-conductuales para mejorar la resiliencia y calidad de vida del paciente y su familia.",
    achievements: ["PHD en Psicología de la Salud", "Miembro de la APA", "Especialista en Duelo y trauma"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=95&w=1200",
    icon: <Brain size={20} />
  },
  { 
    id: '6', 
    name: "Dra. Sofía Reyes", 
    specialty: "Medicina Interna", 
    education: "Mayo Clinic", 
    bio: "La Dra. Reyes se especializa en el diagnóstico y tratamiento de enfermedades complejas y multimorbilidad. Su enfoque es la medicina integral basada en la prevención activa.",
    achievements: ["Board Certified in Internal Medicine", "Premio Humanismo en Medicina", "Investigadora en Sepsis"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=95&w=1200",
    icon: <Stethoscope size={20} />
  },
  { 
    id: '7', 
    name: "Dr. Marcos Paredes", 
    specialty: "Medicina General", 
    education: "UASD", 
    bio: "Atención primaria con enfoque en la detección temprana y seguimiento familiar. El Dr. Paredes es el primer punto de contacto para una gestión de salud eficiente y personalizada.",
    achievements: ["Líder de Medicina Comunitaria", "Certificación en Salud Pública", "Experto en Medicina Familiar"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=95&w=1200",
    icon: <Stethoscope size={20} />
  },
  { 
    id: '8', 
    name: "Dra. Karla Luna", 
    specialty: "Ginecología y Obstetricia", 
    education: "UNIBE", 
    bio: "Especialista en salud integral de la mujer y medicina materno-fetal. La Dra. Luna ofrece un acompañamiento cercano y tecnológico en todas las etapas de la vida reproductiva.",
    achievements: ["Especialista en Cirugía Laparoscópica", "Miembro de FIGO", "Certificación en Ultrasonido Nivel III"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=95&w=1200",
    icon: <Baby size={20} />
  },
  { 
    id: '9', 
    name: "Dr. Luis Mendoza", 
    specialty: "Ortopedia Reconstructiva", 
    education: "PUCMM", 
    bio: "Experto en cirugía de reemplazo articular y medicina deportiva. El Dr. Mendoza utiliza técnicas mínimamente invasivas para una recuperación acelerada de la movilidad.",
    achievements: ["Fellowship en Reemplazos Articulares", "Cirujano de Élite - AO Foundation", "Autor de 'Movilidad en el Atleta Crónico'"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=95&w=1200",
    icon: <Stethoscope size={20} />
  }
];

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return <div className="pt-32 text-center h-screen font-headline font-black uppercase tracking-widest text-on-surface-variant flex items-center justify-center">Especialista no encontrado.</div>;
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/staff" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12">
          <ArrowLeft size={16} /> Volver al Equipo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-4">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 mb-8 aspect-3/4"
            >
               <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Mail size={20} /></div>
                 <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest opacity-40">Canal Directo</span>
                    <span className="text-[11px] font-bold break-all">{doctor.name.toLowerCase().replace(' ', '.')}.dr@saludintegral.do</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Phone size={20} /></div>
                 <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest opacity-40">Extensión Concierge</span>
                    <span className="text-sm font-bold">+1 (809) 555-500{doctor.id}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Biography & Achievements */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6 bg-primary/5 self-start px-4 py-2 rounded-full w-fit">
                <div className="text-primary">{doctor.icon}</div>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{doctor.specialty}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-tight">{doctor.name}</h1>
              
              <div className="space-y-12">
                <section>
                   <h3 className="text-sm font-black uppercase tracking-[0.3em] text-on-surface/40 mb-6">Trayectoria Profesional</h3>
                   <p className="text-xl text-on-surface-variant leading-relaxed font-body opacity-90">
                    {doctor.bio}
                   </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <section>
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-on-surface/40 mb-6 flex items-center gap-3">
                        <GraduationCap size={16} /> Formación Académica
                      </h3>
                      <p className="text-on-surface text-lg font-bold font-headline">{doctor.education}</p>
                   </section>
                   <section>
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-on-surface/40 mb-6 flex items-center gap-3">
                        <Award size={16} /> Especialidad Primaria
                      </h3>
                      <p className="text-on-surface text-lg font-bold font-headline">{doctor.specialty}</p>
                   </section>
                </div>

                <section className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
                   <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8">Credenciales y Logros</h3>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {doctor.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-4 text-xs font-bold text-on-surface-variant">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></div> {ach}
                        </li>
                      ))}
                   </ul>
                </section>

                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                   <Link to="/booking" className="bg-primary text-on-primary px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-container transition-all shadow-2xl shadow-primary/20 text-center">
                     Agendar con Especialista
                   </Link>
                   <button className="bg-on-surface text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all text-center">
                      Descargar CV Académico
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

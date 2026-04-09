import { motion } from 'framer-motion';

export default function Terms() {
  const sections = [
    { title: "1. Aceptación de Términos", content: "Al acceder a este portal, usted acepta cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables en la República Dominicana." },
    { title: "2. Uso de Servicios", content: "Los servicios médicos y de laboratorio están sujetos a la disponibilidad y a la validación de su seguro médico (ARS)." },
    { title: "3. Responsabilidad", content: "Salud Integral no se responsabiliza por el mal uso de la información médica proporcionada a través del portal por parte del paciente." },
    { title: "4. Cancelaciones", content: "Las citas deben cancelarse con al menos 24 horas de antelación para garantizar la disponibilidad a otros pacientes especiales." }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-on-surface mb-12 font-headline tracking-tighter">Términos de Servicio</h1>
        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-lg font-bold mb-4 font-headline tracking-tight">{s.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">{s.content}</p>
            </motion.section>
          ))}
        </div>
        <div className="mt-20 pt-10 border-t border-outline-variant/10 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
          Última actualización: Abril 2026
        </div>
      </div>
    </div>
  );
}

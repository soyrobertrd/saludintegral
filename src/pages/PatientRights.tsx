import { motion } from 'framer-motion';
import { Scale, HeartHandshake, BookOpen, UserCheck } from 'lucide-react';

export default function PatientRights() {
  const rights = [
    { title: "Trato Digno", desc: "Usted tiene derecho a ser tratado con respeto, cortesía y dignidad por todo nuestro personal.", icon: <HeartHandshake /> },
    { title: "Información Clara", desc: "Derecho a recibir información comprensible sobre su diagnóstico, tratamiento y pronóstico.", icon: <BookOpen /> },
    { title: "Consentimiento Informado", desc: "Usted decide sobre su tratamiento una vez que haya comprendido los riesgos y beneficios.", icon: <UserCheck /> },
    { title: "Igualdad", desc: "Atención sin discriminación por raza, religión, género o condición socioeconómica.", icon: <Scale /> }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <h1 className="text-3xl font-black text-on-surface mb-6 font-headline tracking-tighter">Derechos y Deberes del Paciente</h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed">
            Nuestro compromiso es garantizar que cada interacción en Salud Integral se base en el respeto mutuo y la transparencia.
          </p>
        </header>

        <div className="space-y-8 mb-20">
          {rights.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 p-10 bg-surface-container-low rounded-3xl border border-outline-variant/10 shadow-sm"
            >
              <div className="text-primary w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                {r.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-headline">{r.title}</h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
          <h2 className="text-xl font-black mb-6 font-headline tracking-tighter">Sus Deberes</h2>
          <ul className="space-y-4 text-sm text-on-surface-variant font-body">
            <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Proporcionar información veraz sobre su historial médico.</li>
            <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Tratar con respeto a los demás pacientes y al staff médico.</li>
            <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Cumplir con las normas de seguridad y convivencia del centro.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

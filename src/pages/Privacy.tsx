import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-on-surface mb-8 font-headline tracking-tighter">Política de Privacidad</h1>
        <p className="text-lg text-on-surface-variant mb-12 font-body leading-relaxed">
          En Salud Integral, la privacidad de su información médica es nuestra prioridad absoluta. Cumplimos estrictamente con las leyes de protección de datos personales y confidencialidad médica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { title: "Encriptación de Datos", desc: "Toda la información del Portal del Paciente viaja bajo protocolos seguros SSL.", icon: <Lock /> },
            { title: "Confidencialidad", desc: "Solo el personal médico autorizado y usted tienen acceso a sus resultados clínicos.", icon: <EyeOff /> },
            { title: "Respaldo Seguro", desc: "Sus datos se almacenan en servidores con redundancia y alta disponibilidad.", icon: <Server /> },
            { title: "Cumplimiento Legal", desc: "Alineados con la Ley 172-13 sobre protección de datos personales.", icon: <ShieldCheck /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10">
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="space-y-8 text-sm text-on-surface-variant font-body leading-relaxed">
          <p>Usted tiene derecho a conocer, actualizar y rectificar sus datos personales frente a Salud Integral. Para cualquier consulta sobre sus datos, puede escribir a <span className="text-primary font-bold">privacidad@saludintegral.com</span>.</p>
          <p>Esta política se aplica a todos los servicios físicos y digitales proporcionados por nuestro centro médico especializado.</p>
        </section>
      </div>
    </div>
  );
}

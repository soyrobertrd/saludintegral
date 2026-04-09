import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Share2, Bookmark } from 'lucide-react';

const posts = [
  {
    id: 'telemedicina-2',
    title: "Telemedicina 2.0: El Futuro del Diagnóstico Remoto",
    excerpt: "Nuestras últimas investigaciones revelan cómo las herramientas integradas con IA están cerrando la brecha entre paciente y médico.",
    category: "Innovación",
    author: "Dra. Elena Rodríguez",
    date: "12 Mayo, 2024",
    readTime: "8 min lectura",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    content: `
      La telemedicina ha dejado de ser una simple videollamada para convertirse en un ecosistema robusto de diagnóstico remoto. En Salud Integral, hemos implementado sistemas de Bio-Monitoreo en tiempo real que permiten a nuestros especialistas recibir datos vitales directamente en sus estaciones de trabajo.

      ### El papel de la Inteligencia Artificial
      No se trata solo de ver al paciente, sino de analizar patrones. Nuestros algoritmos de pre-diagnóstico ayudan a identificar riesgos cardiovasculares antes de que el paciente presente síntomas evidentes.

      ### Beneficios para el Paciente
      1. Acceso inmediato a sub-especialidades.
      2. Reducción en los tiempos de espera.
      3. Seguimiento continuo sin desplazamientos innecesarios.
    `
  },
  {
    id: 'mindfulness',
    title: "Mindfulness en el Manejo del Estrés Moderno",
    excerpt: "Explorando los beneficios clínicos de las prácticas meditativas diarias para la salud cardiovascular.",
    category: "Bienestar",
    author: "Dra. Sara Jiménez",
    date: "10 Mayo, 2024",
    readTime: "5 min lectura",
    image: "https://images.unsplash.com/photo-1545201071-75f028eefd53?auto=format&fit=crop&q=80&w=1200",
    content: "La salud cardiovascular no depende solo del ejercicio físico; el estado mental juega un papel crítico..."
  }
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id) || posts[0];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      {/* Header Info */}
      <div className="max-w-4xl mx-auto px-8 mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Volver al Blog
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
           <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
             {post.category}
           </span>
           <span className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
             <Clock size={14} /> {post.readTime}
           </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-8 font-headline tracking-tighter leading-[1.1]">
          {post.title}
        </h1>

        <div className="flex items-center justify-between py-8 border-y border-outline-variant/10">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden flex items-center justify-center">
                 <User size={24} className="opacity-40" />
              </div>
              <div>
                 <span className="block text-sm font-black text-on-surface">{post.author}</span>
                 <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{post.date}</span>
              </div>
           </div>
           <div className="flex gap-4">
              <button className="p-3 rounded-xl hover:bg-surface-container-low transition-colors"><Share2 size={20} /></button>
              <button className="p-3 rounded-xl hover:bg-surface-container-low transition-colors"><Bookmark size={20} /></button>
           </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video rounded-3xl overflow-hidden shadow-sm"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-8">
        <div className="prose prose-lg prose-slate max-w-none">
           <p className="text-xl text-on-surface-variant leading-relaxed font-body mb-8 italic opacity-80">
             {post.excerpt}
           </p>
           <div className="text-lg text-on-surface-variant leading-relaxed font-body whitespace-pre-line space-y-6">
             {post.content}
           </div>
        </div>

        {/* Cta Section */}
        <div className="mt-20 p-12 bg-surface-container-low rounded-3xl border border-outline-variant/5 text-center">
           <h3 className="text-2xl font-black font-headline mb-4">¿Te interesó este tema?</h3>
           <p className="text-on-surface-variant mb-8 max-w-md mx-auto">Suscríbete para recibir mensualmente nuestras investigaciones y consejos médicos directamente en tu correo.</p>
           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Tu correo electrónico" className="bg-white border border-outline-variant/10 rounded-xl px-6 py-4 flex-1 outline-none focus:border-primary/40 transition-all font-bold text-sm" />
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Suscribirse</button>
           </div>
        </div>
      </article>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Bookmark, Clock, Share2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const categories = ["Todos", "Innovación", "Bienestar", "Casos de Éxito", "Guía del Paciente"];

  const featuredPost = {
    id: "telemedicina-2",
    title: "IA en Cardiología Preventiva: El Futuro del Diagnóstico",
    excerpt: "Nuestra clínica introduce nuevos protocolos que utilizan machine learning para predecir eventos cardiovasculares con alta precisión, reduciendo la mortalidad en pacientes de riesgo.",
    author: "Dra. Lucía Valerio",
    date: "12 May, 2024",
    readTime: "5 min",
    category: "Innovación",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1600"
  };

  const recentPosts = [
    {
      id: "mindfulness",
      title: "Conexión Intestino-Cerebro: Un Enfoque Holístico",
      excerpt: "Cómo la ciencia nutricional moderna está remodelando nuestra comprensión de la salud mental y el bienestar físico.",
      author: "Dr. Juan Diego",
      date: "10 May, 2024",
      readTime: "8 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "feria-salud",
      title: "Gran Apertura del Ala Pediátrica el Próximo Mes",
      excerpt: "Ampliamos nuestro compromiso con la salud familiar con instalaciones diseñadas exclusivamente para el confort infantil.",
      author: "Dra. Elena Martínez",
      date: "08 May, 2024",
      readTime: "3 min",
      category: "Guía del Paciente",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "nutricion-onco",
      title: "Nutrición Oncológica: Mitos y Realidades",
      excerpt: "Analizamos la importancia de una dieta personalizada durante el tratamiento de quimioterapia para mejorar la respuesta inmune.",
      author: "Lic. Ana Beltrán",
      date: "05 May, 2024",
      readTime: "12 min",
      category: "Innovación",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const morePosts = [
    {
      id: "manejo-estres",
      title: "Gestión del Estrés en Pacientes Crónicos",
      excerpt: "Estrategias de mindfulness y soporte psicológico para mejorar la calidad de vida en diagnósticos de larga duración.",
      author: "Dr. Juan Diego",
      date: "01 May, 2024",
      readTime: "10 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "biopsia-liquida",
      title: "Avances en Biopsia Líquida: Diagnóstico No Invasivo",
      excerpt: "Cómo las nuevas pruebas de ADN circulante están permitiendo detectar recidivas meses antes que las pruebas de imagen.",
      author: "Dra. Sofía Reyes",
      date: "28 Abr, 2024",
      readTime: "15 min",
      category: "Innovación",
      image: "https://images.unsplash.com/photo-1579152276508-41009187680f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "sueno-inmune",
      title: "Importancia del Sueño en la Recuperación",
      excerpt: "La ciencia detrás del descanso profundo y su papel crítico en la regeneración celular y el sistema inmunológico.",
      author: "Dr. Marcos Paredes",
      date: "25 Abr, 2024",
      readTime: "7 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "telemedicina-concierge",
      title: "Telemedicina Concierge: Futuro del Cuidado",
      excerpt: "Nuestro programa de monitoreo remoto permite que el especialista esté siempre presente en la palma de su mano.",
      author: "Dra. Elena Martínez",
      date: "20 Abr, 2024",
      readTime: "6 min",
      category: "Innovación",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block"
          >
            Editorial SI+
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-on-surface font-headline tracking-tighter leading-tight"
          >
            Investigación y Bienestar para la Vida.
          </motion.h1>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Buscar investigaciones o guías..."
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-primary transition-all"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${i === 0 ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-on-surface-variant hover:border-primary border-outline-variant/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group mb-20"
        >
          <Link to={`/blog/${featuredPost.id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow duration-500">
            <div className="h-72 lg:h-auto overflow-hidden relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-on-surface/30 to-transparent" />
              <span className="absolute top-6 left-6 bg-primary text-on-primary px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                {featuredPost.category}
              </span>
            </div>
            <div className="bg-surface-container-lowest p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[9px] font-black text-primary uppercase tracking-widest mb-6">
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
                <span className="opacity-30">•</span>
                <span>{featuredPost.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-headline text-on-surface mb-6 group-hover:text-primary transition-colors leading-tight tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-10 opacity-70">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/5">
                <span className="text-xs font-black text-on-surface-variant opacity-50 uppercase tracking-widest">{featuredPost.author}</span>
                <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                  Leer Artículo <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* 3 Recent Posts Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {recentPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-8 relative border border-outline-variant/5 shadow-sm">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-on-surface px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col grow">
                <div className="flex items-center gap-4 text-[9px] font-black text-primary uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="opacity-30">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-black font-headline text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant/80 text-xs leading-relaxed mb-8 opacity-70 line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/5">
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                    Leer Más <ArrowRight size={14} />
                  </Link>
                  <div className="flex gap-4 text-on-surface/20">
                    <Bookmark size={14} className="hover:text-primary transition-colors cursor-pointer" />
                    <Share2 size={14} className="hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-outline-variant/10" />
          <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] opacity-40">Más Publicaciones</span>
          <div className="flex-1 h-px bg-outline-variant/10" />
        </div>

        {/* 4 Additional Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {morePosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col"
            >
              <div className="h-48 rounded-2xl overflow-hidden mb-8 relative border border-outline-variant/5 shadow-sm">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-on-surface px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col grow">
                <div className="flex items-center gap-4 text-[9px] font-black text-primary uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="opacity-30">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-black font-headline text-on-surface mb-6 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant/80 text-xs leading-relaxed mb-8 opacity-70 line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/5">
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                    Leer Más <ArrowRight size={14} />
                  </Link>
                  <div className="flex gap-4 text-on-surface/20">
                    <Bookmark size={14} className="hover:text-primary transition-colors cursor-pointer" />
                    <Share2 size={14} className="hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 blur-[130px] rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter mb-6">Únete al SI+ Journal</h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed">Reciba mensualmente nuestras investigaciones más recientes y consejos exclusivos de salud concierge directamente de nuestros especialistas.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu dirección de correo profesional"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary transition-all text-white"
              />
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-on-surface transition-all shadow-xl shadow-primary/20">
                Suscribirse Gratis
              </button>
            </form>
            <p className="text-[9px] mt-6 opacity-40 uppercase tracking-widest font-black">Su privacidad es nuestra prioridad clínica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

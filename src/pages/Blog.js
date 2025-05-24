import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Importancia de la Seguridad en Trabajos en Altura",
      excerpt: "Descubre por qué la formación en seguridad para trabajos en altura es crucial para prevenir accidentes laborales.",
      image: "/images/trabajos-altura.jpg",
      date: "15 Marzo 2024",
      category: "Seguridad Laboral"
    },
    {
      id: 2,
      title: "Protocolos de Seguridad en Espacios Confinados",
      excerpt: "Guía completa sobre los procedimientos de seguridad necesarios para trabajar en espacios confinados.",
      image: "/images/espacio-confinado.jpg",
      date: "10 Marzo 2024",
      category: "Protocolos"
    },
    {
      id: 3,
      title: "Prevención de Riesgos Eléctricos",
      excerpt: "Aprende sobre los principales riesgos eléctricos y cómo prevenirlos en el entorno laboral.",
      image: "/images/RIESGO-electrico.jpg",
      date: "5 Marzo 2024",
      category: "Prevención"
    },
    {
      id: 4,
      title: "Trabajos en Caliente: Mejores Prácticas",
      excerpt: "Conoce las mejores prácticas para realizar trabajos en caliente de manera segura.",
      image: "/images/trabajos-caliente.png",
      date: "1 Marzo 2024",
      category: "Mejores Prácticas"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Helmet>
        <title>Blog de Seguridad Industrial - SEGURANZA</title>
        <meta name="description" content="Mantente informado con los últimos artículos y noticias sobre seguridad laboral, prevención de riesgos y mejores prácticas en el blog de SEGURANZA."/>
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Blog de Seguridad
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mantente informado sobre las últimas tendencias y mejores prácticas en seguridad laboral
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-secondary rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-white/60 text-sm mb-2">{post.date}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-white/90 mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => {
                      // Aquí iría la lógica para ver el post completo
                      console.log(`Ver post: ${post.id}`);
                    }}
                    className="text-accent font-semibold hover:text-white transition-colors duration-300"
                  >
                    Leer más →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-secondary rounded-2xl p-8 shadow-xl border border-accent/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Suscríbete a nuestro Newsletter
              </h2>
              <p className="text-white/90 mb-8">
                Recibe las últimas actualizaciones sobre seguridad laboral directamente en tu correo
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-3 rounded-xl bg-primary/50 border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                  <button className="bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
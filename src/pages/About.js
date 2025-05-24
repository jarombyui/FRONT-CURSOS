import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      <Helmet>
        <title>Quiénes Somos - SEGURANZA</title>
        <meta name="description" content="Conoce más sobre SEGURANZA, nuestra misión, visión y valores como centro líder en seguridad industrial."/>
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              ¿Quiénes Somos?
            </h1>
            <div className="w-24 h-1 bg-accent/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos una empresa líder en formación y certificación en seguridad laboral, comprometida con la excelencia y la innovación.
            </p>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary/20">
              <h2 className="text-3xl font-bold text-white mb-6">Misión</h2>
              <p className="text-white/90 text-lg">
                Proporcionar formación de calidad en seguridad laboral, contribuyendo a la prevención de accidentes y la protección de vidas en el entorno laboral.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary/20">
              <h2 className="text-3xl font-bold text-white mb-6">Visión</h2>
              <p className="text-white/90 text-lg">
                Ser reconocidos como la institución líder en formación y certificación en seguridad laboral a nivel nacional e internacional.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-accent/50 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary/20">
              <div className="text-accent text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-white/90">Buscamos la excelencia en cada aspecto de nuestra formación y servicios</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary/20">
              <div className="text-accent text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovación</h3>
              <p className="text-white/90">Implementamos las últimas tecnologías y metodologías en seguridad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary/20">
              <div className="text-accent text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Compromiso</h3>
              <p className="text-white/90">Nos comprometemos con la seguridad y el bienestar de nuestros clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
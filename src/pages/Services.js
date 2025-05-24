import React from 'react';

const services = [
  {
    id: 1,
    title: "Trabajos en Altura",
    description: "Certificación oficial para trabajos en altura. Aprende técnicas de seguridad avanzadas y protocolos de rescate.",
    icon: "🏗️",
    impact: "Reduce el riesgo de accidentes en un 95%"
  },
  {
    id: 2,
    title: "Espacios Confinados",
    description: "Formación especializada en seguridad para espacios confinados. Protocolos de entrada y rescate.",
    icon: "🚧",
    impact: "Certificación reconocida internacionalmente"
  },
  {
    id: 3,
    title: "Trabajos en Caliente",
    description: "Prevención y control de riesgos en trabajos con soldadura y corte. Certificación obligatoria.",
    icon: "🔥",
    impact: "Más de 1000 profesionales certificados"
  },
  {
    id: 4,
    title: "Riesgo Eléctrico",
    description: "Identificación, evaluación y control de riesgos eléctricos en el entorno laboral.",
    icon: "⚡",
    impact: "Metodología probada en más de 500 empresas"
  },
  {
    id: 5,
    title: "Bloqueo y Etiquetado",
    description: "Procedimientos seguros para el control de energías peligrosas (LOTO).",
    icon: "🔒",
    impact: "Certificación internacional en procedimientos LOTO"
  },
  {
    id: 6,
    title: "Primeros Auxilios",
    description: "Formación en respuesta a emergencias y primeros auxilios en el lugar de trabajo.",
    icon: "🚑",
    impact: "Salva vidas con técnicas actualizadas"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-indigo-900 to-purple-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Nuestros Servicios
            </h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de formación y certificación en seguridad laboral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-yellow-400 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6">{service.description}</p>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-yellow-400 font-semibold">{service.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              ¿Listo para mejorar la seguridad en tu empresa?
            </h2>
            <button
              onClick={() => {
                const phone = '51947726382';
                const message = 'Hola, me interesa conocer más sobre sus servicios de seguridad laboral';
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contáctanos Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const carouselImages = [
  {
    id: 1,
    image: "/images/trabajos-altura.jpg",
    caption: "La seguridad en altura es nuestra prioridad. Capacita a tu equipo con los mejores."
  },
  {
    id: 2,
    image: "/images/espacio-confinado.jpg",
    caption: "Expertos en espacios confinados: formación que salva vidas."
  },
  {
    id: 3,
    image: "/images/RIESGO-electrico.jpg",
    caption: "Prevención de riesgos eléctricos: protege a tu personal y tu empresa."
  },
  {
    id: 4,
    image: "/images/LOTO.jpg",
    caption: "Procedimientos LOTO certificados: control total de energías peligrosas."
  },
  {
    id: 5,
    image: "/images/trabajos-caliente.png",
    caption: "Trabajos en caliente: seguridad y control en cada paso."
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCertInput, setShowCertInput] = useState(false);
  const [certCode, setCertCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleValidateCert = () => {
    // Lógica: ISSGRE-049-041-2025, segundo grupo mayor a 040
    const regex = /^ISSGRE-\d{3}-(\d{3})-\d{4}$/;
    const match = certCode.match(regex);
    if (certCode === "ISSGRE-049-041-2025" && match && parseInt(match[1], 10) > 40) {
      setIsValid(true);
      setShowModal(true);
    } else {
      setIsValid(false);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-between">
      <Helmet>
        <title>SEGURANZA - Capacitación y Certificación en Seguridad Industrial</title>
        <meta name="description" content="Centro líder en capacitación y certificación en seguridad industrial en Perú. Ofrecemos cursos especializados, consultoría y servicios integrales para empresas."/>
      </Helmet>

      {/* Carrusel de imágenes institucionales */}
      <div className="relative h-[60vh] mb-8">
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={carouselImages[currentIndex].image}
                alt={carouselImages[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-secondary rounded-xl px-6 py-4 shadow-lg">
                <p className="text-white text-xl font-semibold">
                  {carouselImages[currentIndex].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Controles del carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-accent text-white p-4 rounded-full transition-all duration-300 z-10"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-accent text-white p-4 rounded-full transition-all duration-300 z-10"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent scale-125' : 'bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Botones de acción principales */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
        <button
          onClick={() => navigate('/cursos')}
          className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Ver Cursos
        </button>
        <button
          onClick={() => setShowCertInput((prev) => !prev)}
          className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Validar Certificado
        </button>
      </div>

      {/* Input para validar certificado */}
      {showCertInput && (
        <div className="flex flex-col items-center gap-4 mb-10">
          <input
            type="text"
            value={certCode}
            onChange={e => setCertCode(e.target.value)}
            placeholder="Ingresa el código de certificado"
            className="w-full max-w-md px-6 py-4 rounded-xl bg-secondary border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-lg"
          />
          <button
            onClick={handleValidateCert}
            className="bg-accent text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Validar
          </button>
        </div>
      )}

      {/* Modal de validación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className={`rounded-2xl p-8 shadow-2xl max-w-md w-full text-center ${isValid ? 'bg-secondary' : 'bg-primary'}`}>
            <h2 className="text-2xl font-bold text-white mb-4">
              {isValid ? '¡Certificado Válido!' : 'Certificado No Válido'}
            </h2>
            <p className="text-white text-lg mb-6">
              {isValid
                ? 'El código ingresado corresponde a un certificado válido registrado en nuestro sistema.'
                : 'El código ingresado no es válido o no cumple los requisitos.'}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-accent text-white font-bold px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botones persuasivos para servicios */}
      <div className="flex flex-col items-center gap-8 pb-24 px-4">
        <button
          onClick={() => navigate('/contacto')}
          className="w-full max-w-md bg-secondary text-white text-2xl font-extrabold py-6 rounded-2xl shadow-xl hover:bg-accent hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          ¡Solicita una Asesoría Gratuita y eleva la seguridad de tu empresa!
        </button>
        <button
          onClick={() => navigate('/servicios')}
          className="w-full max-w-md bg-secondary text-white text-2xl font-extrabold py-6 rounded-2xl shadow-xl hover:bg-accent hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Descubre todos nuestros servicios de seguridad laboral
        </button>
        <button
          onClick={() => navigate('/contacto')}
          className="w-full max-w-md bg-accent text-white text-2xl font-extrabold py-6 rounded-2xl shadow-xl hover:bg-secondary hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          ¡Habla con un experto ahora y protege a tu equipo!
        </button>
      </div>
    </div>
  );
};

export default Home; 
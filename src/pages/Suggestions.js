import React, { useState } from 'react';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', suggestion: '' });
    } catch (err) {
      setError('Hubo un error al enviar tu sugerencia. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-indigo-900 to-purple-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Buzón de Sugerencias
            </h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tu opinión es importante para nosotros. Ayúdanos a mejorar nuestros servicios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Information Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">¿Por qué tus sugerencias son importantes?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">💡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Mejora Continua</h3>
                    <p className="text-white/90">Tus ideas nos ayudan a mejorar nuestros servicios y procesos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovación</h3>
                    <p className="text-white/90">Tus sugerencias nos permiten innovar y adaptarnos a las necesidades del mercado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 text-2xl">🤝</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Compromiso</h3>
                    <p className="text-white/90">Valoramos tu participación en nuestro crecimiento y desarrollo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestion Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Envíanos tu Sugerencia</h2>
              
              {success ? (
                <div className="bg-green-500/20 text-green-200 p-4 rounded-xl mb-6">
                  ¡Gracias por tu sugerencia! La revisaremos y te contactaremos si es necesario.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 text-red-200 p-4 rounded-xl">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Ingresa tu correo"
                    />
                  </div>

                  <div>
                    <label htmlFor="suggestion" className="block text-white mb-2">Tu Sugerencia</label>
                    <textarea
                      id="suggestion"
                      name="suggestion"
                      value={formData.suggestion}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Escribe tu sugerencia aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary via-indigo-700 to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-800 hover:to-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar Sugerencia'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions; 
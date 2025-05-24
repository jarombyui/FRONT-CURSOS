import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Helmet>
        <title>Contáctanos - SEGURANZA</title>
        <meta name="description" content="Ponte en contacto con SEGURANZA para consultar sobre nuestros cursos, servicios o cualquier necesidad de seguridad industrial."/>
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Contáctanos
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Envíanos tus consultas y te responderemos a la brevedad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-secondary rounded-2xl p-8 shadow-xl border border-accent/20">
              <h2 className="text-3xl font-bold text-white mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dirección</h3>
                    <p className="text-white/90">Urb. Santa Patricia, La Molina, Lima, Lima</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
                    <p className="text-white/90">+51 947 726 382</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">✉️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-white/90">ingeniumalliance@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Horario de Atención</h3>
                    <p className="text-white/90">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary rounded-2xl p-8 shadow-xl border border-accent/20">
              <h2 className="text-3xl font-bold text-white mb-8">Envíanos un Mensaje</h2>
              
              {success ? (
                <div className="bg-primary/50 text-white p-4 rounded-xl mb-6">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-primary/50 text-white p-4 rounded-xl">
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
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Ingresa tu correo"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Ingresa tu teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-accent/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Escribe tu mensaje"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
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

export default Contact; 
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: 'https://www.facebook.com/profile.php?id=100088810666184', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', path: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', path: 'https://www.linkedin.com/in/1ssecurex-instituto-para-la-seguridad-industrial-0846a8363/', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', path: 'https://www.instagram.com/1sse.curex/', icon: 'fab fa-instagram' },
    { name: 'YouTube', path: 'https://www.youtube.com/@ISSEGUREInstitutoparalaSegurid', icon: 'fab fa-youtube' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/images/NUEVO_LOGO.png"
                alt="SEGURANZA Logo"
                className="h-24 w-auto max-w-[240px] object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-accent mb-4">
              Centro para la Seguridad Industrial, brindando capacitaciones especializadas en seguridad integral por más de 10 años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-accent hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-accent">
          <p>&copy; {new Date().getFullYear()} SEGURANZA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
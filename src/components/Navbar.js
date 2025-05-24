import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Explorar cursos', path: '/cursos' },
    { name: 'Mis cursos', path: '/mis-cursos' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-primary/10 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/NUEVO_LOGO.png"
                alt="SEGURANZA Logo"
                className="h-12 w-auto max-w-[160px] object-contain drop-shadow-lg rounded"
              />
            </Link>
          </div>

          {/* Menú centrado */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary hover:text-secondary hover:bg-accent/10 px-4 py-2 text-base font-semibold rounded transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Ícono de usuario a la derecha */}
          <div className="flex items-center">
            <button className="text-primary hover:text-accent text-3xl ml-4">
              <FaUserCircle />
            </button>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none text-3xl"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden bg-white shadow rounded-b-xl px-4 py-2 flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary hover:text-secondary px-3 py-2 text-base font-semibold rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="text-primary hover:text-accent text-2xl flex items-center mt-2">
              <FaUserCircle />
              <span className="ml-2 text-base">Usuario</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
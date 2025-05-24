import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CourseFiltersSidebar from '../components/CourseFiltersSidebar';
import CourseSearchBar from '../components/CourseSearchBar';
import { useNavigate } from 'react-router-dom';

// Cursos de ejemplo inspirados en la imagen (puedes cambiar imágenes y textos reales)
const allCourses = [
  {
    id: 1,
    title: 'Legislación Ambiental de Áreas Naturales Protegidas',
    image: '/images/curso1.jpg',
    description: 'Se abordarán los principios fundamentales de la protección ambiental, las [...]',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: ingeniería y medio ambiente',
  },
  {
    id: 2,
    title: 'Gestión Ambiental: Control e impacto de incendios forestales',
    image: '/images/curso2.jpg',
    description: 'Este curso de gestión ambiental sobre el control e impacto [...]',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: ingeniería y medio ambiente',
  },
  {
    id: 3,
    title: 'Gestión de Base de Datos con SQL - Nivel Básico e Intermedio',
    image: '/images/curso3.jpg',
    description: 'Este curso está diseñado para ofrecer una formación completa en SQL.',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: informática',
  },
  {
    id: 4,
    title: 'Primeros Auxilios',
    image: '/images/curso4.jpg',
    description: 'Los primeros auxilios siempre han sido indispensables en el tratamiento [...]',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: salud',
  },
  {
    id: 5,
    title: 'Asistente de dirección y gerencia',
    image: '/images/curso5.jpg',
    description: 'Este curso proporciona una visión estratégica del desarrollo asistencial para [...]',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: administración',
  },
  {
    id: 6,
    title: 'Atención al Público',
    image: '/images/curso6.jpg',
    description: 'La persona que trabaja dentro de una empresa y toma [...]',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: gestión pública',
  },
  {
    id: 7,
    title: 'Inteligencia Artificial para la Gestión Pública',
    image: '/images/curso7.jpg',
    description: 'Este curso brinda una introducción práctica al uso de la IA en la gestión pública.',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: informática',
  },
  {
    id: 8,
    title: 'Derecho ambiental aplicado al sector vivienda y construcción',
    image: '/images/curso8.jpg',
    description: 'El curso proporciona un enfoque especializado en la normativa ambiental [...]',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: derecho',
  },
  // 32 cursos adicionales para completar 40 (puedes duplicar o variar los anteriores para el ejemplo)
  {
    id: 9,
    title: 'Gestión de Proyectos de Innovación',
    image: '/images/curso1.jpg',
    description: 'Aprende a gestionar proyectos innovadores en tu organización.',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: administración',
  },
  {
    id: 10,
    title: 'Capacitación en Seguridad Industrial',
    image: '/images/curso2.jpg',
    description: 'Formación esencial para la prevención de riesgos laborales.',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: ingeniería y medio ambiente',
  },
  {
    id: 11,
    title: 'Gestión de Recursos Humanos',
    image: '/images/curso3.jpg',
    description: 'Optimiza la gestión del talento en tu empresa.',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: recursos humanos',
  },
  {
    id: 12,
    title: 'Finanzas para no financieros',
    image: '/images/curso4.jpg',
    description: 'Aprende los conceptos clave de finanzas para la gestión empresarial.',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: finanzas y contabilidad',
  },
  {
    id: 13,
    title: 'Logística y Cadena de Suministro',
    image: '/images/curso5.jpg',
    description: 'Domina la logística moderna y la gestión de la cadena de suministro.',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: logística',
  },
  {
    id: 14,
    title: 'Gestión Pública Moderna',
    image: '/images/curso6.jpg',
    description: 'Herramientas y estrategias para la gestión pública eficiente.',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: gestión pública',
  },
  {
    id: 15,
    title: 'Salud y Seguridad Ocupacional',
    image: '/images/curso7.jpg',
    description: 'Implementa sistemas de salud y seguridad en el trabajo.',
    type: 'Curso Taller',
    price: 25.0,
    area: 'Área: salud',
  },
  {
    id: 16,
    title: 'Especialización en Derecho Laboral',
    image: '/images/curso8.jpg',
    description: 'Profundiza en la normativa laboral vigente.',
    type: 'Programa de Especialización',
    price: 99.0,
    area: 'Área: derecho',
  },
  // ... repite o varía para llegar a 40 cursos ...
];
while (allCourses.length < 40) {
  allCourses.push({
    ...allCourses[allCourses.length % 8],
    id: allCourses.length + 1,
    title: allCourses[allCourses.length % 8].title + ' (Edición ' + (Math.floor(allCourses.length / 8) + 1) + ')',
  });
}

const COURSES_PER_PAGE = 8;
const TOTAL_PAGES = 5;

const Courses = () => {
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Lógica de filtrado y búsqueda
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some(f => course.type === f || course.area === f);
    return matchesSearch && matchesFilters;
  });

  // Paginación
  const totalPages = Math.min(TOTAL_PAGES, Math.ceil(filteredCourses.length / COURSES_PER_PAGE));
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handleFilterChange = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Cursos y Certificaciones - SEGURANZA</title>
        <meta name="description" content="Explora nuestros cursos y certificaciones. Filtra por área, tipo y modalidad. Encuentra el curso ideal para ti." />
      </Helmet>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar de filtros */}
          <CourseFiltersSidebar selectedFilters={selectedFilters} onChange={handleFilterChange} />

          {/* Contenido principal */}
          <div className="flex-1">
            {/* Barra de búsqueda */}
            <CourseSearchBar value={search} onChange={setSearch} />

            {/* Grid de cursos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {paginatedCourses.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-20">No se encontraron cursos.</div>
              ) : (
                paginatedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col hover:-translate-y-1 transition-all duration-300 border border-gray-200 cursor-pointer"
                    onClick={() => navigate(`/cursos/${course.id}`)}
                  >
                    <div className="relative h-36">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-base font-bold text-primary mb-1 line-clamp-2 min-h-[48px]">{course.title}</h3>
                      <p className="text-gray-700 mb-2 flex-1 text-sm line-clamp-2 min-h-[40px]">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{course.type}</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{course.area}</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-base font-bold text-accent">S/. {course.price.toFixed(2)}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Evitar que el clic en el botón active el clic del div
                            navigate('/pago', { state: { courseId: course.id, price: course.price, title: course.title } });
                          }}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm"
                        >
                          Inscribirme
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Paginación */}
            <div className="flex justify-center items-center gap-1 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border text-sm font-semibold ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-primary hover:bg-accent/10'}`}
              >
                &laquo;
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-3 py-1 rounded border text-sm font-semibold ${currentPage === idx + 1 ? 'bg-accent text-white border-accent' : 'bg-white text-primary hover:bg-accent/10 border-gray-200'}`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border text-sm font-semibold ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-primary hover:bg-accent/10'}`}
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 
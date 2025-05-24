import React from 'react';

const filters = [
  { label: 'Modalidad: auto-instructivo', count: 184 },
  { label: 'Tipo: curso de capacitación', count: 1 },
  { label: 'Tipo: curso de capacitación y actualización', count: 54 },
  { label: 'Tipo: curso de especialización', count: 131 },
  { label: 'Tipo: curso taller', count: 97 },
  { label: 'Tipo: diplomado especializado', count: 13 },
  { label: 'Tipo: programa de especialización', count: 1 },
  { label: 'Tipo: programa de especialización', count: 78 },
  { label: 'Tipo: seminario de actualización', count: 15 },
  { label: 'Área: administración', count: 59 },
  { label: 'Área: banca y comercio', count: 18 },
  { label: 'Área: derecho', count: 48 },
  { label: 'Área: finanzas y contabilidad', count: 43 },
  { label: 'Área: gestión pública', count: 53 },
  { label: 'Área: idiomas', count: 2 },
  { label: 'Área: informática', count: 23 },
  { label: 'Área: ingeniería y medio ambiente', count: 87 },
  { label: 'Área: logística', count: 9 },
  { label: 'Área: recursos humanos', count: 32 },
  { label: 'Área: salud', count: 11 },
  { label: 'Área: seguridad ciudadana', count: 6 },
];

const CourseFiltersSidebar = ({ selectedFilters, onChange }) => {
  return (
    <aside className="w-full md:w-64 bg-white rounded-xl shadow p-4 mb-6 md:mb-0 md:mr-6">
      <h2 className="text-lg font-bold mb-4 text-primary">Filtrar por</h2>
      <ul className="space-y-2">
        {filters.map((filter, idx) => (
          <li key={filter.label} className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="checkbox"
                checked={selectedFilters.includes(filter.label)}
                onChange={() => onChange(filter.label)}
                className="accent-primary"
              />
              <span className="text-sm">{filter.label}</span>
            </label>
            <span className="text-xs bg-gray-100 rounded px-2 py-0.5 text-gray-500 font-semibold">{filter.count}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CourseFiltersSidebar; 
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const CourseSearchBar = ({ value, onChange }) => (
  <div className="w-full flex items-center bg-white rounded-xl shadow px-4 py-3 mb-8">
    <FaSearch className="text-gray-400 mr-3 text-xl" />
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Encuentra cursos, certificaciones y más"
      className="w-full bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
    />
  </div>
);

export default CourseSearchBar; 
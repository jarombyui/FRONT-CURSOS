import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import config from '../config/config';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`${config.API_URL}/cursos/${id}`);
                if (!response.ok) {
                    throw new Error(`Error al cargar el curso: ${response.statusText}`);
                }
                const data = await response.json();
                setCourse(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Cargando curso...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error.message}</div>;
    }

    if (!course) {
        return <div className="flex justify-center items-center min-h-screen">Curso no encontrado.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <Helmet>
                <title>{course.title} - Detalles</title>
                <meta name="description" content={`Detalles del curso ${course.title}`} />
            </Helmet>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{course.type}</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">{course.area}</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Precio: S/. {course.price.toFixed(2)}</span>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Presentación</h2>
                        <p className="text-gray-600">{course.presentacion || 'No hay presentación disponible.'}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Temario</h2>
                        <div className="text-gray-600 whitespace-pre-wrap">{course.temario || 'No hay temario disponible.'}</div>
                    </div>

                    {/* Placeholder para botón de inscripción, similar al de la lista */}
                    <div className="text-center">
                         {/* Este botón podría llevarte a la página de pago */} 
                        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300">
                            Inscribirme
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail; 
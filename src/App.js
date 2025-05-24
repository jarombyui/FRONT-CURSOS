import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Courses from './pages/Courses';
import ServicesPage from './pages/ServicesPage';
import SuggestionBox from './pages/SuggestionBox';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import PaymentPage from './pages/PaymentPage';

// Componente para rutas protegidas
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    return user ? children : <Navigate to="/login" />;
};

// Componente Dashboard de ejemplo
const Dashboard = () => {
    const { user, logout } = useAuth();
    
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Dashboard</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-4">Bienvenido, {user?.nombre}</span>
                            <button
                                onClick={logout}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
                        <h2 className="text-2xl font-bold mb-4">Contenido del Dashboard</h2>
                        <p>Esta es una página protegida que solo pueden ver usuarios autenticados.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/dashboard"
                                element={
                                    <PrivateRoute>
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/" element={<Navigate to="/dashboard" />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/cursos" element={<Courses />} />
                            <Route path="/cursos/:id" element={<CourseDetail />} />
                            <Route path="/servicios" element={<ServicesPage />} />
                            <Route path="/sugerencias" element={<SuggestionBox />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contacto" element={<Contact />} />
                            <Route path="/pago" element={<PaymentPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App; 
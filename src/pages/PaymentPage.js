import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { courseId, price, title } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('visa'); // Default to Visa
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    // Redirect if no course data is available (e.g., accessed directly)
    useEffect(() => {
        if (!courseId || !price || !title) {
            navigate('/cursos'); // Redirect to courses list
        }
    }, [courseId, price, title, navigate]);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPaymentError(null);
        setPaymentSuccess(false);

        // --- SIMULACIÓN DE PAGO --- 
        // AQUÍ ES DONDE INTEGRARÍAS LA PASARELA DE PAGO REAL (Visa, Yape, etc.)
        console.log(`Simulando pago para el curso ${title} (ID: ${courseId}) con método ${paymentMethod}`);

        try {
            // Lógica real de integración de pasarela aquí...
            // Esto es solo un placeholder:
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simula el tiempo de procesamiento

            // Si el pago fuera exitoso:
            setPaymentSuccess(true);
            // Normalmente aquí harías una llamada al backend para confirmar la inscripción
            // con el ID del curso y la confirmación de la pasarela de pago.

        } catch (error) {
            // Si hubiera un error en el pago:
            setPaymentError('Hubo un error al procesar tu pago. Inténtalo de nuevo.');
            console.error('Error de simulación de pago:', error);
        } finally {
            setLoading(false);
        }
        // --- FIN SIMULACIÓN DE PAGO ---
    };

    if (!courseId) {
        // Esto debería ser manejado por el useEffect, pero es un fallback.
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <Helmet>
                <title>Pago de Curso - {title}</title>
            </Helmet>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Procesar Pago</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Resumen del Pedido:</h2>
                    <p className="text-gray-600">Curso: <span className="font-semibold">{title}</span></p>
                    <p className="text-gray-600">Precio: <span className="font-semibold">S/. {price?.toFixed(2)}</span></p>
                </div>

                {paymentSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        ¡Pago exitoso! Tu inscripción al curso ha sido confirmada.
                    </div>
                )}

                {paymentError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        {paymentError}
                    </div>
                )}

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona Método de Pago:</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="visa">Tarjeta de Crédito/Débito (Visa, Mastercard, etc.)</option>
                            <option value="yape">Yape (Simulado)</option>
                            {/* Agrega más opciones según necesites */}
                        </select>
                    </div>

                    {paymentMethod === 'visa' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">Detalles de la Tarjeta</h3>
                            <div>
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
                                <input type="text" id="cardNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Fecha Vencimiento</label>
                                    <input type="text" id="expiryDate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="MM/YY" required />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input type="text" id="cvv" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="CVC" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Nombre en la Tarjeta</label>
                                <input type="text" id="cardName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nombre Completo" required />
                            </div>
                        </div>
                    )}

                    {paymentMethod === 'yape' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">Pago con Yape</h3>
                            <p className="text-gray-600">Por favor, abre tu aplicación Yape y escanea el siguiente código QR o envía el monto a nuestro número.</p>
                            {/* Placeholder para QR de Yape */}
                            <div className="flex justify-center">
                                <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md text-gray-600 font-semibold">Código QR Yape (Simulado)</div>
                            </div>
                            <p className="text-center text-gray-600">Número Yape: +51 947726382 (Simulado)</p>
                            <p className="text-red-500 text-sm">Nota: Esta es una simulación. La integración real con Yape requiere APIs específicas.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading || paymentSuccess}
                    >
                        {loading ? 'Procesando...' : paymentSuccess ? 'Pago Completado' : 'Pagar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage; 
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Importar el AuthContext

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext); // Usar el estado de autenticación del contexto

    // Muestra un indicador de carga o algo similar si aún no se ha determinado el estado de autenticación
    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Puedes personalizar este mensaje
    }

    // Si el usuario está autenticado, muestra los componentes protegidos
    return isAuthenticated ? children : <Navigate to="/login" />; // Redirige a login si no está autenticado
};

export default PrivateRoute;

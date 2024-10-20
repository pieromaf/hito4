import { Routes, Route } from 'react-router-dom';
import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../src/css/tailwind.css'; 
import '../src/css/styles.css'; 
import Home from './views/Home';
import Menu from './views/Menu';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile'; // Importa tu componente Profile
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Asegúrate de tener tu PrivateRoute
import { AuthProvider } from './context/AuthContext'; // Importa el Provider para AuthContext

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen"> 
        <Header /> 
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/profile"  
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

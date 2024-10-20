import React from 'react';

const CategoryMenu = ({ categories }) => {
  // Función para manejar el desplazamiento a la categoría
  const scrollToCategory = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md flex justify-center space-x-4 my-4 py-2 border-b border-gray-300"> {/* Agrega un borde inferior */}
      {categories.map((category) => (
        <button 
          key={category}
          onClick={() => scrollToCategory(category)} 
          className="bg-gray-300 text-black font-bold rounded-lg px-6 py-3 hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl" // Estilos mejorados
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;

import React from 'react';

const Hero = () => {
 return (
 <section className="bg-gray-100">
 <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
 <img className="object-cover object-center rounded" alt="hero" src="./nature_3.jpeg"/>
 </div>
 <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
 La Ruta Mágica del Café, un producto consolidado
 </h1>
 <p className="mb-8 leading-relaxed">
 La Gobernación del Huila a través de la Oficina de Productividad y Competitividad realizó un recorrido por algunos de los sitios turísticos que componen la Ruta Mágica del Café para evidenciar los avances y resultados de la consolidación de este producto insignia del centro del departamento.

Gigante, 11 de abril de 2022. En el recorrido participaron diferentes instituciones que vienen trabajando de la mano para convertir al centro del departamento en un destino apetecido por turistas nacionales e internacionales, la Gobernación del Huila a través de la Oficina de Productividad y Competitividad, el Instituto Italo - Latino Americano, el Sena, la Cámara de Comercio, universidades, las alcaldías de Gigante y Garzón y por su puesto los empresarios del turismo han trabajado articuladamente para lograr los resultados.
 </p>
 </div>
 </div>
 </section>
 );
};

export default Hero;
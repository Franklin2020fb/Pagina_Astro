import React from 'react';

const MainFeatures = () => {
 return (
 <section className="text-gray-600 body-font">
  
<div className="flex items-center justify-center">
<img className="object-cover rounded-full w-80 h-8000 inline-flex items-center justify-center flex-shrink-8 " alt="hero" src="./nature_5.jpeg"/>
</div>

 <div className="container px-5 py-24 mx-auto flex flex-col">
 <div className="lg:w-4/6 mx-auto">
 <div className="flex flex-col sm:flex-row mt-10">
 <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
 <div className="w-20 h-20 rounded-full inline-flex items-center justify-center mb-5 flex-shrink-0">
 </div>
 <div className="flex-grow">
  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Conces El Balcón del Huila</h2>
  <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a5/7b/b6/el-balcon-del-huila.jpg?w=1200&h=-1&s=1"  // Reemplaza con la URL de la imagen que deseas mostrar
    alt="Imagen de Conces El Balcón del Huila"
    className="mb-3 rounded-lg"  // Puedes ajustar el estilo de la imagen según tus preferencias
  />
  <p className="leading-relaxed text-base">
    Conces El Balcón del Huila es un lugar encantador ubicado en la hermosa región del Huila. Es conocido por su espectacular vista panorámica y su ambiente tranquilo, lo que lo convierte en un destino favorito para aquellos que buscan paz y conexión con la naturaleza.
  </p>
</div>
</div>

<div className="sm:w-1/3 text-center sm:py-8">


 </div>
 <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
 <div className="w-20 h-20 rounded-full inline-flex items-center justify-center mb-5 flex-shrink-0">
 </div>

 <div className="flex-grow">
  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Conces La Mano Del Gigante </h2>
  <img
    src="https://awake.travel/storage/courses/1669244414254712.jpg?v=M0Y0T1cB05YZsKbp"  // Reemplaza con la URL de la imagen de la mano del gigante
    alt="Imagen de La Mano del Gigante"
    className="mb-3 rounded-lg"/>
<p className="leading-relaxed text-base">
    La Mano del Gigante es una formación rocosa icónica ubicada en el hermoso departamento de Huila, Colombia. Esta espectacular estructura rocosa, que semeja una mano gigante, es conocida por su imponente presencia y su belleza natural única. Es un destino imperdible para los amantes de la naturaleza y los aventureros que buscan explorar la geografía única del Huila.</p>
</div>


 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default MainFeatures;
import React from 'react';

const OtherFeatures = () => {
 return (
 <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="feature" className="m-auto object-fit object-center h-full w-1/2" src="./nature_0.jpeg" />
            </div>
        <div className="flex flex-col sm:flex-row mt-10">

        
        
<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
<div className="flex-grow">
  <style>
    {`
      .image-container {
        position: relative;
      }

      .image-hover {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
      }

      .image-hover:hover {
        transform: scale(1.2);
      }

      .image-description {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 5px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      .image-container:hover .image-description {
        opacity: 1;
      }
    `}
  </style>
  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">El Mirador Mirtayu</h2>
  <img
    src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/268791644_112383214638246_74899700030135147_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=wgBpYqFhZkMAX9dSeE4&_nc_ht=scontent-bog1-1.xx&oh=00_AfC97mbhjyZgyjoGmq0KyNeZfVifBrCsnt-80ZmAe0RktQ&oe=652105DD"
    alt="Imagen de El Mirador Mirtayu"
    className="mb-3 image-hover"/>

<p className="leading-relaxed text-base">
    El Mirador Mirtayu es un lugar impresionante ubicado en la región de Huila, Colombia. Ofrece vistas panorámicas excepcionales y una experiencia única para aquellos que desean conectarse con la naturaleza y disfrutar de la serenidad de la región. Es un destino ideal para aquellos en busca de aventuras y momentos inolvidables.
  </p>
</div>

</div>
<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
<div className="flex-grow">
    
<h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mirador del Totoy</h2>
<img
    src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/315141167_186877257230882_6326846678221565391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=lzOXbBQZ9BsAX8Il4YO&_nc_ht=scontent-bog1-1.xx&oh=00_AfCGXHgtbV37xY6wVYoj3hhdTavAa4q97K4cGl-gg2Llhg&oe=65209205"
    alt="Imagen de Mirador del Totoy"
    className="mb-3 rounded-lg image-hover "/>
<p className="leading-relaxed text-base">
    El Mirador del Totoy es un lugar espectacular ubicado en la región de Huila, Colombia. Ofrece vistas impresionantes y una experiencia única para aquellos que buscan conectarse con la naturaleza y disfrutar de la belleza de la región. Es un destino ideal para quienes buscan aventuras y momentos memorables.
</p>
</div>
</div>
        <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
        <div className="flex-grow">
  <style>
    {`
      .image-hover {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
      }

      .image-hover:hover {
        transform: scale(1.2);
      }
    `}
  </style>
  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">El Mirador La Morra</h2>
  <img
    src="https://scontent.fbog14-1.fna.fbcdn.net/v/t1.6435-9/201654396_1831129920386951_2500247562344035154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=DeLJbM2aWskAX_xWq4T&_nc_ht=scontent.fbog14-1.fna&oh=00_AfDEeAEfLMEuxJgqvQHdts88UWO3bH2rUcHEgoARyGYSLg&oe=6544076B"  // Reemplaza con la URL de la imagen de "El Mirador La Morra"
    alt="Imagen de El Mirador La Morra"
    className="mb-3 image-hover"/>
<p className="leading-relaxed text-base">
    El Mirador La Morra es un lugar impresionante ubicado en la región de Huila, Colombia. Ofrece vistas panorámicas excepcionales y una experiencia única para aquellos que desean conectarse con la naturaleza y disfrutar de la serenidad de la región. Es un destino ideal para aquellos en busca de aventuras y momentos inolvidables.
</p>
</div>
</div>
</div>
    </div>
    </div>
    </section>
 );
};


export default OtherFeatures;
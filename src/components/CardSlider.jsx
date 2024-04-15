import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Cards } from './Cards';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
    );
};

export const CardSlider = ({ data }) => {
    console.log(data);
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "mb-1" // Clase Tailwind para agregar un margen inferior
    };

    return (
        <div className='px-10'>
            {data ? <Slider {...settings}>
                {data.productos.map(product => (
                    <div key={product._id} className=''>
                        <Cards title={product.nombr} descripcion={product.descripcion} image={product.foto_producto} />
                    </div>
                ))}
            </Slider> : <LoadingSpinner />}
        </div>
    );
};

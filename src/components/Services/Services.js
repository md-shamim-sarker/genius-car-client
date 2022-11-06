import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Carousel></Carousel>
            <Hero></Hero>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-10'>
                {
                    services.map(service => {
                        return <div key={service._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={service.img} alt="Shoes" className='h-52' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>Price: ${service.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-orange-700">Order</button>
                                </div>
                            </div>
                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default Services;
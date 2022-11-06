import React from 'react';
import person from '../../assets/hero/person.jpg';
import parts from '../../assets/hero/parts.jpg';

const Hero = () => {
    return (
        <div className="hero w-4/5 mx-auto my-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-full relative'>
                    <img src={person} alt="" className='w-96 h-80' />
                    <img src={parts} alt="" className='absolute w-52 h-52 top-[40%] left-1/2' />
                </div>
                <div className='w-full'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-700">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
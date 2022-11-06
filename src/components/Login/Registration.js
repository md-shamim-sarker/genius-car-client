import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/login/login.svg';

const Registration = () => {
    return (
        <div className="hero w-4/5 mx-auto my-16">
            <div className="hero-content flex-col gap-x-16 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center mt-5 font-bold text-orange-700">Register now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-700">Register</button>
                        </div>
                        <div>
                            Already have an account? <NavLink to={'/login'}>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
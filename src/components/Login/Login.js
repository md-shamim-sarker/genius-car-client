import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/login/login.svg';

const Login = () => {
    return (
        <div className="hero w-4/5 mx-auto my-16">
            <div className="hero-content flex-col gap-x-16 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center mt-5 font-bold text-orange-700">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <NavLink to={"/"} className="label-text-alt link link-hover">Forgot password?</NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-700">Login</button>
                        </div>
                        <div>
                            Don't have an account? <NavLink to={'/register'}>Register</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
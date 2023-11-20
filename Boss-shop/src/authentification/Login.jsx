
                    import React, { useState } from 'react';
                    import { FaEye, FaEyeSlash } from 'react-icons/fa';
                    import { Link } from 'react-router-dom';

                  export default  function Login() {
                        const [showPassword, setShowPassword] = useState(false);

                        const togglePasswordVisibility = () => {
                            setShowPassword(!showPassword);
                        };

                        return (
                            <div className="flex justify-center items-center h-screen w-full ">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-0 max-w-md mx-auto bg-white rounded w-full">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                            Nom d'utilisateur
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="text"
                                            placeholder="Nom d'utilisateur"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                            Mot de passe
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="**********"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-0 top-0 mt-3 mr-4"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Se connecter
                                        </button>
                                        <Link
                                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                            to="/inscription"
                                        >
                                            S'inscrire
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        );
                    }

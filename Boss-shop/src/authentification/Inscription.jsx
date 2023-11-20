import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Inscription()  {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);};

      const handleSubmit = (event) => {
        event.preventDefault();
      
      //  const { nom, prenom, email, telephone, motDePasse, confirmationMotDePasse } = event.target.elements;
      
        if (nom && prenom && email && telephone && motDePasse && confirmationMotDePasse) {
          if (motDePasse === confirmationMotDePasse) {
            alert('success');
            navigate('/login');
          } else {
            alert('Le mot de passe est différent');
          }
        } else {
          alert('Veuillez remplir tous les champs');
        }
      };
      
  return (
    <>
       <div className="flex justify-center items-center w-full py-3">
    <form onSubmit={handleSubmit} className="max-w-md shadow-md  mx-auto bg-white rounded w-full">
      <div className="mb-4">
        <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prenom" className="block text-gray-700 font-bold mb-2">
          Prénom
        </label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telephone" className="block text-gray-700 font-bold mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 relative">
          <label htmlFor="motDePasse" className="block text-gray-700 font-bold mb-2">
            Mot de passe
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="**********"
            id="motDePasse"
            name="motDePasse"
            value={motDePasse}
            onChange={(event) => setMotDePasse(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          <button
            type="button"
            className="absolute right-0 top-8 mt-3 mr-4"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div> 
        <div className="mb-4 relative">
  <label htmlFor="confirmationMotDePasse" className="block text-gray-700 font-bold mb-2">
    Confirmation du mot de passe
  </label>
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="**********"
    id="confirmationMotDePasse"
    name="confirmationMotDePasse"
    value={confirmationMotDePasse}
    onChange={(event) => setConfirmationMotDePasse(event.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  <button
    type="button"
    className="absolute right-0 top-8 mt-3 mr-4"
    onClick={togglePasswordVisibility}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        S'inscrire
      </button>
      <Link  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  mx-20 focus:shadow-outline"
                                          to="/login"
                                        >
                                          Se Connecter   
                                        </Link>
    </form>
    </div>
    </>
  );
}



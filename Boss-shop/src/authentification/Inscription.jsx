import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import profil from "../assets/profil.png";
import ImagetoBase64 from "../utility/ImagetoBase64";
import toast from "react-hot-toast";

export default function Inscription() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    motDePasse: "",
    confirmationMotDePasse: "",

    images:"",
  });
console.log(data)
  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleOnchange =(e) =>{
    const { name, value } = e.target;
    setData((prev)=>{return{...prev, [name]: value}});
  }

  const handleuploadprofile = async (event) => {
    const data = await ImagetoBase64(event.target.files[0]);
    console.log(data);

   setData ( (prev) => { return {...prev, images: data } });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nom, prenom, email, telephone, motDePasse, confirmationMotDePasse } =data;

    if (
      nom &&
      prenom &&
      email &&
      telephone &&
      motDePasse &&
      confirmationMotDePasse
    ) {
      if (motDePasse === confirmationMotDePasse) {
        
        const fetchdata = await fetch(`${import.meta.env.VITE_API_SERVER}/inscription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            data
          ),
        }

          );
       const datares = await fetchdata.json();
       console.log(datares);

    
   // alert(datares.message);
   toast.success(datares.message);
   if(datares.alert){
    navigate("/login");
   }
  

      } else {
        toast.error("Le mot de passe est différent");
      }
    } else { 
      toast.error("Veuillez remplir tous les champs");
    }
  };
  console.log(`${import.meta.env.VITE_APP_SERVER}`);

  return (
    <>
      <div className="p-3 w-full h-screen md:p-4">
        <div className=" w-full  max-w-sm bg-white  m-auto flex flex-col p-4">
          <div className="w-20 overflow-hidden h-20 rounded-full drop-shodow-md shadow-md m-auto relative">
            <img
              src={data.images ? data.images : profil}
              alt="logo"
              className="w-full h-full"
            />
            <label htmlFor="profilname">
              <div className="absolute bottom-0  h-1/2 bg-slate-500 bg-opacity-20 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload </p>
              </div>
              <input
                type="file"
                id="profilname"
                className="hidden"
                
                onChange={handleuploadprofile}
                accept="image/*"
              />
            </label>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-md mx-auto bg-white rounded w-full"
          >
            <div className="mb-4">
              <label
                htmlFor="nom"
                className="block text-gray-700 font-bold mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={data.nom}
                onChange={(event) =>
                  setData({ ...data, nom: event.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="prenom"
                className="block text-gray-700 font-bold mb-2"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={data.prenom}
                onChange={(event) =>
                  setData({ ...data, prenom: event.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="telephone"
                className="block text-gray-700 font-bold mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={data.telephone}
                onChange={(event) =>
                  setData({ ...data, telephone: event.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="motDePasse"
                className="block text-gray-700 font-bold mb-2"
              >
                Mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                id="motDePasse"
                name="motDePasse"
                value={data.motDePasse}
                onChange={(event) =>
                  setData({ ...data, motDePasse: event.target.value })
                }
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
              <label
                htmlFor="confirmationMotDePasse"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirmation du mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                id="confirmationMotDePasse"
                name="confirmationMotDePasse"
                value={data.confirmationMotDePasse}
                onChange={(event) =>
                  setData({
                    ...data,
                    confirmationMotDePasse: event.target.value,
                  })
                }
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              S'inscrire
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mx-2 sm:mx-20 focus:shadow-outline"
              to="/login"
            >
              Se Connecter
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

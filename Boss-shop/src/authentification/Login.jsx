import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import profil from "../assets/profil.png";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/UserSlice";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",

    motDePasse: "",
  });
  const navigate = useNavigate();

  const userData = useSelector((state) => state);

  console.log(userData.user);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, motDePasse } = data;
    if (email && motDePasse) {
      const fetchdata = await fetch(
        `${import.meta.env.VITE_API_SERVER}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const response = await fetchdata.json();
      console.log(response);

      toast.success(userData.user.prenom + " " + response.message);

      if (response.alert) {
        setTimeout(() => {
          dispatch(loginRedux(response));
          navigate("/");
        }, 3000);
      }
      console.log(userData);
    } else {
      toast.error("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="p-3 w-full h-screen md:p-4">
      <div className=" w-full  max-w-sm bg-white  m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shodow-md shadow-md m-auto">
          <img src={profil} alt="logo" className="w-full" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded w-full"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Nom d'utilisateur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                value={data.motDePasse}
                onChange={(e) =>
                  setData({ ...data, motDePasse: e.target.value })
                }
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
              type="submit"
            >
              Se connecter
            </button>
            <p>
              J'ai pas de compte ...
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/inscription"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

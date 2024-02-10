import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle, BsCartDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logoutRedux } from "../../redux/UserSlice";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
const navigate =useNavigate();
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData || Object.keys(userData).length === 0) {
      setShowMenu(false);
    }
  }, [userData]);

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast.success("Vous êtes déconnecté");
    navigate("/login");

    console.log(userData);
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const cartItemNumber = useSelector((state)=>state.product.cartItem);
  console.log('first')
  console.log(cartItemNumber);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
    {/* desktop */}

    <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/659cd27328fc87774eb67bbf"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          
            <Link to="">{userData.nom}</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
            <BsCartDashFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {/* {cartItemNumber.length} */}0
              </div>
            </Link> 
          </div>

          <div
            className="text-2xl text-slate-600"
            onClick={handleShowMenu}
            role="button"
          >
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow">
              {userData && Object.values(userData).some(value => value.trim() !== '')   ? (
                
                <img src={userData.images} className="h-full w-full" alt="avatar" />
               
              ) : (
                <BsPersonCircle />
             
              )}
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col">
                {userData.email === import.meta.env.VITE_EMAIL_ADMIN &&  <Link to="product" className="whitespace-nowrap cursor-pointer px-2">
                  Nouveau produit
                </Link> }
               
                <br />
                {
                userData  && Object.values(userData).some(value => value.trim() !== '')   ? (
                  <p className="cursor-pointer text-white bg-red-500 px-2" onClick={handleLogout}>
                   Se Déconnexion {userData.prenom}
                  </p>
                ) : (
                  <Link to="login" className="whitespace-nowrap cursor-pointer px-2">
                    Login
                  </Link>
                )
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

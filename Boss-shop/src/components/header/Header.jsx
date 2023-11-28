import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { LogoutRedux} from "../../redux/UserSlice";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(LogoutRedux());

    toast.success("Vous êtes déconnecté");
   
  console.log(userData);
  }
  function handleShowmenu() {
    setShowMenu((prev) => !prev);
  }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:p-4 z-50">
      {/**desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to="/">
          <div className="h-12">
            <img src={logo} alt="logo-shop" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6  text-base  md:text-lg">
            <Link to="">Home</Link>
            <Link to="about">A propos</Link>
            <Link to="contact">Contact</Link>
            <Link to="menu">Menu</Link>
          </nav>

          <div className="text-2xl text-slate-600 cursor-pointer">
            <BsCartDashFill />
            <div className="absolute top-2 right-16 text-while bg-red-500 h-4 w-4 rounded-fulm-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-2xl text-slate-600" onClick={handleShowmenu}>
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow">
              {userData? (
                <img src={userData.images} className="h-full w-full" />
              ) : (
                <BsPersonCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md">
                <Link to="product" className="whitespace-nowrap cursor-pointer px-2">
                  Nouveau produit
                </Link>
                <br />
                {userData ? <p className="cursor-pointer text-white bg-red-500 px-2 " onClick={handleLogout}>déconnection</p> : <Link to="login" className="whitespace-nowrap cursor-pointer px-2">Login </Link>
            }
              </div>
            )}
          </div>
        </div>
      </div>

      {/**mobile */}
    </header>
  );
}

export default Header;

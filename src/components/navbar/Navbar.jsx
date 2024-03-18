import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="bg-slate-50 w-full p-4 md:p-0 md:flex items-center justify-between ">
      <div className="flex justify-between font-quicksand">
        <h1 className="mx-4 text-pPurple">Dos Anjos</h1>

        <button type="button" onClick={toggleMenu} className="md:hidden">
          {openMenu ? (
            <IoCloseOutline className="2xl" />
          ) : (
            <CiMenuBurger className="2xl" />
          )}
        </button>
      </div>
      <div className={`font-montserrat md:flex mx-2 ${openMenu ? 'flex h-screen overflow-y-hidden justify-center items-center  ' : 'hidden'}`}>
            <ul className="gap-4 md:flex text-pPurple ">
              <li className="my-8 md:my-4" onClick={closeMenu}><a href="#home" >Home</a></li>
              <li onClick={closeMenu} className="my-8 md:my-4"><a href="#projects">Projects</a></li>
              <li onClick={closeMenu} className="my-8 md:my-4"><a href="#aboutMe">Sobre Mim</a></li>
              <li onClick={closeMenu} className="my-8 md:my-4"><a href="#contact">Contato</a></li>
            </ul>
      </div>

      
    </div>
  );
};

export default Navbar;

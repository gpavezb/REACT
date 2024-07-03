import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function NavBar() {
  /* const [nombreDeVariable, function modificadorDeVariable]= useStat(valorinicialdelaVariable) String
     La convencion es que la funcion modificadora de variable se le anteponga un set más el nombre de variable, todo junto en el camelCase*/
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" /> {/* img[src=logo]  => emmet */}
        <p>Mi tienda en línea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* sinstaxsis de opeador ternario: evaluador ? siCumpleLaCondicion : siNoLaCumple*/}
          {/* sintaxis de opeador AND: evaluador && siCumpleLaCondicion */}
          {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre
          {menu === "hombre" && <hr />}
        </li>

        <li onClick={() => setMenu("mujer")}>
          Mujer
          {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niño")}>
          Niño
          {menu === "niño" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* div.nav-login-cart>button */}
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;

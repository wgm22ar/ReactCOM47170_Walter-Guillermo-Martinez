import CartWidget from "../CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h1> HC BEBIDAS </h1>
      <h3>Tu Tienda de Bebidas Preferida !! </h3>
      <div>
        <ul>
          <h3>Nuestros Productos</h3>
          <li>
            <button>Gaseosas</button>
            <button>Cervezas</button>
            <button>Bebidas Blancas</button>
            <button>Contacto</button>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;

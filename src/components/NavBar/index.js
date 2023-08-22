import CartWidget from "../CartWidget";
const NavBar = () => {
  return (
    <div>
      <header>
        <h1> HC BEBIDAS </h1>
        <h3>Tu Tienda de Bebidas Preferida !! </h3>
      </header>
      <nav class="d-flex flex-row justify-content-around ">
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Acerca de Nosotros
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">
                Quienes Somos
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Trabaja con Nosotros
              </button>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nuestros Productos
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">
                Cervezas
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Bebidas Blancas
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Gaseosas
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Aguas
              </button>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-success dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Contactanos
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">
                Llena el formulario
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <CartWidget />
    </div>
  );
};
export default NavBar;

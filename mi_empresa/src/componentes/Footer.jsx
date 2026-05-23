

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="text-uppercase">Navegación</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-light px-0" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light px-0" href="/productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light px-0" href="/servicios">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light px-0" href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Av. Siempre Viva 123, Ciudad
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +57 300 123 4567
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@miapp.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small>© 2026 Mi App. Todos los derechos reservados.</small>
          <div>
            <a className="text-light text-decoration-none me-3" href="/politica-privacidad">Política de privacidad</a>
            <a className="text-light text-decoration-none" href="/terminos">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
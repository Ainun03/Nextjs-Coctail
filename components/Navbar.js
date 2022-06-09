import style from './Header.module.css'

export default function Navbar() {
  return(
            <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top"
        >
            <div className="container">
            <a className="navbar-brand" href="#">Coctail . . .</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-right" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#layanan">Pesan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portofolio">Detail</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#tentang">Tentang</a>
                    </li>
                   
                </ul>
            </div>
            </div>
        </nav>

  )
}

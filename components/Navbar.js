import style from './Header.module.css'

export default function Navbar() {
  return(
            <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top"
        >
            <div class="container">
            <a class="navbar-brand" href="#">Coctail . . .</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#layanan">Pesan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portofolio">Detail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tentang">Tentang</a>
                    </li>
                   
                </ul>
            </div>
            </div>
        </nav>

  )
}

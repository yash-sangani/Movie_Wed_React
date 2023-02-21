import react from "react"
import "../css/Nav.css"



const Nav = () => {
    return (
        <>
            <div className="logo">
                <img src="../Logo.png" alt="" />
            </div>

            <div className="Search">
                <nav class="sear">
                    <div class="container-fluid">
                        <form class="d-flex justify-content-between" role="search">
                            <input class="form-control me-2 bg-dark text-success" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            <div className="main-nav">
                <ul class="nav justify">
                    <li class="nav-item">
                        <a class="nav-link text-success" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Movie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Series</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled text-warning">Disabled</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav


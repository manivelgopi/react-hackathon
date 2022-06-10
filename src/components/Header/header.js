// import 'bootstrap-icons/bootstrap-icons.svg';
import { APP_TITLE } from '../config';

export default function Header() {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                 <strong>{APP_TITLE}</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                 </li>
                   {/* <li className="nav-item">
                    <a className="nav-link" href="/component">Components</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/help">Help</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" to="#">Action</a></li>
                      <li><a className="dropdown-item" to="#">Another action</a></li>
                      <li><a className="dropdown-item" to="#">Something else here</a></li>
                    </ul>
                  </li> */}
                </ul>
              </div>

              {/* <form className="d-flex">
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form> */}

            </div>
          </nav>
        </header>
    );
  }

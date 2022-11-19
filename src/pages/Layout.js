import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav hidden>
        <ul>
          <li>
            <Link to="/">Teams</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
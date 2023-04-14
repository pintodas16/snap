import { Link, useLocation } from "react-router-dom";
import imageContext from "../context/imageContext";
import { useContext, useEffect } from "react";
function Navbar() {
  const { fetchImages } = useContext(imageContext);
  let { pathname } = useLocation();
  pathname = pathname.slice(1);
  // console.log(pathname);
  useEffect(() => {
    if (pathname) {
      fetchImages(pathname);
    }
  }, [pathname, fetchImages]);
  return (
    <div className="navbar">
      <ul className="links">
        <li>
          <Link className={`btn`} to="/bird">
            Bird
          </Link>
        </li>
        <li>
          <Link className={`btn`} to="/car">
            Car
          </Link>
        </li>
        <li>
          <Link className={`btn `} to="/mobile">
            Phone
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;

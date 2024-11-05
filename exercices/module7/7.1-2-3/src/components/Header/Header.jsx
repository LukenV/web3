import "./Header.css";
import {Link} from "react-router-dom";

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/cinema">Cinema</Link>
            <Link className="link" to="/movieslist">Movies list</Link>
        </nav>
    </header>
  );
};

export default Header;

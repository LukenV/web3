import { Outlet } from "react-router-dom";
import NavBar from "./Navbar.jsx";

const App = () => (
    <div>
        <NavBar />
        <Outlet />
    </div>
);

export default App;

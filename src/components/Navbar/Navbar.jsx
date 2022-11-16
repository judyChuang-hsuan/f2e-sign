import Logo from "@assets/logo.svg";
import "@components/Navbar/Navbar.less";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({text,link}) => {
  return (
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Link to={link}>
          <Button className="navBtn">
            {text}
          </Button>
        </Link>
      </nav>
  );
};

export default Navbar;

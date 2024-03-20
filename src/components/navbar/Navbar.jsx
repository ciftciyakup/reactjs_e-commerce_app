import React from "react";
import NavbarRight from "./navbarItem/NavbarRight";
import NavbarLeft from "./navbarItem/NavbarLeft";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;

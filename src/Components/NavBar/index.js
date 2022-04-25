import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Btn,
  Burg,
  CheckBox,
  Label,
  HamBurger,
  Bar1,
  Bar2,
  Bar3,
  Bar4,
} from "./navbar";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Burg className="burg">
        <CheckBox
          type={"checkbox"}
          id="checkbox1"
          className="checkbox1 visuallyHidden"
          onClick={() => setToggle(!toggle)}
        />
        <Label htmlFor="checkbox1">
          <HamBurger>
            <Bar1 toggle={toggle}></Bar1>
            <Bar2 toggle={toggle}></Bar2>
            <Bar3 toggle={toggle}></Bar3>
            <Bar4 toggle={toggle}></Bar4>
          </HamBurger>
        </Label>
      </Burg>
      <Nav isOpen={toggle}>
        <Link to={"/"} onClick={() => setToggle(!toggle)}>
          <Btn>Home</Btn>
        </Link>
        <Link to={"/projects"} onClick={() => setToggle(!toggle)}>
          <Btn>Projects</Btn>
        </Link>
        <Link to={"/contacts"} onClick={() => setToggle(!toggle)}>
          <Btn>Contact Me</Btn>
        </Link>
      </Nav>
    </div>
  );
};

export default NavBar;

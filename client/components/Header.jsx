import React, { useState } from "react";
import { APP_NAME } from "../config";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Link from "next/link";
import style from "../styles/default";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light={true} expand={"md"}>
                <Link href={"/"} style={style}>
                    {APP_NAME}
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href={"/signup"} style={style}>
                                Sign Up
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={"/login"} style={style}>
                                Login
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

import React, { Fragment, useEffect, useState } from "react";
import { APP_NAME } from "../config";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Link from "next/link";
import style from "../styles/default";
import { isAuth, logout } from "../actions/auth";
import Router from "next/router";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        isAuth() ? setAuth(true) : setAuth(false);
    }, []);

    return (
        <div>
            <Navbar color="light" light={true} expand={"md"}>
                <Link href={"/"} style={style}>
                    {APP_NAME}
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {!auth && (
                            <Fragment>
                                <NavItem className="mx-3">
                                    <Link href={"/signup"} style={style}>
                                        Sign Up
                                    </Link>
                                </NavItem>
                                <NavItem className="mx-3">
                                    <Link href={"/login"} style={style}>
                                        Login
                                    </Link>
                                </NavItem>
                            </Fragment>
                        )}
                        {auth && (
                            <NavItem
                                style={style}
                                onClick={() => {
                                    logout(() => Router.push("/login"));
                                }}
                            >
                                Logout
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

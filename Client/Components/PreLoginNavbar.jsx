import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button , ButtonGroup} from "@nextui-org/react";

export default function PreLoginNavbar() {
  return (
    <Navbar className="bg-green-400">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button className="bg-black text-white px-5 py-2 rounded-2xl shadow-2xl">
          Login
        </Button>
        </NavbarItem>
        <NavbarItem>
        <Button className="bg-black text-white px-5 py-2 rounded-2xl shadow-2xl">
          SignUp
        </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

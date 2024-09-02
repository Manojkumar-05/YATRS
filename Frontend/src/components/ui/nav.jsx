import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/YAR-Logo.jpg"


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-black text-white font-medium transition-transform duration-300 
      ${
        showNav ? "transform translate-y-full" : "transform -translate-y-full"
      }`}
    >
      <NavbarBrand className="text-[1.7rem] font-bold">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
          className="flex gap-2 justify-center items-center"
        >
          <img className="rounded-full w-10" src={logo} />
          YAR
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-8 transition-colors duration-1000"
        justify="end"
      >
        <NavbarItem>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#8a31c2dd] font-bold" : "text-white font-medium"
            }
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#8a31c2dd] font-bold" : "text-white font-medium"
            }
          >
            About
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#8a31c2dd] font-bold" : "text-white font-medium"
            }
          >
            Services
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#8a31c2dd] font-bold" : "text-white font-medium"
            }
          >
            Contact Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-8 justify-center items-center bg-black text-white">
        <NavbarMenuItem>
          <Link
            to="/"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            <div>Home</div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/about"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/services"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/contact"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/join"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            Join Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

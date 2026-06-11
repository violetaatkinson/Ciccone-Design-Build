import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { MobileBurger, MobileDropdown } from "./MobileMenu";

const links = [
	{ name: "Projects", href: "/projects" },
	{ name: "Services", href: "/services" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled ? "bg-[#0e0e0e]" : "bg-black/40 backdrop-blur-xl"
			}`}
		>
			<div className="flex items-center justify-between h-20 px-10 md:px-16">
				<Logo />
				<div className="hidden md:flex items-center gap-12">
					{links.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className="text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-[#8C7B6E] transition-colors duration-300"
						>
							{link.name}
						</Link>
					))}
				</div>
				<MobileBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
			<div className="h-[0.5px] bg-white/10" />
			<MobileDropdown
				links={links}
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
		</nav>
	);
};

export default Navbar;

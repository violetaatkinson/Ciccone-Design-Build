import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

export const MobileBurger = ({ menuOpen, setMenuOpen }) => (
	<button
		className="md:hidden text-white p-1"
		onClick={() => setMenuOpen(!menuOpen)}
	>
		<HiOutlineMenu size={24} />
	</button>
);

export const MobileDropdown = ({ links, menuOpen, setMenuOpen }) => (
	<div
		className={`md:hidden transition-all duration-300 ${
			menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
		}`}
	>
		<ul className="px-10 py-4">
			{links.map((link) => (
				<li key={link.name}>
					<Link
						to={link.href}
						onClick={() => setMenuOpen(false)}
						className="block py-3 text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-[#8C7B6E] transition-colors duration-200"
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</div>
);

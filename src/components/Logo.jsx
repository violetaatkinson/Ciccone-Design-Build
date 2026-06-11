import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="group">
			<span className="block text-base tracking-[0.15em] uppercase text-white font-semibold">
				Ciccone
			</span>
			<span className="block text-[11px] tracking-[0.3em] uppercase text-[#8C7B6E]">
				Design Build
			</span>
		</Link>
	);
};

export default Logo;

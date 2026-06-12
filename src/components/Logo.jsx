import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="group">
			<span className="block text-base tracking-[0.15em] uppercase text-white font-semibold">
				Ciccone
			</span>
			<span className="block text-[11px] tracking-[0.3em] uppercase text-[#C2A57A]/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
				Design Build
			</span>
		</Link>
	);
};

export default Logo;

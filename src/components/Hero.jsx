import heroImg from "../assets/imgs/bentley.jpg";

const GRID_LINES = [12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];

const Hero = () => {
	return (
		<section className="relative h-screen overflow-hidden">
			<div className="absolute inset-0">
				<img
					src={heroImg}
					alt="Ciccone Design Build"
					className="w-full h-[120%] object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
			</div>

			<div className="absolute inset-0 pointer-events-none">
				{GRID_LINES.map((left) => (
					<div
						key={left}
						className="absolute top-0 bottom-0 w-[0.5px] bg-white/[0.04]"
						style={{ left: `${left}%` }}
					/>
				))}
			</div>

			<div className="absolute top-20 left-0 right-0 h-[0.5px] bg-white/20" />

			{/* MOBILE */}
			<div className="relative h-full flex flex-col md:hidden px-6">
				<div className="pt-36">
					<span className="text-white/60 text-[13px] tracking-[0.35em] uppercase block text-center leading-6">
						Custom Home Design
					</span>
					<span className="text-white/60 text-[13px] tracking-[0.35em] uppercase block text-center leading-6">
						+ Construction
					</span>
				</div>

				<div className="flex-1 flex flex-col justify-center items-center">
					<h1 className="font-manrope font-extralight text-[66px] leading-[1.0] tracking-[-0.04em] text-white/85 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
						Built with
					</h1>
					<h1 className="font-manrope font-extralight text-[66px] leading-[1.0] tracking-[-0.04em] text-white/85 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
						Precision.
					</h1>
				</div>

				<div className="pb-16 flex flex-col items-center gap-6">
					<div className="text-center">
						<p className="text-white/75 text-[12px] tracking-[0.22em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
							Beverly Hills · Bel Air · Santa Monica
						</p>
						<p className="text-white/75 text-[12px] tracking-[0.22em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] mt-3">
							Pacific Palisades · Hollywood Hills
						</p>
					</div>
					<button
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="flex items-center gap-2 text-white/60 hover:text-[#8C7B6E] transition-colors duration-300"
					>
						<span className="text-[12px] tracking-[0.22em] uppercase">
							Explore
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 5v14" />
							<path d="m19 12-7 7-7-7" />
						</svg>
					</button>
				</div>
			</div>

			{/* DESKTOP */}
			<div className="relative h-full hidden md:flex flex-col justify-between px-10 lg:px-16">
				<div className="pt-32 lg:pt-36">
					<span className="text-white/60 md:text-sm lg:text-base tracking-[0.35em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] block text-left">
						Custom Home Design + Construction
					</span>
				</div>

				<div className="flex-1 flex flex-col justify-center mt-6 2xl:-mt-20">
					<h1 className="font-manrope font-extralight text-[clamp(90px,9vw,150px)] 2xl:text-[160px] leading-[0.86] tracking-[-0.055em] text-white/85">
						Built with
					</h1>
					<h1 className="font-manrope font-extralight text-[clamp(90px,9vw,150px)] 2xl:text-[160px] leading-[0.86] tracking-[-0.055em] text-white/85 text-right pr-8">
						Precision.
					</h1>
				</div>

				<div className="pb-8 lg:pb-10 2xl:pb-24 flex items-end justify-between">
					<div>
						<p className="text-white/75 text-sm 2xl:text-base tracking-[0.22em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
							Beverly Hills · Bel Air · Santa Monica
						</p>
						<p className="text-white/75 text-sm 2xl:text-base tracking-[0.22em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] mt-3">
							Pacific Palisades · Hollywood Hills
						</p>
					</div>
					<button
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="flex items-center gap-3 text-white/60 hover:text-[#8C7B6E] transition-colors duration-300"
					>
						<span className="text-base 2xl:text-lg tracking-[0.4em] uppercase">
							Explore
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 5v14" />
							<path d="m19 12-7 7-7-7" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;

"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/author", label: "Author Section" },
	{
		label: "Committee",
		dropdown: [
			{ href: "/organizing-committee", label: "Organizing Committee" },
			{ href: "/advisory-committee", label: "Advisory Committee" },
			{ href: "/scientific-committee", label: "Scientific Committee" },
			{ href: "/Resource-person-list", label: "Resource Person List" },
		],
	},
	{ href: "/register", label: "Registration" },
	{ href: "/publications", label: "Publications" },
	{
		label: "Sponsors",
		dropdown: [
			{ href: "/call-for-sponsor", label: "Call for Sponsor" },
			{ href: "/sponsors", label: "Sponsors & Partners" },
		],
	},
	{ href: "/key-note-speakers", label: "Keynote Speakers" },
	{
		label: "Reach Us",
		dropdown: [
			{ href: "/contact-us", label: "Contact Us" },
			{ href: "/Venue", label: "Venue" },
			{ href: "/Accomodation", label: "Accomodation" },
			{ href: "/FAQ", label: "FAQ" },
		],
	},
];

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	return (
		<>
			<nav className="fixed top-0 left-0 w-full z-25 backdrop-blur-xl bg-[rgba(221,237,244,0.45)] px-4 sm:px-8 py-4 flex items-center justify-between">
				<div className="flex items-center">
					<Image
						src="/logo.png"
						alt="Logo"
						width={40}
						height={40}
						className="rounded-md mr-3 sm:mr-4"
					/>
					<span
						className="text-lg sm:text-2xl font-bold tracking-widest drop-shadow uppercase font-sans text-[#1976d2]"
						style={{
							WebkitTextStroke: "1px rgb(3, 13, 17)",
							textStroke: "1px #38bdf8",
						}}
					>
						WET-WAR 2025
					</span>
				</div>

				<ul className="hidden md:flex space-x-2 sm:space-x-4 font-medium items-stretch h-[38px]">
					{navLinks.map((link) =>
						link.dropdown ? (
							<li key={link.label} className="relative flex items-stretch">
								<button
									type="button"
									className="relative flex items-center h-full px-2 py-1 rounded-md bg-gradient-to-br from-[#64b5f6]/80 to-[#1976d2]/80 text-white font-semibold shadow hover:from-[#1976d2]/90 hover:to-[#64b5f6]/90 transition-all cursor-pointer text-sm"
									style={{ minWidth: "70px", textAlign: "center" }}
									onClick={() =>
										setOpenDropdown(openDropdown === link.label ? null : link.label)
									}
									onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
								>
									{link.label}
									<svg
										className={`ml-1 w-3 h-3 transition-transform duration-200 ${
											openDropdown === link.label ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{openDropdown === link.label && (
									<ul
										className="absolute left-0 mt-0 w-44 rounded-md shadow-lg border border-[#b3e0fc] z-50"
										style={{ top: "100%", background: "#e3f2fd" }}
									>
										{link.dropdown.map((item) => (
											<li key={item.href}>
												<Link
													href={item.href}
													className="block px-3 py-1 text-[#1976d2] hover:bg-[#bbdefb] hover:text-[#0a192f] rounded transition cursor-pointer text-sm"
													onMouseDown={(e) => e.preventDefault()}
													onClick={() => setOpenDropdown(null)}
												>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						) : (
							<li key={link.href} className="flex items-stretch">
								<Link
									href={link.href}
									className="relative flex items-center h-full px-2 py-1 rounded-md bg-gradient-to-br from-[#64b5f6]/80 to-[#1976d2]/80 text-white font-semibold shadow hover:from-[#1976d2]/90 hover:to-[#64b5f6]/90 transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#4fc3f7] after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left cursor-pointer text-sm"
									style={{ minWidth: "70px", textAlign: "center" }}
								>
									{link.label}
								</Link>
							</li>
						)
					)}
				</ul>

				<button
					onClick={() => setNavOpen(!navOpen)}
					aria-label="Toggle navigation"
					className={`md:hidden p-2 rounded-full transition duration-200 shadow-md focus:outline-none ${
						navOpen ? "bg-[#1976d2]/90 text-white" : "bg-white/80 text-[#0277bd]"
					}`}
				>
					<svg
						className={`w-7 h-7 transition-transform duration-300 ${
							navOpen ? "rotate-90" : ""
						}`}
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						{navOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
						)}
					</svg>
				</button>
			</nav>

			{/* Decorative lines below navbar */}
			<div className="w-full h-[2px] bg-sky-600 fixed left-0 top-[68px] z-20"></div>
			<div className="w-full h-[2px] bg-[#0D47A1] fixed left-0 top-[70px] z-20"></div>
			<div className="w-full h-[2px] bg-[#0a192f] fixed left-0 top-[72px] z-20"></div>

			{/* Mobile Nav Menu */}
			{navOpen && (
				<div className="fixed top-16 left-0 w-full z-40 backdrop-blur-xl bg-[rgba(90,200,250,0.95)] flex flex-col items-center py-4 md:hidden animate-fade-in-down">
					<ul className="w-full flex flex-col items-center space-y-4 font-medium">
						{navLinks.map((link) =>
							link.dropdown ? (
								<li key={link.label} className="w-full text-center">
									<button
										type="button"
										className="block py-2 px-4 w-full rounded-lg bg-gradient-to-br from-[#64b5f6]/80 to-[#1976d2]/80 text-white font-semibold shadow hover:from-[#1976d2]/90 hover:to-[#64b5f6]/90 transition relative cursor-pointer"
										onClick={() =>
											setOpenDropdown(openDropdown === link.label ? null : link.label)
										}
									>
										{link.label}
										<svg
											className={`ml-2 w-4 h-4 transition-transform duration-200 ${
												openDropdown === link.label ? "rotate-180" : ""
											}`}
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									{openDropdown === link.label && (
										<ul className="mt-2 w-full bg-[#e3f2fd] rounded-lg shadow-lg border border-[#b3e0fc] z-50">
											{link.dropdown.map((item) => (
												<li key={item.href}>
													<Link
														href={item.href}
														className="block px-4 py-2 text-[#1976d2] hover:bg-[#bbdefb] hover:text-[#0a192f] rounded transition cursor-pointer"
														onMouseDown={(e) => e.preventDefault()}
														onClick={() => {
															setNavOpen(false);
															setOpenDropdown(null);
														}}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							) : (
								<li key={link.href} className="w-full text-center">
									<Link
										href={link.href}
										className="block py-2 px-4 w-full rounded-lg bg-gradient-to-br from-[#64b5f6]/80 to-[#1976d2]/80 text-white font-semibold shadow hover:from-[#1976d2]/90 hover:to-[#64b5f6]/90 transition relative after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:w-2/3 after:h-0.5 after:bg-[#4fc3f7] after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left cursor-pointer"
										onClick={() => setNavOpen(false)}
									>
										{link.label}
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;

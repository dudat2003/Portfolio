"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNpm, DiPostgresql } from "react-icons/di";
import {
	FaCss3,
	FaDocker,
	FaEnvelope,
	FaGit,
	FaGithub,
	FaHtml5,
	FaLinkedin,
	FaNodeJs,
	FaPhone,
	FaReact,
} from "react-icons/fa6";
import {
	RiJavascriptFill,
	RiNextjsFill,
	RiTailwindCssFill,
} from "react-icons/ri";
import {
	SiExpress,
	SiJavascript,
	SiPrettier,
	SiTypescript,
	SiVercel,
	SiPrisma,
	SiStripe,
	SiBun,
	SiVite,
} from "react-icons/si";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const CONTACT_LINKS = [
	{
		name: "Email",
		content: "dudinhdat.03@gmail.com",
		href: "mailto:dudinhdat.03@gmail.com.com",
		icon: <FaEnvelope height={"50px"} />,
	},
	{
		name: "Phone",
		content: "0971398613",
		href: "tel:0971398613",
		icon: <FaPhone height={"50px"} />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/dudinhdat03/",
		content: "My LinkedIn Profile",
		icon: <FaLinkedin height={"50px"} />,
	},
	{
		name: "GitHub",
		href: "https://github.com/dudat2003",
		content: "My GitHub Account",
		icon: <FaGithub height={"50px"} />,
	},
];

const TOOLS = [
	{
		name: "JavaScript",
		content: "JavaScript is a high-level, interpreted programming language",
		icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
		color: "#f0db4f",
	},
	{
		name: "TypeScript",
		content: "TypeScript is a superset of JavaScript that compiles to plain JS",
		icon: <SiTypescript size={"50px"} color={"#007acc"} />,
		color: "#007acc",
	},
	{
		name: "HTML",
		content: "HTML is the standard markup language for creating web pages",
		icon: <FaHtml5 size={"50px"} color="#e34c26" />,
		color: "#e34c26",
	},
	{
		name: "CSS",
		content:
			"CSS is a stylesheet language used for describing the presentation of a document",
		icon: <FaCss3 size={"50px"} color="#563d7c" />,
		color: "#563d7c",
	},
	{
		name: "React",
		content: "React is a JavaScript library for building user interfaces",
		icon: <FaReact size={"50px"} color="#61dafb" />,
		color: "#61dafb",
	},
	{
		name: "Next.js",
		content: "Next.js is a React framework for production",
		icon: <RiNextjsFill size={"50px"} color="#fff" />,
		color: "#000000",
	},
	{
		name: "Tailwind CSS",
		content: "Tailwind CSS is a utility-first CSS framework",
		icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
		color: "#06b6d4",
	},
	{
		name: "Node.js",
		content:
			"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
		icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
		color: "#6cc24a",
	},
	{
		name: "Express",
		content:
			"Express is a minimal and flexible Node.js web application framework",
		icon: <SiExpress size={"50px"} color="#fff" />,
		color: "#000000",
	},
	{
		name: "PostgreSQL",
		content:
			"PostgreSQL is a powerful, open source object-relational database system",
		icon: <DiPostgresql size={"50px"} color="#336791" />,
		color: "#336791",
	},
	{
		name: "MongoDB",
		content:
			"MongoDB is a source-available cross-platform document-oriented database",
		icon: <DiMongodb size={"50px"} color="#4db33d" />,
		color: "#4db33d",
	},
	{
		name: "Git",
		content: "Git is a distributed version control system",
		icon: <FaGit size={"50px"} color="#f05032" />,
		color: "#f05032",
	},
	{
		name: "GitHub",
		content: "GitHub is a web-based version control and collaboration platform",
		icon: <FaGithub size={"50px"} color="#fff" />,
		color: "#000000",
	},
	{
		name: "Prettier",
		content: "Prettier is an opinionated code formatter",
		icon: <SiPrettier size={"50px"} color="#f7b93c" />,
		color: "#f7b93c",
	},
	{
		name: "NPM",
		content: "NPM is a package manager for the JavaScript programming language",
		icon: <DiNpm size={"50px"} color="#CB3837" />,
		color: "#CB3837",
	},
	{
		name: "Prisma",
		content: "Prisma is a next-generation ORM for Node.js and TypeScript",
		icon: <SiPrisma size={"50px"} color="#2d3748" />,
		color: "#2d3748",
	},
	{
		name: "Docker",
		content:
			"Docker is a platform for developing, shipping, and running applications",
		icon: <FaDocker size={"50px"} color="#2496ed" />,
		color: "#2496ed",
	},
	{
		name: "Stripe",
		content: "Stripe is a payment processing platform for internet businesses",
		icon: <SiStripe size={"50px"} color="#635bff" />,
		color: "#635bff",
	},
	{
		name: "Bun",
		content: "Bun is a fast all-in-one JavaScript runtime",
		icon: <SiBun size={"50px"} color="#fbf0df" />,
		color: "#fbf0df",
	},
	{
		name: "Vite",
		content:
			"Vite is a build tool that provides a faster and leaner development experience",
		icon: <SiVite size={"50px"} color="#646cff" />,
		color: "#646cff",
	},
	{
		name: "Vercel",
		content: "Vercel is a platform for frontend developers",
		icon: <SiVercel size={"50px"} color="#fff" />,
		color: "#000000",
	},
];

function Page() {
	const [toolsLoaded, setToolsLoaded] = useState(false);
	useEffect(() => {
		setToolsLoaded(true);
	}, []);
	return (
		<div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20 h-full">
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-5 h-full">
				<aside className="lg:col-span-2 h-full">
					<div
						className="p-4 md:p-8 lg:p-10 rounded-xl border-[.5px] border-zinc-600 h-full"
						style={{
							backdropFilter: "blur(2px)",
						}}
					>
						<div className="flex flex-row lg:flex-col items-center ">
							<div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
								<Image
									className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
									alt="me"
									src="/assets/me.jpg"
									width={200}
									height={200}
								/>
							</div>
							<div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
								<p className="text-center text-xl">Dat Du Dinh</p>
								<div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
									Web Developer
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<hr className="my-10 border-zinc-600" />
							<ul className="flex flex-col gap-3">
								{CONTACT_LINKS.map((link) => (
									<li key={link.name}>
										<a
											className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
											href={link.href}
										>
											<div className="w-8">{link.icon}</div>
											<div className="flex flex-col">
												<div className="text-sm">{link.name}</div>
												<div className="text-xs text-zinc-500">
													{link.content}
												</div>
											</div>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</aside>
				<main className="lg:col-span-3 h-full">
					<div
						className="p-10 border-[.5px] rounded-xl border-zinc-600 h-full"
						style={{ backdropFilter: "blur(2px)" }}
					>
						<h1 className="text-3xl mb-10 lg:md-20">About me</h1>
						<p className="mb-10 text-roboto">
							Hey there! I&apos;m Dat, a Frontend Developer specializing in
							building highly scalable and resilient web applications using
							React.js and Next.js. My journey focuses on transforming complex
							requirements into clean, high-performance user interfaces. I
							thrive on solving architectural challenges, ensuring code quality,
							and delivering exceptional user experiences.
						</p>
						<p className="mb-10">
							With hands-on experience in monorepo environments and developing
							reusable Design Systems, I prioritize long-term maintainability. I
							have contributed to diverse platforms, ranging from AI content
							creation tools and SEO-optimized marketing sites to complex{" "}
							Telegram MiniApp games involving wallet and exchange systems.
						</p>
						<h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
						<div className="mb-5">
							{!toolsLoaded ? (
								<p className="h-[100px]"></p>
							) : (
								<Splide
									options={{
										type: "loop",
										interval: 2000,
										autoplay: true,
										pagination: false,
										speed: 2000,
										perPage: 5,
										perMove: 1,
										rewind: true,
										easing: "cubic-bezier(0.25, 1, 0.5, 1)",
										arrows: false,
									}}
									aria-label="My Favorite Images"
								>
									{TOOLS.reverse().map((tool) => (
										<SplideSlide key={tool.name}>
											<div
												key={tool.name}
												className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
											>
												{tool.icon}
											</div>
										</SplideSlide>
									))}
								</Splide>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Page;

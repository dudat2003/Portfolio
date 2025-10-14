const config = {
	title: "Dat Du Dinh | Front-end Web Developer",
	description: {
		long: "Explore the portfolio of Dat, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
		short:
			"Discover the portfolio of Dat, a full-stack developer creating interactive web experiences and innovative projects.",
	},
	keywords: [
		"Dat",
		"portfolio",
		"front-end developer",
		"creative technologist",
		"web development",
		"3D animations",
		"interactive websites",
		"web design",
		"GSAP",
		"React",
		"Next.js",
		"Spline",
		"Framer Motion",
	],
	author: "Dat Du Dinh",
	email: "dudinhdat.03@gmail.com",
	site: process.env.NEXT_PUBLIC_SITE_URL,

	get ogImg() {
		return `${this.site}/assets/seo/og-image.png`;
	},
	social: {
		twitter: "https://x.com/dudinhdat_03",
		linkedin: "https://www.linkedin.com/in/dudinhdat03/",
		instagram: "https://www.instagram.com/dudinhdat_03",
		facebook: "https://www.facebook.com/dudinhdat.03",
		github: "https://github.com/dudat2003",
	},
};
export { config };

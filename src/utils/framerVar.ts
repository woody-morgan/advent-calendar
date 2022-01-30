export const framerVar = {
	default: {
		animate: {
			scale: [1, 2, 2, 1, 1],
			rotate: [0, 0, 270, 270, 0],
			borderRadius: ["20%", "20%", "50%", "50%", "20%"],
		},
		variants: {
			open: { opacity: 1, x: 0 },
			closed: { opacity: 0, x: "-100%" },
		},
	},
};

// for Page Transition
export const framerPageTrans = {
	initial: {
		opacity: 0,
		x: "-100vw",
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.1, 1, 0.88, 1],
		},
	},
};

// for Mobile SideMenu Component
export const framerSideNav = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const framerSidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const framerSideMenuItem = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

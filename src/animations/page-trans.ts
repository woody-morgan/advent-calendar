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
		y: "100vh",
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

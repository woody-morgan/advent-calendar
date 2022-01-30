import { framerPageTrans } from "@src/utils/framerVar";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

function PageTransition({ children }: { children: ReactNode }) {
	return (
		<AnimatePresence>
			<motion.div {...framerPageTrans}>{children}</motion.div>
		</AnimatePresence>
	);
}

export default PageTransition;

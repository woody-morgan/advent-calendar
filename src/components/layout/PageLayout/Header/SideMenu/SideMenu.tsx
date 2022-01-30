import React, { FocusEventHandler, useCallback, useRef } from "react";
import { framerSidebar } from "@src/utils/framerVar";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@src/core/hooks/useDimensions";
import SideNavigation from "./SideMenuNav";
import SideMenuToggle from "./SideMenuToggle";
import styles from "./SideMenu.module.scss";

interface ISideMenuProps {
	onClose: () => void;
}

const SideMenu = ({ onClose }: ISideMenuProps) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef<HTMLElement>(null);
	const { height } = useDimensions(containerRef);

	const handleBlur: FocusEventHandler = useCallback(
		(e) => {
			if (!e.currentTarget.contains(e.relatedTarget as Node)) {
				onClose?.();
			}
		},
		[onClose],
	);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className={styles.container}
			onBlur={handleBlur}
		>
			<motion.div className={styles.background} variants={framerSidebar} />
			<SideNavigation />
			<SideMenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default SideMenu;

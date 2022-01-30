import React from "react";
import { motion } from "framer-motion";
import { framerSideMenuItem, framerSideNav } from "@src/utils/framerVar";
import styles from "./SideMenu.module.scss";

interface ISideMenuProps {
	i: number;
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const itemIds = [0, 1, 2, 3, 4];

const SideMenuItem = ({ i }: ISideMenuProps) => {
	const style = { border: `2px solid ${colors[i]}` };
	return (
		<motion.li
			variants={framerSideMenuItem}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<div className={styles.icon_placeholder} style={style} />
			<div className={styles.text_placeholder} style={style} />
		</motion.li>
	);
};

const SideNavigation = () => {
	return (
		<motion.ul variants={framerSideNav}>
			{itemIds.map((i) => (
				<SideMenuItem i={i} key={`side-nav-${i}`} />
			))}
		</motion.ul>
	);
};

export default SideNavigation;

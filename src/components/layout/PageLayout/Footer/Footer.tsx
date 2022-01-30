import { SocialIcon } from "react-social-icons";
import styles from "./Footer.module.scss";

interface Props {}

const Footer = (props: Props) => {
	return (
		<div className={styles.bg}>
			<footer className={styles.container}>
				<div className={styles.content}>
					<div className={styles.item}>
						<h5>Zeropage</h5>
						<h5>Contact : zeropage@zeropage.org</h5>
						<h5>Chuang-ang Univ. Software Majoring</h5>
						<h5>© Copyright 2022 by Zeropage. All rights reserved</h5>
					</div>
				</div>
				<div className={styles.content}>
					<SocialIcon url="https://github.com" />
				</div>
			</footer>
		</div>
	);
};

export default Footer;

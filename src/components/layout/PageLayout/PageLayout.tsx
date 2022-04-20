import { FC, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./PageLayout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PageTransition from "./PageTransition/PageTransition";

interface Props {
	className?: string;
	fullWidth?: boolean;
	fixedHeight?: boolean;
	removeFooter?: boolean;
	enablePageTransition?: boolean;
}

const PageLayout: FC<Props> = ({
	className,
	children,
	fullWidth = false,
	fixedHeight = false,
	removeFooter = false,
	enablePageTransition = false,
}) => {
	const headerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headerHeight = headerRef.current?.clientHeight || 0;
		const footerHeight = footerRef.current?.clientHeight || 0;

		contentRef.current?.style.setProperty(
			"min-height",
			`${window.innerHeight - headerHeight - footerHeight}px`,
		);
	}, []);

	return (
		<main className={classNames(styles.container, className)}>
			<div ref={headerRef}>
				<Header />
			</div>

			<div
				ref={contentRef}
				className={classNames(styles.content, {
					[styles["full-width"]]: fullWidth,
					[styles["fixed-height"]]: fixedHeight,
				})}
			>
				{enablePageTransition ? (
					<PageTransition>{children}</PageTransition>
				) : (
					<>{children}</>
				)}
			</div>
			<div ref={footerRef}>{!removeFooter && <Footer />}</div>
		</main>
	);
};

export default PageLayout;

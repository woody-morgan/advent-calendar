import React, { FC } from "react";
import classNames from "classnames";
import styles from "./PageLayout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PageTransition from "./PageTransition/PageTransition";

interface Props {
	className?: string;
	fullWidth?: boolean;
	fixedHeight?: boolean;
	hideMobileHeader?: boolean;
	removeFooter?: boolean;
	backwardURL?: string;
	backwardEnabled?: boolean;
	primaryHeader?: boolean;
	enablePageTransition?: boolean;
}

const PageLayout: FC<Props> = ({
	className,
	children,
	fullWidth = false,
	fixedHeight = false,
	removeFooter = false,
	backwardURL = "/",
	backwardEnabled = false,
	enablePageTransition = false,
}) => {
	return (
		<main className={classNames(styles.container, className)}>
			{/* {fixedHeight && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )} */}
			<Header />
			<div
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
			{!removeFooter && <Footer />}
		</main>
	);
};

export default PageLayout;

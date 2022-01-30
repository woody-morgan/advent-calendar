import React, { useEffect, useRef } from "react";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";
import { PageLayout } from "@src/components/layout";
import useMouse from "@react-hook/mouse-position";
import styles from "./profile.module.scss";

const ProfilePage = () => {
	const shadowRef = useRef(null);
	const targetRef = useRef<HTMLDivElement>(null);
	const mouse = useMouse(shadowRef, {
		enterDelay: 100,
		leaveDelay: 100,
		fps: 60,
	});

	useEffect(() => {
		const { x, y } = mouse;
		const posX = x ? x - window?.innerWidth / 2 : 0;
		const posY = y ? y - window?.innerHeight / 2 : 0;

		targetRef?.current?.style.setProperty(
			"text-shadow",
			`
		    ${posX * 0.5}px ${posY * 0.5}px 0 rgba(200, 0, 0, 0.5),
		    ${posX * 0.5}px ${posY * -0.5}px 0 rgba(0, 200, 0, 0.5),
		    ${posX * -0.5}px ${posY * 0.5}px 0 rgba(0, 0, 200, 0.5),
		    ${posX * -0.5}px ${posY * -0.5}px 0 rgba(100, 100, 100, 0.5)
		  `,
		);
	}, [mouse]);

	const { search } = useLocation();
	const { name } = useParams();
	const query = queryString.parse(search);
	const detail = query.detail === "true";

	return (
		<PageLayout fullWidth enablePageTransition>
			<div ref={shadowRef} className={styles.shadow}>
				<h1 ref={targetRef}>About {name}</h1>
				{detail && "detail:blahblah"}
			</div>
		</PageLayout>
	);
};

export default ProfilePage;

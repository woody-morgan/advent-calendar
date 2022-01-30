import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNavigation.scss";

const MBNavigation = () => {
	return (
		<nav className="Nav-container">
			<div className="Nav-content">
				<NavLink to="/">
					<img src="/logo.png" alt="home" />
				</NavLink>
			</div>
			<div className="Nav-content">
				<NavLink to="/account">
					<img src="/assets/account.svg" alt="account" />
				</NavLink>
			</div>
			<div className="Nav-content">
				<NavLink to="/noti">
					<img src="/assets/notification.svg" alt="noti" />
				</NavLink>
			</div>
			<div className="Nav-content">
				<NavLink to="/star">
					<img src="assets/star.svg" alt="star" />
				</NavLink>
			</div>
		</nav>
	);
};

export default MBNavigation;

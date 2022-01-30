import { useEffect, useState } from "react";
import _ from "lodash";

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState<{
		width?: number;
		height?: number;
	}>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		const handleResize = _.throttle(() => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}, 1000);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

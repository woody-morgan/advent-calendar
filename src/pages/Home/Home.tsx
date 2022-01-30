import { FC } from "react";
import styles from "./home.module.scss";
import { PageLayout } from "@src/components/layout";
import { Calendar } from "@src/components/common";

const Home: FC = () => {
	return (
		<PageLayout enablePageTransition>
			<div className={styles.container}>
				<Calendar />
			</div>
		</PageLayout>
	);
};

export default Home;

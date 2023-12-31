import { MdPostAdd, MdMessage } from 'react-icons/md';

import styles from './MainHeader.module.css';
import React from 'react';

type PostProps = {
	// This is an anynomous function that returns a void or nothing
	onNewPost? : (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function MainHeader(props: PostProps) {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<button className={styles.button} onClick={props.onNewPost}>
					<MdPostAdd size={18} />
					New Post
				</button>
			</p>
		</header>
	)
}

export default MainHeader;
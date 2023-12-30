import React from 'react';
import styles from './Post.module.css';

export type PostProps = {
	author: string;
	body: string;

	onBodyChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onAuthorChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Sticky Note, we are using CSS Modules approach for this component
// It requires ComponentName.module.css, then we can import it as an object
function Post(props: PostProps) {
	return (
		<div className={styles.post}>
			<p className={styles.author}>{ props.author }</p>
			<p className={styles.text}>{ props.body }</p>
		</div>
	)
}

// Note to self, that this allows you to name the imported code as anything you want.
export default Post;
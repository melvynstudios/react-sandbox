// imports that start with use are React Hooks
import React from 'react';
import styles from './NewPost.module.css'

interface NewPostProps {
	onBodyChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onAuthorChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCancel?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

// You'll see htmlFor instead of For because TSX doesn't use For for this purpose
// Use the on keyword to add event handlers
function NewPost(props: NewPostProps) {

	function handleCancelNewPost() {

	}

	return (
		<form className={styles.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={props.onBodyChange} />
			</p>
			<p>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" required onChange={props.onAuthorChange} />
			</p>
			<p className={styles.actions}>
				<button type="button" onClick={handleCancelNewPost} >Cancel</button>
				<button>Submit</button>
			</p>
		</form>
	)
}

export default NewPost;
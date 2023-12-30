// imports that start with use are React Hooks
import styled from 'styled-components';
import { PostProps } from "./Post";

const StyledForm = styled.form`
	background-color: #6233b9;
	padding: 1rem;
	width: 20rem;

	label {
		display: block;
		margin-bottom: 0.05rem;
		color: #eadbfb;
		font-weight: bold;
	}

	input, textarea {
		display: block;
		width: 100%;
		font: inherit;
		padding: 0.5rem;
		border-radius: 6px;
		border: none;
		background-color: #c4a9e4;
		color: #28262c;
	}
`

const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;

	button {
		cursor: pointer,
		font: inherit;
		padding: 0.5rem 1.5rem;
		border: none,
		border-radius: 4px;
		background-color: #34036c;
		color: #e5d5f7;
	}

	button:hover {
		background-color: #23014a;
	}

	button[type='button'] {
		background-color: transparent;
	}

	button[type='button']:hover {
		color: #d1bee6;
	}
`

// You'll see htmlFor instead of For because TSX doesn't use For for this purpose
// Use the on keyword to add event handlers
function NewPost(PostProps: PostProps) {

	return (
		<StyledForm>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={PostProps.onBodyChange} />
			</p>
			<p>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" required onChange={PostProps.onAuthorChange} />
			</p>
		</StyledForm>
	)
}

export default NewPost;
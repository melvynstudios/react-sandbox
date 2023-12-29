// imports that start with use are React Hooks
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledForm = styled.form`
	background-color: #6233b9;
	padding: 1rem;
	width: 20rem;
	margin: 2rem auto;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

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
function NewPost() {
	// useState returns two elements
	// dataState[0] = current value
	// dataState[1] = function to update state
	const [ postBody, setPostBody ] = useState<string>('');
	function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
		// Use the set function to update the state data.
		setPostBody(event.target.value)
	}

	return (
		<StyledForm>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={changeBodyHandler} />
			</p>
			<p>{postBody}</p>
			<p>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" required />
			</p>
		</StyledForm>
	)
}

export default NewPost;
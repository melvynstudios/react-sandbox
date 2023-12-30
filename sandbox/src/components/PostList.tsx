import Post from "./Post";
import { PostProps } from "./Post";
import NewPost from "./NewPost";
import styled from 'styled-components';
import React, { useState } from 'react';

// Styled Components allows us to embed CSS into the tsx files like we do with VUE
const StyledList = styled.ul`
	list-style: none;
	max-width: 50rem;
	margin: 1rem auto;
	padding: 1rem 0;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(3, 30%);
	justify-content: center;
`;

// This will serve as the temporary state for now
const allPosts: PostProps[] = [
	{ author: "melvyn", body: "hey its me" },
	{ author: "bass guy", body: "I love bass" },
	{ author: "melvyn", body: "React is easy!" }
]

function PostList() {
	// useState returns two elements
	// dataState[0] = current value
	// dataState[1] = function to update state
	// const [ postBody, setPostBody ] = useState<string>('');
	// function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
		// Use the set function to update the state data.
		// setPostBody(event.target.value)
	// }
	const [newPostBody, setPostBody] = useState('')
	const [newPostAuthor, setAuthor] = useState('')

	function  bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setPostBody(event.target.value);
	}

	function  authorChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setAuthor(event.target.value);
	}
	return (
		<div>
			<NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
			<StyledList>
				<Post author={newPostAuthor} body={newPostBody}/>
				{allPosts.map((p, i) => (
					<Post key={i} author={p.author} body={p.body}/>
				))}
			</StyledList>
		</div>
	)

}

export default PostList;
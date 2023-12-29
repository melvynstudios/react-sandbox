import Post from "./Post";
import { PostProps } from "./Post";
import NewPost from "./NewPost";
import styled from 'styled-components';

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
	return (
		<div>
			<NewPost />
			<StyledList>
				{allPosts.map((p, i) => (
					<li key={i}>
						<Post author={p.author} body={p.body}/>
					</li>
				))}
			</StyledList>
		</div>
	)

}

export default PostList;
type PostProps = {
	author: string;
	body: string;
}

function Post(props: PostProps) {
	return <div>
		<p>{ props.author }</p>
		<p>{ props.body }</p>
	</div>
}

// Note to self, that this allows you to name the imported code as anything you want.
export default Post;
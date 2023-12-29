const names = ['Melvyn', 'Guy who plays BASS']

function Post() {
	// Add randomness to displaying my name
	const randName = Math.random() > 0.5 ? names[0] : names[1];
	return <div>
		<p>{ randName }</p>
		<p>React with Typescript is so groovy!</p>
	</div>
}

// Note to self, that this allows you to name the imported code as anything you want.
export default Post;
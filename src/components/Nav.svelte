<script>
	export let segment;
</script>

<style>
	nav {
		width: 100%;
		min-height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #0D577E;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		font-weight: 600;
	}

	/* [aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100%);
		height: 2px;
		background-color: #13334C;
		display: block;
		bottom: -1px;
	} */

	a {
		text-decoration: none;
		margin: 0.5rem 1rem;
		display: block;
		color: #e0f1ea;
		font-weight: 300;
		font-size: 1.2rem;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	</ul>
</nav>

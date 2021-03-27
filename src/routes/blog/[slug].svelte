<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	import {fade} from 'svelte/transition'
	import SectionTitle from '../../components/SectionTitle.svelte'
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	/* .content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	} */

	h3 {
		color: #E0F1EA;
		font-weight: 500;
		font-size: 1.05rem;
	}
	.content {
		color: #E0F1EA;
		width: 75%;
		font-size: 1.05rem;
	}

	a {
		color: #E0F1EA;
		text-decoration: none;
		transition: 0.1s;
	}
	a:hover{
		color: #13e7b2;
	}
	.border {
        border-bottom: 2px solid #13e7b2;
        width: 2rem;
        height: 1px;
        margin-bottom: 0.25rem;
    }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<content in:fade>
	<SectionTitle title={post.title}/>
	<h3>{post.subtitle}</h3>
	<div class="border"></div>
	<div class="content">
		{@html post.html}
	</div>
	<a href="/blog">Back to blogs</a>
</content>
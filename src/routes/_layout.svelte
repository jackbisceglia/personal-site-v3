<script>
	import Nav from '../components/Nav.svelte';
	import Heading from '../components/Heading.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
	let pageParameters = 'test'



</script>

<style>
	main {
		background-image: url({waves});
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: relative;
		max-width: 56em;
		padding: 2.5rem 0 0 0;
		background-color: transparent;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<Heading/>
	<slot></slot>
</main>
<script>
	import Intro from '../components/Intro.svelte';
	import SectionTitle from '../components/SectionTitle.svelte'
	import {slide, fly} from 'svelte/transition'
</script>

<svelte:head>
	<title>Jack Bisceglia: Welcome</title>
</svelte:head>

<SectionTitle title={"Welcome!"}/>

<content in:slide>
	<Intro />
</content>
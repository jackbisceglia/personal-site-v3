<script>
	import { stores } from '@sapper/app'
	const { page } = stores()
	let show = false

	$: {
		let params = $page.params
		if (params) {
			show = !params.hasOwnProperty('slug')
		}
	}

</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
		font-size: 3.25em;
		font-weight: 700;
		color: #13e7b2;
	}

	.sub {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.subtitle {
		color: #e0f1ea;
		margin: 0;
		padding: 0;
		font-weight: 300;
		font-size: 1.1rem;
	}
</style>


{#if show}
	<h1>Jack Bisceglia</h1>
	<div class="sub">
		<p class="subtitle">Computer Science @ <span>UMass Amherst</span></p>
		<p class="subtitle">MLH Fellow Spring 2021</p>
		<p class="subtitle">SWE Intern @ Nuance Summer 2021</p>
	</div>
{/if}
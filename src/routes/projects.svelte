<script>
	import SectionTitle from '../components/SectionTitle.svelte'
	import Project from '../components/Project.svelte'
	import trello from '../node_modules/images/tcmock-bd937cca6e30135d9e39741a93a9c266.png'
	import bttls from '../node_modules/images/battls-ef3f4a1496eca32ea8e286ae975768f6.png'
	import snkr from '../node_modules/images/SSMU-fd1384b964fa689d535dfe43a6d46e66.png'
	import sort from '../node_modules/images/sortifymock-9a001c82291cc9762d3733c5d2370197.png'
	import chess from '../node_modules/images/cp-4b3f853bb69adb3d23b13b2fdd9fbaf4.png'
import {fade, fly, scale, draw, slide } from 'svelte/transition'

	let makeProj = (title, link, techStack, para, repo) => {
		return {
			repoLink: repo,
			projTitle: title,
			imgLink: link,
			paragraph: para,
			stack: [...techStack],
			formatSkills: function(){
				return this.stack.join(', ')
			}
		}
	}

	let projects = [
		makeProj('Trello Clone', trello, ['React', 'Express', 'Node', 'PostgreSQL'], 'A fully functioning task management Web App, which supports personal Task Boards that separates overarching goals or topics from specific tasks.', 'https://github.com/jackbisceglia/trello-clone'), 
		makeProj('Battls', bttls, ['Typescript', 'React', 'Redux', 'Express', 'PostgreSQL'], 'A social media web app built to allow users to debate on topics of their choice via simple, persuasive, and capable polls.', 'https://github.com/jackbisceglia/battls'),
		makeProj('Sneaker Swipe', snkr, ['React', 'Spring Boot', 'AWS RDS', 'PostgreSQL'], 'A React and Spring Boot web application designed to allow users to share their thoughts on various pairs of shoes.', 'https://github.com/jackbisceglia/sneaker-swipe'),
		makeProj('Sort-ify', sort, ['JavaScript', 'HTML', 'CSS'], 'A static site written in Javascript that visualizes various sorting algorithms.', 'https://github.com/jackbisceglia/Sort-ify'),
		makeProj('Chess Dashboard', chess, ['Svelte', 'Chess.com public API'], "A profile dashboard for Chess.com statistics built entirely in Svelte and Chess.com's public API.", 'https://github.com/jackbisceglia/chess.comProfiler'),

	]
</script>

<style>

</style>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>
<br>
<content in:fade>
	<SectionTitle title={"Check Out My Portfolio"}/>
	{#each projects as  proj}
	<Project options={proj}/>`
	{/each}
</content>
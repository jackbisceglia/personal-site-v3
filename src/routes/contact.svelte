<script>
	import {fade, fly, scale, draw, slide } from 'svelte/transition'
	import SectionTitle from "../components/SectionTitle.svelte"
	

	let msg = {
		name: '',
		email: '',
		text: ''
	}
	const updateMessage = (value, type) => {
		msg = {...msg, [type]: value}
	}

	const sanitizeValue = (val) => {
		const capWord = (currVal) => {
			return `${currVal.charAt(0)}${currVal.slice(1)}`
		}
		let values =  val.split(" ")
		return values.map(curr => capWord(curr)).join(' ')
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let details = {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: sanitizeValue(msg.name),
				email: msg.email,
				body: msg.text
			}),
		}
		fetch('https://majestic-wind-cave-43322.herokuapp.com/contactForm/abc', details)
			.then(res => res.json())
			.then(data => console.log(data))

	}
</script>

<svelte:head>
	<title>Contact Me</title>
</svelte:head>

<style>
	* {
		color: #E0F1EA;
	}
	.grid-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.name, .email, .bottom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0.5rem 0;
		width: 100%;
	}
	.msg {
		min-height: 7rem;
	}
	input, textarea {
		height: 1.5rem;
		border-radius: 0.3rem;
		width: 35%;
		color: black;
		padding: 0 0.5rem;
		font-size: 1.05rem;
		background-color: #E0F1EA;
	}
	textarea {
		padding: 0.35rem;
		resize: none;
	}
	button {
		margin: 0.5rem 0;
		border-radius: 0.3rem;
		cursor: pointer;
		color: #112641;
		width: 15%;
		font-weight: 500;
	}

</style>

<br>

<content in:fade>
	<SectionTitle title={"Reach Out"}/>
	<form on:submit={(e) => handleSubmit(e)} class="grid-container">
		
		<div class="name">			
			<label for="">Name</label>
			<input on:change={(e) => updateMessage(e.target.value, 'name')} class="inputa" type="name">
		</div>
		
		<div class="email">
			<label for="">Email</label>
			<input on:change={(e) => updateMessage(e.target.value, 'email')} class="inputa" type="email">
		</div>

		<div class="bottom">
			<label for="">Message</label>
			<textarea on:change={(e) => updateMessage(e.target.value, 'text')} rows="1" cols="1" wrap="physical" name="comments" class="msg" type="text"></textarea>
		</div>
		<button>Submit</button>
	</form>
</content>
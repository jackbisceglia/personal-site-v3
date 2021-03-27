<script>
	import SectionTitle from '../components/SectionTitle.svelte'
	import EdSection from '../components/EdSection.svelte'
	import ExpSection from '../components/ExpSection.svelte'
	import SkillSection from '../components/SkillSection.svelte'

	let education = {
		school: "University of Massachusetts Amherst",
		degree: "Bachelors of Science",
		major: "Computer Science",
		GPA: 3.957,
		expectedGrad: {season: "Spring", year: 2023}
	}

	let makeExp = (company, position, term, points) => {
		return {
			company: company,
			position: position,
			term: term,
			bullets: points ? [...points] : undefined
		}
	}

	let makeSkill = (title, skills) => {
		return {
			skillType: title,
			skillArr: [...skills]
		}
	}

	let experiences = [
		makeExp('HubSpot', 'Incoming Software Engineer Co-Op', 'Fall 2021', undefined),
		makeExp('Nuance Communications', 'Incoming Software Engineer Intern', 'Summer 2021', undefined),
		makeExp('MLH', 'MLH Fellow', 'Spring 2021')
	]

	let skills = [
		makeSkill('Programming Languages', ['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML', 'CSS']),
		makeSkill('Web Technologies', ['React', 'Express', 'Spring Boot', 'Svelte', 'Flask']),
		makeSkill('Tooling/Other', ['Node.js', 'Git', 'REST', 'AWS RDS', 'PostgreSQL'])
	]
</script>

<svelte:head>
	<title>About</title>
</svelte:head>
<br>

<!-- EDUCATION SECTION -->
<SectionTitle title={"Education"}/>
<EdSection options={education}/>

<!-- EXPERIENCE SECTION -->
<SectionTitle title={"Experience"}/>
{#each experiences as exp}
	<ExpSection options={exp}/>
{/each}
<br>

<!-- SKILLS SECTION -->
<SectionTitle title={"Skills"}/>
{#each skills as skill}
	<SkillSection options={skill}/>
{/each}

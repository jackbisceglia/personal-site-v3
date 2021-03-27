// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'My First Blog',
		subtitle: 'What is this',
		slug: 'introduction',
		html: `
		<p>Welcome to my blog. This is where I'll be writing some short stuff concerning technology. I plan to write about what I'm working on in school, personal projects, and perhaps even more. This is my first attempt at a blog so I'll keep it short-</p>

		<pre><code>const jack = {\n    rendered = "welcome 🙏🏻"\n};\n> console.log(jack.rendered)\n\n "welcome 🙏🏻"</code></pre>
		`

	},
	
	{
		title: 'How to use Sapper',
		subtitle: 'What is this',
		slug: 'how-to-use-sapper',
		html: `
		<h2>Step one</h2>
		<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>
		
		<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
		cd my-app
		npm install # or yarn!
		npm run dev
		</code></pre>
		
		<h2>Step two</h2>
		<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>
		
		<h2>Step three</h2>
		<p>...</p>
		
		<h2>Step four</h2>
		<p>Resist overdone joke formats.</p>
		`
	},
	
	{
		title: 'Why the name?',
		subtitle: 'What is this',
		slug: 'why-the-name',
		html: `
		<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>
		
		<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
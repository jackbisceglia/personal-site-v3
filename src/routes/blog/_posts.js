// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');

const formatDate = (dateStr) => {
	const years = {
		'01' : "January",
		'02': "February",
		'03': "March",
		'04': "April",
		'05': "May",
		'06': "June",
		'07' : "July",
		'08': "August",
		'09': "September",
		'10': "October",
		'11': "November",
		'12': "December"
	}
	const [mnth, day, yr] = dateStr.split('/').map((curr, idx) => {
		if (idx === 0){
			return years[curr]
		}
		else {
			return curr;
		}
	});

	return `${mnth} ${day}, ${yr}`;
}


	

const posts = fs.readdirSync('./src/posts').map(postFilename => {
  const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
    encoding: 'utf8'
  });
  const postFrontMatter = frontMatter(postContent);
  return {
    title: postFrontMatter.attributes.title,
	date: formatDate(postFrontMatter.attributes.date),
	subtitle: postFrontMatter.attributes.subtitle,
    slug: postFrontMatter.attributes.slug,
    html: marked(postFrontMatter.body)
  }
});

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
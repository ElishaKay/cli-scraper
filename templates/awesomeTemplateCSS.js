exports.awesomeTemplateCSS = () => {
	return `
		<style>
			/* Typography imported from Google Fonts */
			@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:200,400');

			h1, h2, h3, h4, h5, h6 {
			  font-family: 'Playfair Display', serif;
			}

			p, a {
			  font-family: 'Source Sans Pro', sans-serif;
			}

			/* Generic styles */
			html {
			  scroll-behavior: smooth;
			}

			a {
			  background-color: goldenrod;
			  text-decoration: none;
			  color: white;
			  border-radius: .25rem;
			  text-align: center;
			  display: inline-block;
			  transition: all .3s;
			}

			a:hover {
			  opacity: .6;
			}

			/* Styles for the hero image */
			.hero {
			  /* Photo by mnm.all on Unsplash */
			  background: url('https://images.unsplash.com/photo-1518176258769-f227c798150e') center;
			  background-size: cover;
			  padding: 4rem 2rem;
			  /* grid styles */
			  display: grid;
			  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
			  align-items: center;
			}

			.hero > * {
			  color: white;
			}

			.hero > h1 {
			  font-size: 4rem;
			  padding-bottom: 1rem;
			}

			.hero > article > p {
			  font-size: 1.5rem;
			  font-weight: 200;
			}

			.hero > article > a {
			  padding: 1rem;
			  margin-top: .75rem;
			}

			/* the-images styles */
			.the-images {
			  padding: 2rem;
			}

			.the-images > ul {
			  list-style-type: none;
			  display: grid;
			  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			  grid-gap: 1rem;
			}

			.the-images > ul > li {
			  border: 1px solid #E2E2E2;
			  border-radius: .5rem;
			  word-wrap: break-word;
			}

			.the-images > ul > li > figure {
			  max-height: 220px;
			  overflow: hidden;
			  border-top-left-radius: .5rem;
			  border-top-right-radius: .5rem;
			  position: relative;
			}

			.the-images > ul > li > figure > img {
			  max-width: 120px;
			}

			.the-images > ul > li > p {
			  font-size: 1rem;
			  line-height: 1.5;
			  padding: 1rem .75rem;
			  color: #666666;
			}

			.the-images > ul > li > a {
			  padding: .5rem 1rem;
			  margin: .5rem;
			}

			/* footer */
			footer {
			  background-color: #333;
			  padding: .75rem;
			  color: white;
			  text-align: center;
			  font-size: .75rem;
			}
		</style>
	`
}
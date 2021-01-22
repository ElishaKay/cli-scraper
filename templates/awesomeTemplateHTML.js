exports.awesomeTemplateHTML = (images) => {
	const loadImages = () => {
		return images.map((imageURL, i) => `
            <li>
		        <figure>
		          <!-- Photo by Quentin Dr on Unsplash -->
		          <img src="${imageURL.split('./downloads')[1]}" alt="a nice little image">
		          <figcaption><h3>Billions upon billions</h3></figcaption>
		        </figure>
		        <p>
		          Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?
		        </p>
		        <a href="#">Visit Website</a>
	      </li>
        `).join('');
	}

	return `
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
		</head>
		<main class="wrapper">
		  <section class="hero">
		    <h1>You thirsty?</h1>
		    <article>
		      <p>Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
		      <a href="#breweries">Browse Breweries</a>
		    </article>
		  </section>
		  <section class="breweries" id="breweries">
		    <ul>
		      ${loadImages(images)}
		    </ul>
		  </section>
		</main>
		<footer>
		  <p>&copy; 2019. Made with ❤ and CSS Grid.</p>
		</footer>
	`
}
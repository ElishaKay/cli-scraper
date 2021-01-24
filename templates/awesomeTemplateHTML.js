exports.awesomeTemplateHTML = (images) => {
	console.log('images in html template', images);

	const loadImages = () => {
		return images.map((image, i) => `
            <li>
		        <figure>
		          <img src="${image.downloadedVersion}" alt="a nice little image">
		          <figcaption><h3>Billions upon billions</h3></figcaption>
		        </figure>
		        <p>
			          <b>url</b>: ${image.url}
			        <br>
			          <b>height</b>: ${image.height}
			        <br>
			          <b>width</b>: ${image.width}
			        <br>
			          <b>format</b>: ${image.type}
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
		      <p>Explore local the-images with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
		      <a href="#the-images">Browse The Data</a>
		    </article>
		  </section>
		  <section class="the-images" id="the-images">
		    <ul>
		      ${loadImages(images)}
		    </ul>
		  </section>
		</main>
		<footer>
		  <p>&copy; 2021. Made with ❤ and CSS Grid.</p>
		</footer>
	`
}
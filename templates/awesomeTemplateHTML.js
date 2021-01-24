exports.awesomeTemplateHTML = ({allFolders, images}) => {
	console.log('allFolders in HTML', allFolders);

	const loadOptions = () => {
		return allFolders.map((folder, i) => `
            <a href="/${folder}">${folder}</a>
        `).join('');
	}

	const loadImages = () => {
		return images.map((image, i) => `
            <li>
		        <figure>
		          <img src="${image.downloadedVersion}" alt="a nice little image">
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
		        <a href="#">To The Top</a>
	      </li>
        `).join('');
	}

	return `
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
		</head>
		<main class="wrapper">
		  <section class="hero">
		    <h1>Need more data?</h1>
		    <article>
		      <p>
		      	Scrape the images of any url and make them available here!
		      	After all, everybody needs data sometimes. 
		      </p>
		      ${loadOptions()}
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
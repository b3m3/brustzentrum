const webp = () => {
	const checkWebp = callback => {
		let webp = new Image();

		webp.onload = webp.onerror = () => callback(webp.height == 2);
		webp.src = 
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	};

	checkWebp(support => support == true ? document.body.classList.add('webp') :
		document.body.classList.add('no-webp'));
};


export default webp;
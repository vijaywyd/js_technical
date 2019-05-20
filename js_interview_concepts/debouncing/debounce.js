var counter = 0;
const fetchData = () => {
  // calls an API and gets Data
	console.log("Fetching data " + counter++);
}


const debounce = (fn, duration) => {
	let timer;

	return () => {
		clearTimeout(timer);
		timer = setTimeout( () => fetchData(), duration);
	}
}

const betterFunction = debounce(debounce, 3000);

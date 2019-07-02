/*
Prevent the function set with the setTimeout() to execute
Difference between the events; Last event is the starting point
Search bar
*/

var counter = 0;
const fetchData = () => {
  // calls an API and gets Data
	console.log("Fetching data " + counter++);
}


const debounce = (fn, duration) => {
	let timer;

	return () => {
		clearTimeout(timer);

		timer = setTimeout( () => fn(), duration);

	}
}

const betterFunction = debounce(fetchData, 3000);

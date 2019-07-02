/*
Time since last function call
eg : Shooting game, Track window resize, mouse scroll etc*/

var counter = 0;
const fetchData = () => {
  // calls an API and gets Data
	console.log("Fetching data " + counter++);
}


const throttle = (fn, duration) => {
  let flag = true;

  return () => {
    if(flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, duration)
    }
  }
}

const betterFunction = throttle(fetchData, 3000);

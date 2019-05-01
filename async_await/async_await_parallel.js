async function requests() {

  const usersRequest = fetch('https://reqres.in/api/users?page=2').then(r => r.json());
  const employeeRequest = fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());

  //Parallel requests
  const users = await usersRequest;
  const employees = await employeeRequest;

  //Sequential requests
  const users = await fetch('https://reqres.in/api/users?page=2').then(r => r.json());
  const employees  =await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());

  //Using promise.all for awaiting all requests to be completed
  const [users, employees] = await Promise.all([usersRequest, employeeRequest]);

  console.log(users);
  console.log(employees);
}

requests().catch(e => console.log("Error : " + e));

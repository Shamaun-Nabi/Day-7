const myFunc = async () => {
  let sendreq = fetch("https://jsonplaceholder.typicode.com/todos");
  let result = await sendreq;
  console.log(result.json());
  console.log(value);
};

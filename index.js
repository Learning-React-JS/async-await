import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Loaded!", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => console.log("Posts Loaded!", posts));
//   });

async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  console.log("users: ", users);

  console.log("post1: ", post1);
}

getData();

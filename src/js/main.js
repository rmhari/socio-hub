import { Dropdown } from "bootstrap";

const renderPost = (post) => {
  fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
    .then(response => response.json())
    .then(user => console.log(user))


  fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
    .then(response => response.json())
    .then(comments => console.log(comments))
}


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    renderPost(posts[0]);
})
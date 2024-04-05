import { Dropdown } from "bootstrap";

const postTemplate = document.getElementById( "postTemplate");
const postsContainer = document.getElementById("posts");



const renderPost = (post) => {
    const postContainer = postTemplate.content.cloneNode(true);
    postContainer.querySelector("h5").innerHTML = post.title;
    postContainer.querySelector("p").innerHTML = post.body;
    const commentsCount = postContainer.querySelector("div.d-flex.flex-row.muted-color");
    postsContainer.appendChild(postContainer);  

  fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
    .then(response => response.json())
    .then(user => console.log(user))


  fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
    .then(response => response.json())
    .then(comments => {
        commentsCount.innerHTML=  `${comments.length} comments`;
        console.log(comments);
        }
        )
}


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    renderPost(posts[0]);
})


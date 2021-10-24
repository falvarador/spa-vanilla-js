import ajax from "./helpers/ajax.js";
import wpApi from "./helpers/wp_api.js";

import Header from "./components/commons/Header.js";
import Loader from "./components/commons/Loader.js";
import PostCard from "./components/posts/PostCard.js";
import PostList from "./components/posts/PostList.js";

export default function App() {
  const d = document;
  const $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(PostList());
  $root.appendChild(Loader());

  ajax({
    url: wpApi.POSTS,
    success: (posts) => {
      let html = "";

      posts.forEach((post) => {
        html += PostCard(post);

        d.querySelector(".loader").style.display = "none";
        d.getElementById("posts").innerHTML = html;
      });
    },
  });
}

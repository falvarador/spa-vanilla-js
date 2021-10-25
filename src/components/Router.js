/* eslint-disable no-restricted-globals */

import ajax from "../helpers/ajax.js";
import wpApi from "../helpers/wp_api.js";

import { HideLoader } from "./commons/Loader.js";
import PostCard from "./posts/PostCard.js";

export default function Router() {
  const { hash } = location;
  const $posts = document.getElementById("posts");

  if (!hash || hash === "#/") {
    ajax({
      url: wpApi.POSTS,
      success: (posts) => {
        let html = "";

        posts.forEach((post) => {
          html += PostCard(post);

          document.getElementById("posts").innerHTML = html;
        });

        HideLoader();
      },
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Sección de búsqueda</h2>";
  } else if (hash === "#/contact") {
    $posts.innerHTML = "<h2>Sección de contacto</h2>";
  } else {
    $posts.innerHTML = "<h2>Sección del árticulo seleccionado</h2>";
  }
}

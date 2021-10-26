/* eslint-disable no-restricted-globals */

import { HideLoader } from "./commons/Loader.js";
import { MainTag } from "./Main.js";

import Post from "./posts/Post.js";
import Posts from "./posts/Posts.js";
import SearchPost from "./posts/SearchPost.js";

export default async function Router() {
  const { hash } = location;
  const $main = MainTag();

  if (!hash || hash === "#/") {
    await Posts();
  } else if (hash.includes("#/search")) {
    await SearchPost();
  } else if (hash === "#/contact") {
    $main.innerHTML = "<h2>Sección de contacto</h2>";
  } else {
    await Post();
  }

  HideLoader();
}

/* eslint-disable no-restricted-globals */

import { HideLoader } from "./commons/Loader.js";
import { MainTag } from "./Main.js";
import Post from "./posts/Post.js";
import Posts from "./posts/Posts.js";

export default async function Router() {
  const { hash } = location;
  const $main = MainTag();

  if (!hash || hash === "#/") {
    await Posts();
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Sección de búsqueda</h2>";
  } else if (hash === "#/contact") {
    $main.innerHTML = "<h2>Sección de contacto</h2>";
  } else {
    await Post();
  }

  HideLoader();
}

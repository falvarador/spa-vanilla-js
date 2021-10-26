import ajax from "../../helpers/ajax.js";
import wpApi from "../../helpers/wp_api.js";

import { MainTag } from "../Main.js";
import PostCard from "./PostCard.js";

export default async function Posts() {
  await ajax({
    url: wpApi.POSTS,
    success: (posts) => {
      let html = "";

      posts.forEach((post) => {
        html += PostCard(post);
      });

      MainTag().innerHTML = html;
    },
  });
}

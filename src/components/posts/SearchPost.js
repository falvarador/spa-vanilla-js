import ajax from "../../helpers/ajax.js";
import wpApi from "../../helpers/wp_api.js";

import { HideLoader } from "../commons/Loader.js";
import { MainTag } from "../Main.js";
import SearchCard from "./SearchCard.js";

export default async function SearchPost() {
  const querySearch = localStorage.getItem(wpApi.WP_SEARCH);

  if (!querySearch) {
    HideLoader();
    return false;
  }

  await ajax({
    url: `${wpApi.SEARCH}${querySearch}`,
    success: (searchPosts) => {
      let html = "";

      if (searchPosts.length === 0) {
        html = `
        <div class="info">
          <p>No results found for
          <mark>${querySearch}</mark>
          </p>
        </div>
      `;
      }

      searchPosts.forEach((post) => {
        html += SearchCard(post);
      });

      MainTag().innerHTML = html;
    },
  });
}

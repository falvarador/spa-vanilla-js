import ajax from "../../helpers/ajax.js";
import wpApi from "../../helpers/wp_api.js";

import PostContent from "./PostContent.js";

export default async function Post() {
  await ajax({
    url: `${wpApi.POST}/${localStorage.getItem(wpApi.WP_POST_ID)}`,
    success: (post) => {
      PostContent(post);
    },
  });
}

import ajax from "../../helpers/ajax.js";
import wpApi from "../../helpers/wp_api.js";

import PostContent from "./PostContent.js";

export default async function Post() {
  await ajax({
    url: `${wpApi.POST}/${localStorage.getItem("wpPostId")}`,
    success: (post) => {
      PostContent(post);
    },
  });
}

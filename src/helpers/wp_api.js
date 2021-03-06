const NAME = "css-tricks";
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const POST = `${API_WP}/posts`;
const SEARCH = `${API_WP}/search?_embed&search=`;

const WP_POST_ID = "wpPostId";
const WP_SEARCH = "wpSearch";

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  SEARCH,
  WP_POST_ID,
  WP_SEARCH,
};

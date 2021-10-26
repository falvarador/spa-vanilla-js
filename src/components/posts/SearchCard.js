/* eslint-disable camelcase */

import wpApi from "../../helpers/wp_api.js";

export default function SearchCard(props) {
  const { id, title, _embedded } = props;
  const { featured_media_src_url, date, slug } = _embedded.self[0];

  const dateFormat = new Date(date).toLocaleDateString();
  const imagePost = featured_media_src_url || "assets/img/emphty.jpg";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".search-card a")) return false;

    localStorage.setItem(wpApi.WP_POST_ID, e.target.dataset.id);

    return true;
  });

  return `
    <article class="search-card">
        <img src="${imagePost}" alt="${title}">
        <h2>${title}</h2>
        <p>
            <time datetime="${date}">${dateFormat}</time>
            <a href="#/${slug}" data-id="${id}">View post</a>
        </p>
    </article>
  `;
}

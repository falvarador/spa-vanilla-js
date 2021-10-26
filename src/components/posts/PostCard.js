export default function PostCard(props) {
  const { date, id, slug, title, _embedded } = props;

  const dateFormat = new Date(date).toLocaleString();
  const imagePost = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/img/emphty.jpg";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;

    localStorage.setItem("wpPostId", e.target.dataset.id);

    return true;
  });

  return `
    <article class="post-card">
        <img src="${imagePost}" alt="${title.rendered}">
        <h2>${title.rendered}</h2>
        <p>
            <time datetime="${date}">${dateFormat}</time>
            <a href="#/${slug}" data-id="${id}">View post</a>
        </p>
    </article>
  `;
}

export default function PostCard(props) {
  const { date, slug, title, _embedded } = props;

  const dateFormat = new Date(date).toLocaleString();
  const imagePost = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/img/emphty.jpg";

  return `
    <article class="post-card">
        <img src="${imagePost}" alt="${title.rendered}">
        <h2>${title.rendered}</h2>
        <p>
            <time datetime="${date}">${dateFormat}</time>
            <a href="#/${slug}">View post</a>
        </p>
    </article>
  `;
}

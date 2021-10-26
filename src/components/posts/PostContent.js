import { MainTag } from "../Main.js";

export default function PostContent(props) {
  const { content, date, title } = props;

  const $main = MainTag();
  const dateFormat = new Date(date).toLocaleString();

  const html = `
      <section class="post-page">
          <aside>
          <h2>${title.rendered}</h2>
          <time datetime=${date}">${dateFormat}</time>
          </aside>
          <hr>
          <article>${content.rendered}</article>
      </section>
    `;

  $main.innerHTML = html;
}

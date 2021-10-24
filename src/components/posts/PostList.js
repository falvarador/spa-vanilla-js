export default function PostList() {
  const d = document;
  const $posts = d.createElement("section");

  $posts.id = "posts";
  $posts.classList.add("grid-fluid");

  return $posts;
}

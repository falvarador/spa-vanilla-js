export default function PostList() {
  const $posts = document.createElement("section");

  $posts.id = "posts";
  $posts.classList.add("grid-fluid");

  return $posts;
}

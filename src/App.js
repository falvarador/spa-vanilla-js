import Header from "./components/commons/Header.js";
import Loader from "./components/commons/Loader.js";
import PostList from "./components/posts/PostList.js";
import Router from "./components/Router.js";

export default function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(PostList());
  $root.appendChild(Loader());

  Router();
}

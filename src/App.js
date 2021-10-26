import Header from "./components/commons/Header.js";
import Loader from "./components/commons/Loader.js";
import Main from "./components/Main.js";
import Router from "./components/Router.js";

export default function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = "";
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
}

import Header from "./components/commons/Header.js";
import Loader from "./components/commons/Loader.js";

export default function App() {
  const d = document;
  const $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Loader());
}

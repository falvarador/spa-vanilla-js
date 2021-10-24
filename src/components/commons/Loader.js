export default function Loader() {
  const d = document;
  const $loader = d.createElement("img");

  $loader.src = "assets/loader.svg";
  $loader.alt = "Loading...";
  $loader.classList.add("loader");

  return $loader;
}

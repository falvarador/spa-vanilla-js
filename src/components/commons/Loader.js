export default function Loader() {
  const $loader = document.createElement("img");

  $loader.src = "assets/loader.svg";
  $loader.alt = "Loading...";
  $loader.classList.add("loader");

  return $loader;
}

export function ShowLoader() {
  document.querySelector(".loader").style.display = "block";
}

export function HideLoader() {
  document.querySelector(".loader").style.display = "none";
}

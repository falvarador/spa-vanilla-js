/* eslint-disable no-restricted-globals */

export default function Main() {
  const $main = document.createElement("main");

  $main.id = "main";

  if (!location.hash.includes("#/search")) $main.classList.add("grid-fluid");

  return $main;
}

export function MainTag() {
  return document.getElementById("main");
}

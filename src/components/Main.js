export default function Main() {
  const $main = document.createElement("main");

  $main.id = "main";
  $main.classList.add("grid-fluid");

  return $main;
}

export function MainTag() {
  return document.getElementById("main");
}

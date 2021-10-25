export default function SearchForm() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";

  $form.classList.add("form-search");
  $form.appendChild($input);

  return $form;
}

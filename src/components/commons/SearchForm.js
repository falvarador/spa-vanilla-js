export default function SearchForm() {
  const d = document;
  const $form = d.createElement("form");
  const $input = d.createElement("input");

  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";

  $form.classList.add("form-search");
  $form.appendChild($input);

  return $form;
}

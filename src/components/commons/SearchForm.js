export default function SearchForm() {
  const $searchForm = document.createElement("form");
  const $input = document.createElement("input");

  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";

  $searchForm.classList.add("search-form");
  $searchForm.appendChild($input);

  return $searchForm;
}

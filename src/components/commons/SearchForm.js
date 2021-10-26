/* eslint-disable no-restricted-globals */
import wpApi from "../../helpers/wp_api.js";

import { MainTag } from "../Main.js";

function SearchPosts(e) {
  if (!e.target.matches(".search-form")) return false;

  e.preventDefault();
  localStorage.setItem(wpApi.WP_SEARCH, e.target.search.value);
  location.hash = `#/search?search=${e.target.search.value}"`;
}

function ClearSearch(e) {
  if (!e.target.matches("input[type='search']")) return false;

  if (!e.target.value) {
    localStorage.removeItem(wpApi.WP_SEARCH);
    MainTag().innerHTML = "";
  }
}

export default function SearchForm() {
  const $searchForm = document.createElement("form");
  const $input = document.createElement("input");

  $input.name = "search";
  $input.placeholder = "Search...";
  $input.type = "search";
  $searchForm.classList.add("search-form");

  $searchForm.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem(wpApi.WP_SEARCH);
  }

  document.addEventListener("submit", (e) => SearchPosts(e));
  document.addEventListener("search", (e) => ClearSearch(e));

  return $searchForm;
}

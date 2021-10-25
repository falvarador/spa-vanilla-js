import { HideLoader } from "../components/commons/Loader.js";

export default async function ajax(props) {
  const { url, method, headers, success } = props;

  try {
    const response = await fetch(url, {
      method,
      headers,
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText || "An error has occurred",
      };
    }

    const json = await response.json();
    success(json);
  } catch (err) {
    document.getElementById("posts").innerHTML = `
      <div class="error">
        <p>A ${err.status} error has occurred. ${err.statusText}</p>
      </div>
    `;

    HideLoader();
  }
}

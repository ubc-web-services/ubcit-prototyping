/*
 * File: mediaquery.js
 *
 * Desc: js for adding a mediaquery class to the body
 *
 */

(function () {
  const body = document.body;
  const query = window.matchMedia('(min-width: 979px)');

  function watch(query) {
    query.matches
      ? body.setAttribute("data-screen", "lg")
      : body.setAttribute("data-screen", "sm");
  }
  watch(query), query.addEventListener("change", watch);
})();

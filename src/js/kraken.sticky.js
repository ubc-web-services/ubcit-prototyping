/*!
 * File: sticky.js
 *
 * Desc: js for adding intersection observer to the nav to make it sticky when the direct DOM sibling leaves the viewport (#ubc7-unit).
 *
 */
//(function(Drupal) {
//  Drupal.behaviors.krakensticky = {
//    attach(context, settings) {
      const body = document.querySelector("body");
      const unitarea = document.querySelector("#clf7__header");
      const menu = document.querySelector("#ubc7-unit-menu");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio <= 0) {
            body.classList.add("nav--is-pinned");
            menu.classList.add("stickynav--pinned");
          } else {
            body.classList.remove("nav--is-pinned");
            menu.classList.remove("stickynav--pinned");
          }
        });
      });
      observer.observe(unitarea);
//    }
//  };
//})(Drupal);

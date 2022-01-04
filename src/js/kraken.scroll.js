/*!
 * File: scroll.js
 *
 * Desc: js for adding intersection observer to the top top button, revealing it when the totop-mask is outside of the viewport
 *
 */
//(function(Drupal) {
//  Drupal.behaviors.krakenscroll = {
//    attach(context, settings) {
      const topbtn = document.querySelector("#totop");
      const topcontainer = document.querySelector("#totop-mask");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            topbtn.classList.remove("is-visible");
          } else {
            topbtn.classList.add("is-visible");
          }
        });
      });
      observer.observe(topcontainer);
      document.getElementById("totop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
//    }
//  };
//})(Drupal);

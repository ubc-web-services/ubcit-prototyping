/*!
 * File: scroll.js
 *
 * Desc: js for adding intersection observer to the 'totop' button, revealing it when the 'totop-mask' is outside of the viewport
 */

//Drupal.behaviors.krakenscroll = {
//  attach: function (context, settings) {
    let topbtn = document.querySelector('#totop');
    let topcontainer = document.querySelector('#totop-mask');
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
          topbtn.classList.remove('is-visible');
        }
        else{
          topbtn.classList.add('is-visible');
        }
      });
    });
    observer.observe(topcontainer);
//  }
//};


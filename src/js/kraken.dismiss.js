/*!
 * File: dismiss.js
 *
 * Desc: js for dismissing elements from the dom via close button
 */

//Drupal.behaviors.krakenDismiss = {
//  attach: function (context, settings) {
    class Dismiss {
      constructor(node) {
        this.node = node;
      }
      dismiss() {
        const a = document.querySelectorAll(this.node);
        a.forEach((entry) => {
          let btn = entry.querySelector('.js-dismiss__trigger');
          btn.addEventListener('click', () => {
            btn.parentElement.remove();
          });
        });
      }
    }
    const dismissable = new Dismiss('.js-dismiss');
    dismissable.dismiss();
//  }
//};

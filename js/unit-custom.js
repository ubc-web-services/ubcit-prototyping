/*
 * All Custom JS in here
 * move to behaviours when creating the Drupal Theme
 * https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
 */
 /*
(function ($) {
  Drupal.behaviors.mycustom_theme = {
    attach: function (context) {
    
    
    }
  };
})(jQuery);
*/
$(window).load(function() {
  $('.accordion').find('.accordion__tab').click(function(e){
    e.preventDefault();
    $(this).next().slideToggle('fast');
    $(this).parent().toggleClass('accordion--closed');});
  $(".equalize").equalize();
  $(".duotone-boxes").equalize({
  	target: ".equalized_cta",
  	minWidth: "600px"
  });
  $("input[type=checkbox], input[type=radio]").checkbox();
  $("select").dropdown();
});

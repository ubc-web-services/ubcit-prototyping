/*
 * All Custom JS in here
 * move to behaviours when creating the Drupal Theme
 * https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
 */
 /*
(function ($) {
  Drupal.behaviors.wellbeing_theme = {
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
  $("button[data-target='#toggledfilters']").click(function(e){
    var newstate = $(this).attr('data-state') ^ 1,
    	text = newstate ? "HIDE" : "SHOW";
    	icon = newstate ? "up" : "down";
    $(this).html(text + ' FILTERS <span class="fa fa-angle-' + icon + '">&nbsp;</span>');
    $(this).attr('data-state',newstate);
  });
});
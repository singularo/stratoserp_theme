
(function ($, Drupal) {
  Drupal.behaviors.tabIndexFixer = {
    attach: function (context, settings) {
      $('a.tabledrag-handle', context).once('tabFixer').each(function () {
        $(this).attr('tabindex', "-1")
      });
    }
  };
})(jQuery, Drupal);

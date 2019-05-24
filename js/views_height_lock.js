
(function ($, Drupal) {
  Drupal.behaviors.viewsHeightLock = {
    attach: function (context, settings) {
      $('div.view-eva .table-responsive', context).once('viewHeight').each(function () {
        $(this).css({"min-height": $("div.view-eva .table-responsive").height()})
      });
    }
  };
})(jQuery, Drupal);

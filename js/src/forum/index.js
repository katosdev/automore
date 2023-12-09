import app from 'flarum/forum/app';

app.initializers.add('katosdev/automore', () => {
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('[class$="loadMore"] button').each(function () {
      if ($(this).isInViewport()) {
        $(this).click();
      }
    });
  });
});

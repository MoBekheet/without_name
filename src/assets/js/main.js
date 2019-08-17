let content = $('.site-content'),
  header = $('.site-header');

$(content).clone().prependTo(header).addClass('blurred');

let blur = 'blur(.5em)';
$('.blurred').css({
  'background': '#fff',
  '-webkit-filter': blur,
  'filter': blur
});

$(document).scroll(function () {
  let scroll = $(this).scrollTop();
  $('.blurred').css({
    '-webkit-transform': 'translateY(-' + scroll + 'px)',
    'transform': 'translateY(-' + scroll + 'px)'
  });
})

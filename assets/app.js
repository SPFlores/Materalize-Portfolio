// this is the javascript I've found that is somehow supposed to help me make the navbar collapse/uncollapse, but it's not working out so well for me
$(document).ready(function () {
  $(".button-collapse").sideNav();
});

// this is another that I found that was maybe supposed to help
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


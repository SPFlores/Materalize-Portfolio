// this is the javascript I've found that is somehow supposed to help me make the navbar collapse/uncollapse, but it's not working out so well for me
// $(document).ready(function () {
//   $(".button-collapse").sideNav();
// });

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function () {
  $(".button-collapse").sideNav();
});
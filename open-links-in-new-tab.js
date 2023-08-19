document.addEventListener('DOMContentLoaded', function () {
  var navbarLinks = document.querySelectorAll('.navbar .nav-link');
  navbarLinks.forEach(function (link) {
    link.setAttribute('target', '_blank');
  });
});
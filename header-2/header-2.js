document.addEventListener('click', function(event_h2) {
    var target2 = event_h2.target;
    var navbar2 = document.querySelector('.navbar-collapse2');
    var isNavbarExpanded2 = navbar2.classList.contains('show');
    var isNavbarToggle2 = target2.classList.contains('navbar-toggler2');
    var isNavbarLink2 = target2.classList.contains('nav-link2');
    var isInsideNavbar2 = navbar2.contains(target2);
    
    if (isNavbarExpanded2 && !isNavbarToggle2 && !isNavbarLink2 && !isInsideNavbar2) {
      navbar2.classList.remove('show');
    }
  });
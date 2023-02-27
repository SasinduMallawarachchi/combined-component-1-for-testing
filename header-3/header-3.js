document.addEventListener('click', function(event_h3) {
    var target3 = event_h3.target;
    var navbar3 = document.querySelector('.navbar-collapse3');
    var isNavbarExpanded3 = navbar3.classList.contains('show');
    var isNavbarToggle3 = target3.classList.contains('navbar-toggler3');
    var isNavbarLink3 = target3.classList.contains('nav-link3');
    var isInsideNavbar3 = navbar3.contains(target3);
    
    if (isNavbarExpanded3 && !isNavbarToggle3 && !isNavbarLink3 && !isInsideNavbar3) {
      navbar3.classList.remove('show');
    }
  });
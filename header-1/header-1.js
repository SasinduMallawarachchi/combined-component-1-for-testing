document.addEventListener('click', function(event_h1) {
    var target1 = event_h1.target;
    var navbar1 = document.querySelector('.navbar-collapse1');
    var isNavbarExpanded1 = navbar1.classList.contains('show');
    var isNavbarToggle1 = target1.classList.contains('navbar-toggler1');
    var isNavbarLink1 = target1.classList.contains('nav-link1');
    var isInsideNavbar1 = navbar1.contains(target1);
    
    if (isNavbarExpanded1 && !isNavbarToggle1 && !isNavbarLink1 && !isInsideNavbar1) {
      navbar1.classList.remove('show');
    }
  });
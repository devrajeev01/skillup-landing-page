const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('active');

  // Change icon text inside <span class="material-icons">
  if (navMenu.classList.contains('active')) {
    mobileMenuBtn.innerHTML = '<span class="material-icons">close</span>';
  } else {
    mobileMenuBtn.innerHTML = '<span class="material-icons">menu</span>';
  }
});

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('active');
    mobileMenuBtn.innerHTML = '<span class="material-icons">menu</span>';
  });
});

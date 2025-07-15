 // Enable click-to-toggle on mobile for Portfolio dropdown
  document.addEventListener('DOMContentLoaded', function () {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent link navigation
      dropdownContent.classList.toggle('show');
    });

    // Optional: close dropdown if clicked outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        dropdownContent.classList.remove('show');
      }
    });
  });

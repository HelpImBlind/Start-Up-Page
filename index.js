document.getElementById("date").innerHTML = Date().slice(0, 21);

document.querySelector('.show-menu').addEventListener('click', function() {
  document.querySelector('.primary-list').classList.toggle('show-menu');
});


/*function toggleMenu() {
    var menu = document.getElementById('workSitesMenu');
    menu.classList.toggle('workSitesShow'); // Toggle the 'show-menu' class
  }*/
  
  
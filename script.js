//Funcion para desplegar el menú de navegación

function menu() {
    var x =  document.getElementById("nav");
    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
    }
}

//Scroll

let sections = document.querySelectorAll('sectiom');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = ()  => {

  //Ir hasta la section deseada
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top <= offset + height) {
      navLinks.forEach(link => {
        navLinks.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  
  //Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
}

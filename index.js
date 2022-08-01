function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


document.addEventListener('mousemove', function(event) {
    const elem = document.getElementById("car");
    elem.style.left = event.clientX;
    console.log(event);
}, true);

window.addEventListener("scroll", reveal);
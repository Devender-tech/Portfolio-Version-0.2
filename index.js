document.querySelector('.menu-toggle').addEventListener('click',function(){

document.querySelector('.mobile-menu').classList.toggle("active");
});

// Smooth Scrolling
$('.nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 10
      },
      800
    );
  }
});


$("form").submit(function(){
  alert("Submitted");
});

// setTimeout(function()
// { 
//      window.location = "index.html"; 
// }, 2000);
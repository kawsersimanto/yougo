let reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealItems);

function revealItems(){

  for (let item = 0; item < reveals.length; item++) {
    let windowHeight = window.innerHeight;
    let topPoint = reveals[item].getBoundingClientRect().top;
    let revealPoint = 150;

    if (topPoint < windowHeight - revealPoint){
      showItem();
    }

    else{
      hideItem();
    }

    function showItem(){
      reveals[item].classList.add("show");
    }
    function hideItem(){
      reveals[item].classList.remove("show");
    }
  }
}
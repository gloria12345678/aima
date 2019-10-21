
$(document).ready(function(){
    var  winHeight = window.screen.height;
    $(".navLong").css({"height":winHeight+"px"})

    $("#nav").click(function(){
    $(".navLong").slideToggle("slow");
    });
  });
  function divHeight(_widthAndPercent,divId){
    let Id =document.getElementById(divId)
    console.log(Id);
    let winWidth = Id.offsetWidth;
    let divHeight = winWidth/_widthAndPercent;
    Id.style.height = divHeight+"px";
  }


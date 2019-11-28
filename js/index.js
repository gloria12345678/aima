
$(document).ready(function(){
    var  winHeight = window.screen.height;
    $(".navLong").css({"height":winHeight+"px"})

    $("#nav").click(function(){
    $(".navLong").slideToggle("slow");
    });
  });
  function divHeight(_widthAndPercent,divId){
    let Id =document.getElementById(divId)
    let Id1 =document.getElementById("girlPhoto1")
    console.log(Id1);
    let winWidth = Id.offsetWidth;
    console.log(winWidth);
    if(winWidth>890){
      console.log(winWidth);
      Id1.style.height ="365px";
    }else{
      let divHeight = winWidth/_widthAndPercent;
      Id.style.height = divHeight+"px";
    }

  }

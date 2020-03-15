$(window).on("load",function(){
  $(".sk-cube-grid").fadeOut();
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration:5000,
    delay: (el, i) => 45 * i
  });



  var textWraper = document.querySelector('.ml7 .letters');
  textWraper.innerHTML = textWraper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    });


    if ($(this).scrollTop() > 50) {
        $(".top").css({"opacity":1});
      }else{
        $(".top").css({"opacity":0});
      }

    $(window).on("scroll",function(){

        if ($(this).scrollTop() > 50) {
          $(".top").css({"opacity":1});
        }else{
          $(".top").css({"opacity":0});
        }

      })

    $(".top").on("click",function(){
        $("html").animate({ scrollTop: 0 }, 1500);
      });




      $("#bottom").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("main").offset().top
        }, 1500);
    });

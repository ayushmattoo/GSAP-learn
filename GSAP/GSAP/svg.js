var finalPosition ="M 10 80 Q 315 240 620 80";
var initialPosition = "M 10 80 Q 315 80 620 80" ;

var string = document.querySelector("#line")

string.addEventListener("mouseenter",function(dets){
    console.log(dets)
})

string.addEventListener("mousemove",function(dets){
    path = `M 10 80 Q ${dets.x} ${dets.y} 620 80`
    gsap.to("svg path",{
        attr:{d:path} ,
        duration:0.3
    })
})

string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:initialPosition} ,
        ease: "elastic.out(1, 0.8)"
    })
})


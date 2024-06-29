var tl = gsap.timeline()
tl.to("#menu",{
    duration:0.3,
    top :"0%",
})
tl.from("#menu h2",{
    y:-30,
    stagger:0.092
})
tl.from("#close-icon",{
    y:-30
})
tl.pause()
var main_select = document.querySelector("#menu-icon");
var close_select = document.querySelector("#close-icon");
var main_click_count=0;

main_select.addEventListener("click",function(){
    main_click_count++;
    if(main_click_count>1)
        {
            tl.to("#menu",{
                duration:0.3,
                top :"-20%",
            })  
            main_click_count=0;
        }
    else
    tl.play()
})

close_select.addEventListener("click",function(){
    tl.to("#menu",{
        duration:0.3,
        top :"-20%"
    })
})

gsap.from("#text h1",{
    x:-300,
    duration:2,
    scrollTrigger:{
        trigger:"#text h1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        markers:true,
        scrub:2
    }
})

gsap.from("#text h2",{
    x:300,
    scrollTrigger:{
        trigger:"#text h2",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:1
    }
})
gsap.from("#page3 #box",{
    scale:15,
    opacity:0,
    rotaion:720,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:4
    }
})
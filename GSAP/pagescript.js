gsap.to("#page2 h1",{
    transform:"translateX(-130%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"bottom 20%",
        markers:true,
        scrub:3,
        pin:true

    }
})
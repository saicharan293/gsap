//scrub is to run to-from on mouse scroll
//pin is to drag along from start to end position

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 2,
    rotate: 720,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:4,
        pin:true
    }
});

// gsap.from("#page2 h1", {
//     opacity:"0",
//     duration:2,
//     x:200,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// });

// gsap.from("#page2 h2", {
//     opacity:"0",
//     duration:2,
//     x:-200,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 70%"
//     }
// });

// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// });



// gsap.from("#page2 #box", {
//     scale:0,
//     // delay:2,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box",
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 48%"
//     }
// });
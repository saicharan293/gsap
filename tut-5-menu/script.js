var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
let timeline = gsap.timeline({paused:true});

timeline.to("#full", {
    right:0,
    duration:.4
})

timeline.from("#full h4",{
    x:120,
    duration:.5,
    stagger:.28,
    opacity:0
})

timeline.from("#full i",{
    opacity:0,
    rotate:120
})

timeline.pause()

menu.addEventListener('click',function(){
    timeline.play()
});

cross.addEventListener('click',function(){
    timeline.reverse()
    gsap.to("#full", {
        right:"-30%",
        duration:3.5
    });
})
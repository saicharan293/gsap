
var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var img = document.querySelector('#image')

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration:.8,
        ease:"back.out"
    });
})

img.addEventListener('mouseenter',function(){
    cursor.innerHTML='View More'
    console.log('image')
    gsap.to(cursor, {
        scale: 2,
        backgroundColor:"#ffffff8a"
    });
})

img.addEventListener('mouseleave',function(){
    cursor.innerHTML=''
    console.log('image')
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"#fff",
    });
})
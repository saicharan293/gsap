
var marque = document.querySelector('.marque')
var move = document.querySelector('#move')

// for (let index = 0; index < 6; index++) {
//     let clone = marque.cloneNode(true); 
//     move.appendChild(clone);
// }

for (let index = 0; index < 8; index++) {
    let template = `
        <div class="marque">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
        </div>`;
    
    move.innerHTML += template; 
}
console.log(move)

function wheelMarqueAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      console.log("straight scroll");
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 6,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: -180,
      });
    } else {
      console.log("reverse scroll");
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 6,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}
wheelMarqueAnimation()
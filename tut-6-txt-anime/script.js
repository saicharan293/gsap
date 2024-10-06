const breakTheText = () => {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;

  var txt = h1text.split("");

  var clutter = "";

  txt.forEach((ele,idx) => {
    if(idx<(txt.length/2)){
        clutter += `<span class="ele1">${ele}</span>`;
        // console.log('clutter 1',clutter)
    }else{
        clutter += `<span class="ele2">${ele}</span>`;
    }
  });

  h1.innerHTML = clutter;
};
breakTheText()

gsap.from(".ele1", {
    y:60,
    duration:.4,
    delay:.5,
    stagger:.15,
    opacity:0
});

gsap.from(".ele2", {
    y:55,
    duration:.4,
    delay:.5,
    stagger:-.15,
    opacity:0
});
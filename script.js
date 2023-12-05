var tl = gsap.timeline();

tl.from("nav #gau, nav #nav-part2, nav #nav-part3", {
  y: -150,
  duration: 1,
  delay: 1,
  opacity: 0.2,
  stagger: 0.2,
});
tl.from("#seachbar,#search, #walcome",{
    x: -1000,
    duration: 1,
    delay: 1,
    opacity: 0.2,
    stagger: 0.2,
})
tl.from("#searchbar, #img1",{

    x:-300,
    duration: 1,
    delay: 1,
    opacity: 0.2,
    stagger: 0.2,

})
tl.from("#searchbar, #img1",{

    x:-300,
    duration: 1,
    delay: 1,
    opacity: 0.2,
    stagger: 0.2,

})
tl.from("#searchbar, #img2",{

    y:-600,
    duration: 1,
    delay: 1,
    opacity: 0.2,
    stagger: 0.2,
    

})
tl.to("#searchbar, #img2",{

    y:-600,
    duration: 1,
    delay: 1,
    
    

})
tl.from(".card,.card-img,.container",{

    x:-2000,
    duration:1,
    delay:1,
    stagger:0.2,
})

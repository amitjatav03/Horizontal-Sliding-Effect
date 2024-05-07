// function horizontalScroll() {
//     gsap.to("#landing-page .slides", {
//         transform: "translateX(-260vw)",
//         duration: 6,
//         ease: "power2.in",
//         scrollTrigger: {
//             scroller: "body",
//             trigger: "#landing-page",
//             scrub: 2,
//             pin: true,
//         }
//     })
// }



let mncircles = document.querySelectorAll(".mn-circles");
let slides = [...document.querySelectorAll(".slides")];
let active = 0;
// gsap.to(mncircles[active], {
//     backgroundColor: "lavender"
// })
mncircles[active].classList.add("active-circle");
slides[active].classList.add("active");
slides[active].classList.add("active-slide");


mncircles.forEach((val, index) => {
    val.addEventListener("click", () => {
        active = index;
        console.log(index);
        gsap.to("#slider-container", {
            // transform: `translateX(-(${index+1}*60))`,
            x: -(index*60)+"vw",
            ease: "poweri.out",
            duration: .2,
        })
        slides.forEach(function(slide, idx){
            if(active === idx) {
                slide.classList.add("active");
                slide.classList.add("active-slide");
            } else{
                slide.classList.remove("active");
                slide.classList.remove("active-slide");
            }
        });
        greyout();
        gsap.to(val, {
            backgroundColor: "lavender"
        })

    })
})

function greyout(){
    gsap.to(mncircles, {
        backgroundColor: "rgb(58, 65, 90)"
    })
}



let cursor = document.getElementById("cursor");
let main = document.querySelector("#main");

main.addEventListener("mousemove", (dets)=>{
    cursor.style.top = dets.y + "px";
    cursor.style.left = dets.x + "px";
})



let slideImages = document.querySelectorAll(".slides img");
slideImages.forEach(function(img){
    img.addEventListener("mouseenter", function(){
        cursor.classList.add("cursor-grow");
    })
})  
slideImages.forEach(function(img){
    img.addEventListener("mouseleave", function(){
        cursor.classList.remove("cursor-grow");
    })
})  

let allh1 = document.querySelectorAll("h1");
slideImages.forEach(function(img){
    img.addEventListener("mouseover", function(ev){
        cursor.classList.add("cursor-grow");
        console.log(ev)
    })
})  
slideImages.forEach(function(img){
    img.addEventListener("mouseleave", function(){
        cursor.classList.remove("cursor-grow");
    })
})  



Shery.makeMagnet("h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});



Shery.imageMasker("img" /* Element to target.*/, {
//Parameters are optional.
// mouseFollower: true,
text: "Shery",
ease: "cubic-bezier(0.23, 1, 0.320, 1)",
duration: 1,
});


//% 2nd animation dekhane keliye usee delay dena prta h kyuke agr 1st animation complete hoga tohi 2nd nazar aye

//! 📝Note: delay na dena pare isi liye hum gsap.timeline() use karte hai


// @ gsap.timeline() 

//|  timeline() means series of animations. means: 1 animation ke baad next animation phr next animation and so on.


// var tl = gsap.timeline();

// tl
//     .from(".left", {
//         width: 0,
//         duration: 1.5,
//         ease: "Expo.easeInOut"
//     })
//     .from(".right", {
//         width: 0,
//         duration: 1.5,
//         ease: "Expo.easeInOut"
//     })




// @  gsap.set()

// !📝Note: kisi bhi [elem/elems] ki property ko set karta h. 
//* [initially]

// gsap.set(".a", { y: 10, opacity: 0 })




// @ stagger

//% 📝Note: stagger: ka matlab hai ek jaise jitne bhi elements hai unpar delay mtlb same class wale 1 by 1 ain ge


var tl = gsap.timeline();

gsap.set(".a", { y: 30, opacity: 0 });
gsap.set(".image", { y: 30, opacity: 0, scale: 0.01 }); //* scale: 1.6

tl
    .from(".left", {
        width: 0,
        duration: 1.5,
        ease: "Expo.easeInOut"
    })
    .from(".right", {
        width: 0,
        duration: 1.5,
        ease: "Expo.easeInOut"
    })
    .to(".a", {
        delay: -2, //* agr elems sabse akhir me na aiye to [delay ki val '-'] me deni hogi
        stagger: 0.5,
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "Expo.easeInOut"
    })
    .to(".image", {
        delay: -4,
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.4,
        ease: "Expo.easeInOut"
    })

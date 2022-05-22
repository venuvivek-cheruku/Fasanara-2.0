gsap.registerPlugin(ScrollTrigger);


let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", 
    scrollTrigger: {
      trigger: ".panel-container",
      pin: true,
      scrub: 0.1,
      end: "+=3000"
    }
  });


// text reveal

// ScrollTrigger.batch( ".panel-content", {
//   onEnter: elements => {
//     gsap.from(elements, {
//       autoAlpha: 0,
//       x: -60,
//       start: "center center",
//       end: "center center",
//       stagger: 0.15,
//       scrub: 3
//     });
//   },
//   repeat: true,  
// });



gsap.utils.toArray('.slide-title').forEach(step => {
  ScrollTrigger.create({
      trigger: step,
      start: 'top 80%',
      end: 'center top',
      toggleClass: 'active'
  });
});
          



let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container, i) => {
  let image = container.querySelector(".panel-img");
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      containerAnimation: scrollTween,
      start: "center center",
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: "power2"
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: "power2"
  });
});


ScrollTrigger.batch( ".image-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,
  });


  ScrollTrigger.batch( ".service-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,
  });

ScrollTrigger.batch( ".about-section-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });



ScrollTrigger.batch( ".podcast-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });




ScrollTrigger.batch( ".nav-main-item", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });









const fadeIn = gsap.utils.toArray(".fade-in");

fadeIn.forEach((content, index) => {
  gsap.to(content, {
    scrollTrigger: {
      trigger: content,
      start: "top 90%",
      end: "top 80%",
      scrub: 3,
      markers: false,
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
  });
});

const fadeInLeft = gsap.utils.toArray(".fade-in-leftG");

fadeInLeft.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 60%",
        end: "top center",
        scrub: 3,
        markers: false,
      },
      x: 0,
      opacity: 1,
      duration: 0.5
    })
});

const fadeInRight = gsap.utils.toArray(".fade-in-rightG");

fadeInRight.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 60%",
        end: "top center",
        scrub: 3,
        markers: false,
      },
      x: 0,
      opacity: 1,
      duration: 0.5
    })
});

const fade = gsap.utils.toArray(".fadeG");

fade.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
        markers: false,
      },
      opacity: 1,
      duration: 1,
      delay: 2
    })
});
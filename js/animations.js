gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();
// tlLoader
//   .set(".loader__item", { yPercent: -100 })
//   .set(".loader__title", { opacity: 0 })
//   .to(".loader__item", {
//     yPercent: 0,
//     duration: 0.5,
//     stagger: 1,
//   })
//   .to(".loader__item", {
//     yPercent: 100,
//     duration: 0.5,
//     stagger: 1,
//   })
//   .to(".loader__title", {
//     opacity: 1,
//     scale: 1.2,
//     duration: 1,
//   })
//   .set(".loader__item", {
//     yPercent: -100,
//   })
//   .to(".loader__title", {
//     opacity: 0,
//     duration: 1,
//     scale: 0.8,
//   })
//   .to(
//     ".loader",
//     {
//       yPercent: -100,
//       duration: 0.8,
//     },
//     "-=0.2" //o'zidan avvalgi element ni tugashidan 0.2 sekund avval ishlashini ta'minlaydi.
//   );

const laptopScreen = window.matchMedia("(min-width:992px)"); //bu orqali hamma versiyalarga mos ravishda animatsiyalar qilish mumkin. Bunda ichida istalgan parametrlarni berish mumkin.
// U MediaQueryList {media: '(min-width: 992px)', matches: false, onchange: null} ni qaytaradi.
// console.log(laptopScreen.matches); shu operatordan foydalaniladi.
if (laptopScreen.matches) {
  // Hero section
  gsap.to(".section__hero", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "top top",
      scrub: true,
    },
    css: {
      background: "#10895a",
    },
  });
  gsap.to(".title__row-1", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    yPercent: -100,
  });
  gsap.to(".title__row-2", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    yPercent: -170,
  });
  gsap.to(".hero__svg", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    scale: 0.5,
  });
  gsap.to(".hero__image", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    scale: 1.2,
    y: -50,
  });
  gsap.to(".hero__buttons", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    y: 150,
    xPercent: 50,
    scale: 1.2,
  });
  //   Section Materials
  gsap.from(".materials__title", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-300 0",
    },
    y: 100,
    autoAlpha: 0, // opacity o'rniga
    duration: 1,
  });
  gsap.from(".materials__text", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-300 0",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".materials__btn", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    y: 50,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".products__img", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  gsap.from(".products__info", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  //   Choose section
  const tlChoose = gsap.timeline();
  tlChoose
    .from(".section__choose", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
        pin: true,
      },
    })
    .from(".choose__title", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-120 0",
        scrub: true,
      },
      y: 30,
    })
    .from(".choose__text", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-150 0",
        scrub: true,
      },
      y: 60,
    })
    .from(".why__svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      scale: 0,
    })
    .from(".why__svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      scale: 0,
    })
    .from(".why__image", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      css: {
        width: "0px",
        height: "100%",
      },
    })
    .from(".why__item", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      stagger: 0.25,
      y: 50,
      autoAlpha: 0,
    })
    .from(".why__icon circle", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      stagger: 0.25,
      css: {
        fill: "#f9bf29",
        fillOpacity: 1,
      },
    })
    // Help
    .from(".help__img-1", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=300px",
        scrub: true,
      },
      xPercent: 30,
      duration: 1,
    })
    .from(".help__img-2", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=400px",
        scrub: true,
      },
      scale: 0.5,
      yPercent: -80,
      xPercent: -100,
    })
    .from(".help__img-3", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=400px",
        scrub: true,
      },
      scale: 0.8,
      xPercent: -130,
    })
    .from("./help__title", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        end: "+=150px",
        scrub: true,
      },
      y: 50,
      autoAlpha: 0,
    });
}

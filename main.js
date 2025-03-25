// !Value Setters
function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .row img", { opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });

  // for svg
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    const character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

// ! factory pattern for text animation

function revealToSppan() {
  document.querySelectorAll(".reveal").forEach(function (elm) {
    //todo creating two spans
    const parent = document.createElement("span");
    const child = document.createElement("span");

    //todo  parent and child set there classes
    parent.classList.add("parent");
    child.classList.add("child");

    //todo  span parents get child, and childs get elm's text content
    child.innerHTML = elm.innerHTML;

    parent.appendChild(child);
    //todo  elm value replaces with parent span
    elm.innerHTML = "";
    elm.appendChild(parent);
  });
}

// !Animation Part
function loaderAnimation() {
  const tl = gsap.timeline();
  tl.from(" #loader .child span", {
    x: 100,
    duration: 1.4,
    stagger: 0.2,
    // delay: 1,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-110%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader ", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green ", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green ", {
      height: "0%",
      top: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomePage();
      },
    });
}
// ! animate Svg
function animateSvg() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

function animateHomePage() {
  const tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg();
      },
    });
}
revealToSppan();
valueSetters();
loaderAnimation();

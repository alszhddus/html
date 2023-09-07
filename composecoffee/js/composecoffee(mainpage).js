$(function () {
  // particle bg start
  particlesJS("particles-js", {
    particles: {
      number: { value: 20, density: { enable: true, value_area: 800 } },
      color: { value: "#a2a2a2" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#a2a2a2",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  // particle bg end

  // gnb hover event start
  $(".top_gnb li").hover(
    function () {
      console.log("g");
      $("header .lnbwrap").css("height", "490px");
      $(".head_light .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
      $(".head_light .lnbwrap").css("height", "0px");
    }
  );
  $(".top_lnb > ul > li").hover(
    function () {
      $("header .lnbwrap").css("height", "490px");
      $(".head_light .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
      $(".head_light .lnbwrap").css("height", "0px");
    }
  );
  // gnb hover event end

  // gnb scroll event start
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    if (ht > 50) {
      $("header").css("visibility", "hidden").css("opacity", "0");
      $(".head_light").css("visibility", "visible").css("opacity", "1");
    } else {
      $("header").css("visibility", "visible").css("opacity", "1");
      $(".head_light").css("visibility", "hidden").css("opacity", "0");
    }
  };
  // gnb scroll event end

  // language click event start
  let btn1 = true;
  let ht1 = $(".language > li > .language_con").height();
  $(".language > li > .language_con").css({
    height: "0",
    overflow: "hidden",
  });
  console.log(ht1);
  $(".language > li svg path").click(function () {
    if (btn1) {
      $(this).addClass("on");
      $(".language > li > .language_con").css("height", ht1 + "px");
    } else {
      $(this).removeClass("on");
      $(".language > li > .language_con").css("height", "0px");
    }
    btn1 = !btn1;
  });
  // language click event end

  // menu_bar click event start
  let menu_bar = true;
  console.log(menu_bar);
  $(".menu_bar").click(function () {
    if (menu_bar) {
      $(".bar_top").addClass("on1");
      $(".bar_middle").addClass("on2");
      $(".bar_bottom").addClass("on3");
      $("nav").css("height", "100vh");
      $(".top_logo, .language, .top_desc, .top_sns").css("opacity", "0");
      $(".topmenu").css("visibility", "hidden");
      $("header").css("border-bottom", "none");
      $(".head_light").css("border-bottom", "none");
      $(".head_light").css("background", "transparent");
    } else {
      $(".bar_top").removeClass("on1");
      $(".bar_middle").removeClass("on2");
      $(".bar_bottom").removeClass("on3");
      $("nav").css("height", "0vh");
      $(".top_logo, .language, .top_desc, .top_sns").css("opacity", "1");
      $(".topmenu").css("visibility", "visible");
      $("header").css("border-bottom", "1px solid rgba(255, 255, 255, 0.3)");
      $(".head_light").css(
        "border-bottom",
        "1px solid rgba(255, 255, 255, 0.3"
      );
      $(".head_light").css("background", "#fff");
    }
    menu_bar = !menu_bar;
  });

  // menu_bar click event end

  // main count event start
  let c_ountup; //전역

  $(function () {
    init_count(); //카운트 모션 동작
    init_count1();
    init_count2();
  });

  function init_count() {
    const options = {
      duration: 4, //모션 동작 시간
      price: 9,
    };
    c_ountup = new countUp.CountUp("count1", options.price, options.duration);
    c_ountdown = new countUp.CountUp("count1", 0, options);
    if (!c_ountup.error) {
      c_ountup.start(); //스타트
    } else {
      console.error(c_ountup.error);
    }
  }

  function init_count1() {
    const options = {
      duration: 4, //모션 동작 시간
      price: 2303,
    };
    c_ountup = new countUp.CountUp("count2", options.price, options.duration);
    c_ountdown = new countUp.CountUp("count2", 0, options);
    if (!c_ountup.error) {
      c_ountup.start(); //스타트
    } else {
      console.error(c_ountup.error);
    }
  }

  function init_count2() {
    const options = {
      duration: 4, //모션 동작 시간
      price: 9334887,
    };
    c_ountup = new countUp.CountUp("count3", options.price, options.duration);
    c_ountdown = new countUp.CountUp("count3", 0, options);
    if (!c_ountup.error) {
      c_ountup.start(); //스타트
    } else {
      console.error(c_ountup.error);
    }
  }
  // main count event end

  // rollingbanner swiper start
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // rollingbanner swiper end
});

// gnb hover event start
$(function () {
  $(".top_gnb li").hover(
    function () {
      console.log("g");
      $("header .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
    }
  );
  $(".top_lnb > ul > li").hover(
    function () {
      $("header .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
    }
  );
  // gnb hover event end

  // gnb scroll event start
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    if (ht > 50) {
      $("header").css("visibility", "visible");
      $(".head_light").slideDown(300);
    } else {
      $("header").css("visibility", "hidden");
      $(".head_light").slideUp(300);
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
    } else {
      $(".bar_top").removeClass("on1");
      $(".bar_middle").removeClass("on2");
      $(".bar_bottom").removeClass("on3");
    }
    menu_bar = !menu_bar;
  });
  // menu_bar click event end
});

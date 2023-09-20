$(function () {
  // scroll down color change event start
  $(window).scroll(function () {
    let scrollht = $(window).scrollTop();
    if (scrollht > 500) {
      $(".scrolldown_btn img:first").css("opacity", "1");
      $(".scrolldown_btn img:last").css("opacity", "0");
    } else {
      $(".scrolldown_btn img:first").css("opacity", "0");
      $(".scrolldown_btn img:last").css("opacity", "1");
    }
  });
  // scroll down color change event end

  // maincontent hover event start
  $(".main_item li").hover(
    function () {
      console.log("d22222");
      $(this).css({
        backgroundColor: "#bf1e2e",
        top: "-10px",
        left: "-10px",
        boxShadow: "10px 15px 20px rgba(0, 0, 0,0.19)",
      });
      $(this).find(".main_icon").find("img:first").css("opacity", "0");
      $(this).find(".main_icon").find("img:last").css("opacity", "1");
      $(this).find("h2").css("color", "#fff");
      $(this).find("p").css("color", "rgba(255,255,255,0.6)");
    },
    function () {
      $(this).css({
        backgroundColor: "transparent",
        top: "0px",
        left: "0px",
        boxShadow: "none",
      });
      $(this).find(".main_icon").find("img:first").css("opacity", "1");
      $(this).find(".main_icon").find("img:last").css("opacity", "0");
      $(this).find("h2").css("color", "#000");
      $(this).find("p").css("color", "#939393");
    }
  );
  // maincontent hover event end

  // brandcontent hover event start
  $(".brand_item li").hover(
    function () {
      let i = $(this).index();
      $(".brand_item li").css({
        backgroundColor: "transparent",
        left: "-60px",
        boxShadow: "none",
      });
      $(".brand_item li")
        .find(".brand_icon")
        .find("img:first")
        .css("opacity", "1");
      $(".brand_item li")
        .find(".brand_icon")
        .find("img:last")
        .css("opacity", "0");
      $(".brand_item li").find(".brand_desc").find("h2").css("color", "#000");
      $(".brand_item li").find(".brand_desc").find("p").css("color", "#939393");
      $(".brand_item li").find(".brand_arrow").css("opacity", "0");
      $(this).css({
        backgroundColor: "#bf1e2e",
        left: "-50px",
        boxShadow: "10px 15px 20px rgba(0, 0, 0,0.19)",
      });
      $(this).find(".brand_icon").find("img:first").css("opacity", "0");
      $(this).find(".brand_icon").find("img:last").css("opacity", "1");
      $(this).find(".brand_desc").find("h2").css("color", "#fff");
      $(this).find(".brand_desc").find("p").css("color", "#fff");
      $(this).find(".brand_arrow").css("opacity", "1");
      $(".main_brand_con").css(
        "backgroundImage",
        "url(images/main_brand_img_" + (i + 1) + ".jpg)"
      );
    },
    function () {}
  );
  function init(n) {
    current = n;
    setTimeout(function () {
      $(".brand_item li")
        .eq(current)
        .css({ backgroundColor: "#bf1e2e", left: "-50px" });
      $(".brand_item li")
        .eq(current)
        .find(".brand_icon")
        .find("img:first")
        .css("opacity", "0");
      $(".brand_item li")
        .eq(current)
        .find(".brand_icon")
        .find("img:last")
        .css("opacity", "1");
      $(".brand_item li")
        .eq(current)
        .find(".brand_desc")
        .find("h2")
        .css("color", "#fff");
      $(".brand_item li")
        .eq(current)
        .find(".brand_desc")
        .find("p")
        .css("color", "#fff");
      $(".brand_item li").eq(current).find(".brand_arrow").css("opacity", "1");
    });
  }
  init(0);
  // brandcontent hover event end

  // history slide event start
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // history slide event end
});

/*================= // LOADER //  ==========================*/
$(window).on("load", function () {
  $(".loader").fadeOut(400);
});

/*================= // NAVBAR //  ==========================*/
$(window).bind("load scroll", function () {
  var scroll = $(window).scrollTop();
  if ($("body").hasClass("home-page")) {
    if (scroll >= 125) {
      /*($(".banner-carousel").outerHeight())-150*/
      $(".web-navbar").addClass("active");
    } else {
      $(".web-navbar").removeClass("active");
    }
  } else {
    if (scroll >= 25) {
      /*($(".banner-carousel").outerHeight())-150*/
      $(".web-navbar").addClass("active");
    } else {
      $(".web-navbar").removeClass("active");
    }
  }
});
$("#overlayMenuAction").click(function () {
  $("#FIT-MANNYMenu").addClass("active");
  $("body").addClass("menu-active");
});
$("#FIT-MANNYMenuClose").click(function () {
  $("#FIT-MANNYMenu").removeClass("active");
  $("body").removeClass("menu-active");
});
const $menu = $("#FIT-MANNYMenu");
$(document).mouseup((e) => {
  if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
    $menu.removeClass("active");
    $("body").removeClass("menu-active");
  }
});

/*================= // SCROLL TOP // =======================*/
$(document).ready(function (a) {
  function b(a) {
    var topbtn = $("#moveTop");
    topbtn.removeClass("off on");
    if ("on" == a) topbtn.addClass("on");
    else topbtn.addClass("off");
  }
  window.setInterval(function () {
    var a = $(this).scrollTop();
    var c = $(this).height();
    if (a > 0) var d = a + c / 2;
    else var d = 1;
    if (d < 1e3) b("off");
    else b("on");
  }, 0);
  $("#moveTop").click(function (a) {
    a.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });
});

/*========= // INSPERATIONAL TIMELINE // ====================*/
$("ul.inspiration-step-timeline li").hover(function () {
  $("ul.inspiration-step-timeline li:nth-last-child(2)").toggleClass("active");
});

/*---========= // PRICING PLANS // ========================*/
$(".our-pricing-tbl .our-pricing-tbl-block")
  .mouseenter(function () {
    $(".our-pricing-tbl .our-pricing-tbl-block").removeClass("active");
    $(this).addClass("active");
  })
  .mouseleave(function () {
    $(".our-pricing-tbl .our-pricing-tbl-block").removeClass("active");
    $(".our-pricing-tbl-block.defaultactive").addClass("active");
  });
$(".basic-plans-tbl .basic-plan-block")
  .mouseenter(function () {
    $(".basic-plans-tbl .basic-plan-block").removeClass("active");
    $(this).addClass("active");
  })
  .mouseleave(function () {
    $(".basic-plans-tbl .basic-plan-block").removeClass("active");
    $(".basic-plan-block.defaultactive").addClass("active");
  });

/*---========= // GLOBLE CAROUSEL // ========================*/
$(document).ready(function () {
  var innerbannerswiper = new Swiper(".inner-banner-swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 1000,
    disableOnInteraction: true,
    autoplay: {
      delay: 7000,
    },
  });
  /*============== insta shots carousel  ======================*/
  var instaswiper = new Swiper(".insta-shots", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    breakpoints: {
      2500: { slidesPerView: 6 },
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
      320: { slidesPerView: 1 },
    },
  });
  /*============== // insta shots carousel //  ================*/
  /*============== our team carousel  ==========================*/
  var teamswiper = new Swiper(".our-team-members", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 10,
    breakpoints: {
      2500: { slidesPerView: 4 },
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      575: { slidesPerView: 1 },
    },
  });
  /*============== // our team carousel // ====================*/
  /*=================== partner brands =========================*/
  var partnerswiper = new Swiper(".partner-brand", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    speed: 1000,
    breakpoints: {
      2500: { slidesPerView: 5 },
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
      320: { slidesPerView: 1 },
    },
  });
  /*=================// partner brands //=======================*/
});

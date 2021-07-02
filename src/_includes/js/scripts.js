/*============== banner carousel  ==========================*/
var autoplay = 5000;
var swiper = new Swiper(".banner-swiper", {
  lazy: true,
  autoplay: {
    delay: autoplay,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner-right-nav",
    prevEl: ".banner-left-nav",
  },
});
swiper.on("slideChange", function () {
  var activeitemnumber = swiper.realIndex;
  $(".banner-pagination, .banner-current-count").text(
    "0" + (activeitemnumber + 1)
  );
  move();
});
var totalitemnumber = swiper.slides.length;
$(".banner-total-count").text("0" + totalitemnumber);

function move() {
  var elem = document.getElementById("progress");
  var width = 1;
  var autoplayTime = autoplay / 125;
  var id = setInterval(frame, autoplayTime);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}
move();
/*============== // banner carousel //  ====================*/
/*============== testimonial carousel  ======================*/
var testimonialswiper = new Swiper(".our-testimonial", {
  slidesPerView: "auto",
  autoplay: false,
  spaceBetween: 30,
  centeredSlides: true,
  autoHeight: false, //enable auto height
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
/*============== // testimonial carousel //  =================*/
$(document).ready(function () {
  $(".bmicalcform").on("submit", function (e) {
    e.preventDefault();
    var weightkgs = $("[name='bmiweight']").val(); // assume as kgs in weight
    var heightinches = $("[name='bmiheight']").val();
    var heightmeters = heightinches * 0.0254; // convert height from inches to meters
    var bmi = weightkgs / (heightmeters * heightmeters);
    $(this).find(".bmi-result").html(bmi.toFixed(2));
  });

  $(".subscribeForm").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "mail-subscribe.php",
      data: $(".subscribeForm").serialize(),
      success: function () {
        $(".subalerts").append(
          '<p class="alertClass text-white">Form Successfully Submitted.</p>'
        );
        $(".subscribeForm").trigger("reset");
        setTimeout(function () {
          $(".alertClass").fadeOut();
        }, 900);
      },
    });
  });
});

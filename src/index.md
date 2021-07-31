---
title: FitManny - Welcome
layout: base
---

<!-- container -->
<main role="main" class="content-area">
  {% include partials/_about.html %}
  <!-- price packages section -->
    <section class="price-packages weight-lifing-outline-bg pt-4 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-style-2 text-center">
              <h1><b>PRICE PACKAGES</b></h1>
              <p class="mt-1">choose package as per your requirements & needs.</p>
            </div>
          </div>
        </div>
        <div class="row my-4">
          {%- for program in programs -%}
            <div class="col-md-6 mb-4">
              <div class="price-package-block">
                <div class="price-package-block-in"
                  style="background: #000 url({{program.pic}}) right top no-repeat;">
                  <a href="{{program.link}}"
                    class="btn-style-2 btn-calculate d-inline-flex align-items-center justify-content-center">{{program.name}}</a>
                  <div class="package-price-info">
                    <h4><span class="text-pink">&pound;</span>{{program.price}}/{{program.duration}}</h4>
                    <p class="m-0"><a href={{program.link}} class="text-uppercase btn-style-1 text-white">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
          {%- endfor -%}
        </div>
      </div>
    </section>
  <!-- // price packages section -->
  {% include partials/_bmi.html %}
  <!--follow us section-->
  <section class="follow-us">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="follow-link-1">
            <h4 class="text-uppercase">FOLLOW ME</h4>
            <a class="text-uppercase" href="https://www.instagram.com/fitmannyuk/">@FITMANNYUK</a>
          </div>
        </div>
        <div class="col-6">
          <div class="follow-link-2">
            <h4 class="text-uppercase">FITMANNY IN THE SPOTLIGHT</h4>
            <a class="text-uppercase" href="https://www.instagram.com/explore/tags/fitmannyuk/">#FITMANNYUK</a>
          </div>
        </div>
        <div class="col col-12">
          <div class="pramotion-title">
            <h1 class="text-uppercase">FIT-MANNY ARMY</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="insta-shots swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper" style="transform: translate3d(-4242.5px, 0px, 0px); transition-duration: 0ms;">
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="4"><img loading="lazy"
            src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="5"><img loading="lazy"
            src="./assets/img/insta-shot-6.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="6"><img loading="lazy"
            src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="7"><img loading="lazy"
            src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" style="width: 282.833px;"
          data-swiper-slide-index="8"><img loading="lazy" src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100">
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" style="width: 282.833px;"
          data-swiper-slide-index="9"><img loading="lazy" src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100">
        </div>
        <div class="swiper-slide swiper-slide-duplicate-next" style="width: 282.833px;" data-swiper-slide-index="0">
          <img loading="lazy" src="./assets/img/insta-shot-1.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="1"><img loading="lazy"
            src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="2"><img loading="lazy"
            src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="3"><img loading="lazy"
            src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="4"><img loading="lazy"
            src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="5"><img loading="lazy"
            src="./assets/img/insta-shot-6.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="6"><img loading="lazy"
            src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide" style="width: 282.833px;" data-swiper-slide-index="7"><img loading="lazy"
            src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-prev" style="width: 282.833px;" data-swiper-slide-index="8"><img loading="lazy"
            src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-active" style="width: 282.833px;" data-swiper-slide-index="9"><img loading="lazy"
            src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" style="width: 282.833px;"
          data-swiper-slide-index="0"><img loading="lazy" src="./assets/img/insta-shot-1.jpg" alt="FF Fit" class="mw-100">
        </div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="1"><img loading="lazy"
            src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="2"><img loading="lazy"
            src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="3"><img loading="lazy"
            src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="4"><img loading="lazy"
            src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 282.833px;" data-swiper-slide-index="5"><img loading="lazy"
            src="./assets/img/insta-shot-6.jpg" alt="FF Fit" class="mw-100"></div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </section>
  <!--// follow us section-->
  {% include partials/_clients.html %}
  {% include partials/_testimonial.html %}
</main>
<!-- /.container -->

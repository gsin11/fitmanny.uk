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
                    <h5 class="line-through"><span class="text-pink">&pound;</span>{{program.price}}{% if program.duration != '' %}/{{program.duration}}{% endif %}</h5>
                    <h4><span class="text-pink">&pound;</span>{{program.offer_price}}{% if program.duration != '' %}/{{program.duration}}{% endif %}</h4>
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
            <a class="text-uppercase" href="https://www.instagram.com/greekkgod04/">@greekkgod04</a>
          </div>
        </div>
        <div class="col-6">
          <div class="follow-link-2">
            <h4 class="text-uppercase">FITMANNY IN THE SPOTLIGHT</h4>
            <a class="text-uppercase" href="https://www.instagram.com/explore/tags/greekkgod04/">#greekkgod04</a>
          </div>
        </div>
        <div class="col col-12">
          <div class="pramotion-title">
            <h1 class="text-uppercase">FITMANNY UK</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="insta-shots">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./assets/img/insta-shot-1.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-6.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-5.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-4.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-3.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-2.jpg" alt="FF Fit" class="mw-100"></div>
        <div class="swiper-slide"><img src="./assets/img/insta-shot-7.jpg" alt="FF Fit" class="mw-100"></div>
      </div>
    </div>
  </section>
  <!--// follow us section-->
  {% include partials/_testimonial.html %}
</main>
<!-- /.container -->

---
title: FitManny - Online Coaching
layout: inner
permalink: /online-coaching.html
---

<main role="main" class="content-area blogdetailspage">
  <!--blog details section-->
  <section class="blog-details position-relative">
    <div class="container">
      <div class="blog-detailed-content">
        <h1 class="blog-title">You will get these</h1>
        <ul>
        {%- for detail in programs[0].details -%}
          <li><p class="text-desc mb-0">{{detail}}</p></li>
        {%- endfor -%}
      </div>
    </div>
  </section>
  <div class="container">
    <div class="contact-redirection p-4 p-sm-5 px-md-3 py-md-4 p-sm-4 px-lg-4 py-lg-5">
      <div class="contact-redirection-info">
        <h6>Do you have any question?</h6>
        <h3 class="m-0">Feel free to get in touch with me!</h3>
      </div>
      <div class="contact-redirection-action pl-0 pl-md-4 pl-lg-5">
        <a href="/contact.html" class="btn text-uppercase btn-get-started btn-style-5">
          Contact Me
          <img src="./assets/img/right-arrow.svg" alt="FF Fit" height="20" class="ml-2">
        </a>
      </div>
    </div>
  </div>
  <!--testimonial section-->
  <section class="testimonial py-5">
    <div class="our-testimonial py-5 swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(293.5px, 0px, 0px);">
        <div class="swiper-slide testimonial-block swiper-slide-active" style="margin-right: 30px;">
          <div class="testimonial-user-details">
            <div class="avatar-image">
              <img loading="lazy" src="./assets/img/user-avatar-1.jpg" alt="FF Fit" class="mw-100">
            </div>
            <h6 class="pl-3">Lauren Jackson</h6>
            <p class="pl-3"><img loading="lazy" src="./assets/img/pin.svg" alt="FF Fit" height="25" class="mr-2"> sydney, au
            </p>
          </div>
          <div class="testimonial-message text-left">
            <h3>Excellent Service</h3>
            <p class="m-0">Ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi
              sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="swiper-slide testimonial-block swiper-slide-next" style="margin-right: 30px;">
          <div class="testimonial-user-details">
            <div class="avatar-image">
              <img loading="lazy" src="./assets/img/user-avatar-1.jpg" alt="FF Fit" class="mw-100">
            </div>
            <h6 class="pl-3">Lauren Jackson</h6>
            <p class="pl-3"><img loading="lazy" src="./assets/img/pin.svg" alt="FF Fit" height="25" class="mr-2"> sydney, au
            </p>
          </div>
          <div class="testimonial-message text-left">
            <h3>Excellent Service</h3>
            <p class="m-0">Ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi
              sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="swiper-slide testimonial-block" style="margin-right: 30px;">
          <div class="testimonial-user-details">
            <div class="avatar-image">
              <img loading="lazy" src="./assets/img/user-avatar-1.jpg" alt="FF Fit" class="mw-100">
            </div>
            <h6 class="pl-3">Lauren Jackson</h6>
            <p class="pl-3"><img loading="lazy" src="./assets/img/pin.svg" alt="FF Fit" height="25" class="mr-2"> sydney, au
            </p>
          </div>
          <div class="testimonial-message text-left">
            <h3>Excellent Service</h3>
            <p class="m-0">Ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi
              sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </section>
  <!--// testimonial section-->
</main>

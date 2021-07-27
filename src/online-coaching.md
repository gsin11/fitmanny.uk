---
title: FitManny - Online Coaching
layout: inner
permalink: /online-coaching.html
---

<main role="main" class="content-area blogdetailspage">
  <section class="new-blog weight-lifing-outline-bg py-5 py-md-5 py-sm-0">
    <div class="container new-blog-decoration pb-0 pb-md-5 pb-sm-0">
      <div class="new-blog-content">
        <div class="row">
          <div class="col-lg-6 order-lg-1 col-md-12 order-2">
            <div class="new-blog-information overflow-hidden h-100">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="new-blog-info">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                      <label class="mb-0">fitness</label>
                      <img src="./assets/img/arrow-long.svg" alt="FF Fit" width="55px" class="mw-100" />
                    </div>
                    <h1 class="mb-4">You will get these</h1>
                    {%- for detail in programs[0].details -%}
                      <p class="text-desc mb-2"><i class="fas fa-chevron-right"></i> {{detail}}</p>
                    {%- endfor -%}
                    <a href="/contact.html" class="btn-style-1 my-3 text-uppercase"><span>Purchase Now</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-2 col-md-12 order-1">
            <div class="new-blog-date">
              <div class="date-month">
                <h1>&pound;{{programs[0].price}}/{{programs[0].duration}}</h1>
              </div>
            </div>
            <div class="new-blog-banners overflow-hidden h-100">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="new-blog-banner h-100">
                    <img src="./assets/img/package_1_detail.png" alt="{{programs[0].name}}" class="mw-100">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

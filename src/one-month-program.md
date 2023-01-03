---
title: FitManny - Online Coaching
layout: inner
permalink: /one-month-program.html
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
                    <div id="smart-button-container">
                      <div style="text-align: center;">
                        <div id="paypal-button-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-2 col-md-12 order-1">
            <div class="new-blog-date">
              <div class="date-month">
                <h2 class="text-center line-through">&pound;{{programs[0].price}}/{{programs[0].duration}}</h2>
                <h1>&pound;{{programs[0].offer_price}}/{{programs[0].duration}}</h1>
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
  {% include partials/_contact-badge.html %}
  {% include partials/_testimonial.html %}
</main>
<script type="text/javascript">
  $(document).ready(function () {
    initPayPalButton("{{programs[0].name}}", {{programs[0].offer_price}});
  });
</script>

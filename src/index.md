---
title: FitManny - Welcome
layout: base
---

<!-- container -->
<main role="main" class="content-area">

  <!-- about us section -->
  <section id="aboutUs" class="about-us triangle-line-bg-left py-5">
    <div class="container py-5">
      <div class="row pt-5">
        <div class="col-lg-6">
          <div class="our-clicks-wrapper">
            <div class="our-click-holder" data-click="1"></div>
            <div class="our-click-holder" data-click="2"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-info-wrapper">
            <div class="title-style-1">
              <h1 class="text-uppercase p-0 m-0">About Me</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.</p>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
              Ipsum.</p>
            <a href="/about.html" class="btn-style-1 my-3 text-uppercase">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--// about us section -->
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

  <!-- bmi calculator section -->
  <section class="bmi-calculator triangle-line-bg-right py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 py-5">
          <div class="bmi-calculator-chart pr-5">
            <h2 class="text-uppercase">BMI CALCULATOR CHART</h2>
            <div class="bmi-chart mt-5 mb-3">
              <div class="row text-uppercase text-pink bmi-chart-title">
                <div class="col col-5">
                  bmi
                </div>
                <div class="col col-7">
                  Weight Status
                </div>
              </div>
              <div class="row bmi-chart-row">
                <div class="col col-5">
                  Below 18.5
                </div>
                <div class="col col-7">
                  Underweight
                </div>
              </div>
              <div class="row bmi-chart-row">
                <div class="col col-5">
                  18.5 - 24.9
                </div>
                <div class="col col-7">
                  Healthy
                </div>
              </div>
              <div class="row bmi-chart-row">
                <div class="col col-5">
                  25.0 - 29.9
                </div>
                <div class="col col-7">
                  Overweight
                </div>
              </div>
              <div class="row bmi-chart-row">
                <div class="col col-5">
                  30.0 - and Above
                </div>
                <div class="col col-7">
                  Obese
                </div>
              </div>
            </div>
            <div class="bmi-chart-note">
              <div class="note-icon">
                <img loading="lazy" src="./assets/img/shild.svg" alt="FF Fit" width="30" class="mw-100">
              </div>
              <p class="m-0"><b>* BMR</b> Metabolic Rate <b>/ BMI</b> Body Mass Index</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 py-5">
          <div class="bmi-calculator-form">
            <h2 class="text-uppercase">CALCULATE YOUR BMI</h2>
            <div class="bmi-form">
              <form class="FIT-MANNY-form-theme1 pt-5 bmicalcform">
                <div class="row">
                  <div class="col col-6">
                    <div class="form-group">
                      <label for="yourHeight">Height(inches) :*</label>
                      <div class="position-relative">
                        <input type="text" class="form-control" id="yourHeight" placeholder="centimeter"
                          name="bmiheight" required="">
                        <img loading="lazy" src="./assets/img/height.svg" alt="FF Fit" class="field-icon">
                      </div>
                    </div>
                  </div>
                  <div class="col col-6">
                    <div class="form-group">
                      <label for="yourWeight">Weight(kgs) :*</label>
                      <div class="position-relative">
                        <input type="text" class="form-control" id="yourWeight" placeholder="kilogram"
                          name="bmiweight" required="">
                        <img loading="lazy" src="./assets/img/weight.svg" alt="FF Fit" class="field-icon">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col col-6">
                    <div class="form-group">
                      <label for="yourAge">Age :*</label>
                      <div class="position-relative">
                        <input type="text" class="form-control" id="yourAge" placeholder="years" name="bmiage"
                          required="">
                        <i class="fas fa-calendar field-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col col-6">
                    <div class="form-group">
                      <label for="selectGender">Gender :*</label>
                      <div class="position-relative">
                        <select class="form-control" id="selectGender" name="bmigender" required="">
                          <option value="">select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <img loading="lazy" src="./assets/img/gender.svg" alt="FF Fit" class="field-icon">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col col-12">
                    <div class="form-group">
                      <label for="selectActivity">Select an activity factor :*</label>
                      <div class="position-relative select-activity">
                        <select class="form-control" id="selectActivity" name="bmiactivity" required="">
                          <option value="">select activity</option>
                          <option value="Activity 1">Activity 1</option>
                          <option value="Activity 2">Activity 2</option>
                        </select>
                        <i class="fas fa-chevron-down field-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="comalert col-md-12"></div>
                  <div class="col-12 text-md-left text-sm-center text-left"><button
                      class="btn-style-2 btn-calculate text-uppercase d-inline-flex align-items-center justify-content-center"
                      id="bmicalcbtn" type="submit">Calculate <img loading="lazy" src="./assets/img/right-arrow.svg"
                        alt="FF Fit" height="20" class="ml-3"></button><span class="float-right BMI-calc-value">BMI :
                      <i class="bmi-result">0</i></span></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--// bmi calculator section -->

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

  <!--our team section-->
  <section class="our-team cardio-outline-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-style-2 pt-5 mt-0 mt-sm-5">
            <h1><b>MY CLIENTS</b></h1>
            <p class="text-uppercase">MEET MY SATISFIED CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
    <div class="our-team-members mt-4 mb-5 swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper" style="transform: translate3d(-2987.25px, 0px, 0px); transition-duration: 0ms;">
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="2">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">03</div>
                <img loading="lazy" src="./assets/img/team-member-3.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Ruth Edwards</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00a2ff;"></span>weight trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="3">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">04</div>
                <img loading="lazy" src="./assets/img/team-member-4.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Andru Backham</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#7800ff;"></span>sports trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="4">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">01</div>
                <img loading="lazy" src="./assets/img/team-member-1.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Bruce Bailey</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00ff5b;"></span>circuit trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="5">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">02</div>
                <img loading="lazy" src="./assets/img/team-member-2.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Samurai Ninja</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#ff6c00;"></span>fintess trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide" style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="0">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">01</div>
                <img loading="lazy" src="./assets/img/team-member-1.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Bruce Bailey</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00ff5b;"></span>circuit trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide" style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="1">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">02</div>
                <img loading="lazy" src="./assets/img/team-member-2.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Samurai Ninja</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#ff6c00;"></span>fintess trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-prev" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="2">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">03</div>
                <img loading="lazy" src="./assets/img/team-member-3.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Ruth Edwards</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00a2ff;"></span>weight trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-active" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="3">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">04</div>
                <img loading="lazy" src="./assets/img/team-member-4.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Andru Backham</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#7800ff;"></span>sports trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-next" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="4">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">01</div>
                <img loading="lazy" src="./assets/img/team-member-1.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Bruce Bailey</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00ff5b;"></span>circuit trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide" style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="5">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">02</div>
                <img loading="lazy" src="./assets/img/team-member-2.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Samurai Ninja</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#ff6c00;"></span>fintess trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="0">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">01</div>
                <img loading="lazy" src="./assets/img/team-member-1.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Bruce Bailey</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00ff5b;"></span>circuit trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 416.75px; margin-right: 10px;"
          data-swiper-slide-index="1">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">02</div>
                <img loading="lazy" src="./assets/img/team-member-2.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Samurai Ninja</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#ff6c00;"></span>fintess trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="2">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">03</div>
                <img loading="lazy" src="./assets/img/team-member-3.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Ruth Edwards</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#00a2ff;"></span>weight trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          style="width: 416.75px; margin-right: 10px;" data-swiper-slide-index="3">
          <div class="team-member-block">
            <div class="d-flex align-items-start">
              <div class="team-member-info">
                <div class="member-count text-right">04</div>
                <img loading="lazy" src="./assets/img/team-member-4.jpg" alt="FF Fit" class="mw-100">
                <div class="joining-date text-uppercase">
                  <span>Joined : Febrary 2012</span>
                </div>
                <div class="member-info text-left">
                  <div class="name-expertise">
                    <h3 class="m-0">Andru Backham</h3>
                    <p class="my-2"><span class="indicator mr-2" style="border-color:#7800ff;"></span>sports trainer
                    </p>
                  </div>
                  <img loading="lazy" src="./assets/img/arrow-long.svg" alt="FF Fit" height="20" class="mw-100">
                </div>
              </div>
              <div class="text-uppercase member-experience">
                14 year experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </section>
  <!--// our team section-->

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
<!-- /.container -->

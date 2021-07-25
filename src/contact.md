---
title: FitManny - Contact
layout: inner
permalink: /contact.html
---

<!-- container -->
<main role="main" class="content-area contact-page">

  <!-- contact information section -->
  <section class="contact-info weight-lifing-outline-bg pt-4 pb-sm-5">
    <div class="container">
      <div class="row pb-sm-4 pt-sm-0 pt-5">
        <div class="col-md-12">
          <div class="title-style-5 text-center text-uppercase">
            <h1><b>CONTACT INFO</b></h1>
            <p class="mt-1 mx-auto">Quickly Get in Touch</p>
          </div>
        </div>
      </div>
      <div class="row py-3 py-sm-0 py-lg-5">
        <div class="col-lg-4 col-md-6">
          <div class="contact-info-block">
            <div class="contact-info-block-in">
              <div class="icon">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div>
                <h1>Call Us</h1>
                <p>{{userData.mobile}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="contact-info-block">
            <div class="contact-info-block-in">
              <div class="icon">
                <i class="fas fa-envelope-open mb-2"></i>
              </div>
              <div>
                <h1>Mail Us</h1>
                <p>{{userData.email}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 mt-lg-0 mt-md-4">
          <div class="contact-info-block">
            <div class="contact-info-block-in">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h1>Address</h1>
                <p>Edinburgh, Scotland, EH6 6SU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--contact form section-->
  <section class="contact-form triangle-line-bg-left">
    <div class="contact-form-in">
      <div class="container">
        <div class="head-note p-sm-5 p-4">
          <p class="m-0"><sapn class="d-md-block d-none">Shoot us an email and tell us about your query or </sapn><b>just say hello!</b> We'll get back to you within 48hrs.</p>
          <i class="fas fa-envelope-open text-pink"></i>
        </div>
        <div class="material-form py-5">
          <form class="material-form py-sm-0 py-lg-5 submit-query-form" action="#!" method="post" name="submitQueryForm" >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputFName">First Name : *</label>
                  <i class="fas fa-user"></i>
                  <input placeholder="enter first name" type="text" required id="inputFName" name="fname"  required>
                  <small id="errorHandling" class="form-text text-muted">Show error message here</small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputLName">Last Name : *</label>
                  <i class="fas fa-user"></i>
                  <input placeholder="enter last name" type="text" required id="inputLName" name="lname"  required>
                  <small id="errorHandling" class="form-text text-muted">Show error message here</small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputEmailAddress">Email Address : *</label>
                  <i class="fas fa-envelope-open"></i>
                  <input placeholder="enter email id" type="text" required id="inputEmailAddress" name="email"  required>
                  <small id="errorHandling" class="form-text text-muted">Show error message here</small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputPhoneNumber">Phone Number : *</label>
                  <i class="fas fa-phone-square"></i>
                  <input placeholder="enter number" type="text" required id="inputPhoneNumber" name="tel"  required>
                  <small id="errorHandling" class="form-text text-muted">Show error message here</small>
                </div>
              </div>
              <div class="col-11">
                <div class="form-group">
                  <label for="inputComment">Message : *</label>
                  <textarea placeholder="discribe your message..." required id="inputComment" rows="6" name="message" ></textarea>
                  <small id="errorHandling" class="form-text text-muted">Show error message here</small>
                  <p class="text-right"><b>[</b> message text can be maximum 500 charctor <b>]</b></p>
                </div>
              </div>
              <div class="col-11">
                <label for="iAgree" class="custome-checkbox iagreeupdate">
                  I agree to receive information via the Email
                  <input type="checkbox" name="acceptance" id="iAgree" required>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-11 pt-4 py-sm-5">
                <button type="submit" class="btn-style-2 btn-send-message btn-calculate text-uppercase d-inline-flex align-items-center justify-content-center" name="postComment">Send Message <img loading="lazy" src="./assets/img/right-arrow.svg" alt="FF Fit" height="20" class="ml-3"></button>
              </div>
              <div class="subalerts"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
<!-- /.container -->

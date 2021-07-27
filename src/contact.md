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

  <iframe src="{{userData.contactFormURI}}" style="width: 100%; min-height: 800px;" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</main>
<!-- /.container -->

import React from "react";

export default function Gallery() {
  return (
    // Gallery Section Starts
    <div class="container-fluid gallery" id="gallery">
      <h1 class="gallery_h1">
        <img src="img/camera.png" width="50px" />
        here's our gallery
        <img src="img/camera.png" width="50px" />
      </h1>
      <div class="image-gallery">
        <div class="row">
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us1.jpeg" class="img-col" />
          </div>
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us4.jpg" class="img-col" />
          </div>
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us6.jpg" class="img-col" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us2.jpg" class="img-col" />
          </div>
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us5.jpeg" class="img-col" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us10.jpg" class="img-col" />
          </div>
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us7.jpeg" class="img-col" />
          </div>
          <div class="col-lg-4 col-md-6 img-col-wrapper">
            <img src="img/us8.jpg" class="img-col" />
          </div>
        </div>
      </div>
    </div>
    // Gallery Section Ends
  );
}

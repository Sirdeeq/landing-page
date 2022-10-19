import React from "react";

const New = () => {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container"><a href={() => false} class="navbar-brand d-flex align-items-center"> <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i><strong>Snowflake</strong></a>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href={() => false} class="nav-link font-italic"> Home </a></li>
        <li class="nav-item active"><a href={() => false} class="nav-link font-italic"> About </a></li>
        <li class="nav-item active"><a href={() => false} class="nav-link font-italic"> Services </a></li>
        <li class="nav-item active"><a href={() => false} class="nav-link font-italic"> Contact</a></li>
      </ul>
    </div>
  </div>
</nav> */}

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <i class="fa fa-bar-chart fa-2x mb-3 text-primary" />
              <h2 class="font-weight-light">Disaster Management Cycle</h2>
              <p class="font-italic text-muted mb-4">
                Early warning systems help to reduce economic losses and
                mitigate the number of injuries or deaths from a disaster, by
                providing information that allows individuals and communities to
                protect their lives and property. Early warning information
                empowers people to take action when a disaster close to
                happening.
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-6">
              <i class="fa fa-leaf fa-2x mb-3 text-primary" />
              <h2 class="font-weight-light">Environmental Friendly</h2>
              <p class="font-italic text-muted mb-4">
                Early warning systems can save many lives as long as they are
                centred on the needs of the people.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

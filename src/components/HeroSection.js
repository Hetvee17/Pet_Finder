import React from "react";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-image parallax">
      {/* <img src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1050&q=80" /> */}
      <div className="hero-text w-50">
        <div class="input-group input-group-md " id="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search by location"
          />
          <div class="input-group-append ">
            <button
              class="btn btn-info hvr-icon-forward"
              type="button"
              id="button-addon2"
            >
              Search <i class="fa fa-chevron-circle-right hvr-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

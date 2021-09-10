import React from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
function HeroSection() {
  return (
    <div className="hero-container">
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

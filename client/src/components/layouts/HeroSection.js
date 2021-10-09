import React, { useState ,Fragment } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
function HeroSection() {
  const [keyword, setKeyword] = useState();
  const history = useHistory();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/pets/${keyword}`);
    } else {
      history.push(`/pets`); 
    }
  }
  return (
    <Fragment>
      {" "}
      <div className="hero-container">
        <div className="hero-text w-50">
          <div class="input-group input-group-md " id="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search pet by location"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div class="input-group-append ">
              <button
                class="btn btn-info hvr-icon-forward"
                type="button"
                id="button-addon2"
                onClick={searchSubmitHandler}
              >
                Search <i class="fa fa-chevron-circle-right hvr-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;

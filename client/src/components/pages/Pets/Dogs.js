import React from "react";

function Dogs() {
  return (
    <div>
      <div class="container mt-5">
        <h1 class="display-3">Search Dog by Breed</h1>
        <div class="row">
          <div class="col-12 col-md-12">
            <form action="/dogs" method="GET">
              <div class="form-group">
                <select
                  name="breed"
                  id="breed_select"
                  class="custom-select breed"
                >
                  <option></option>
                </select>
              </div>
              <button class="btn btn-outline-dark hvr-grow" id="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogs;

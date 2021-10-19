import React from 'react'

function Selected({user}) {
    return (
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-xl-3 col-sm-6 col-12 mt-3">
                  <div className="card  petAddedCard">
                    <div
                      classNameName="images card-img-top inner"
                      style={{
                        backgroundImage:
                          'url(("https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg ")',
                      }}
                    >
                      <button
                        classNameName="btn btn-outline-secondary pet-pics"
                        data-toggle="modal"
                        data-target="#petsModalUpload"
                      >
                        <i className="fa fa-camera" />
                      </button>
                      {/* aya database mathi uploaded pets */}
                    </div>
                    {/* image end */}
                    {/* card body start */}
                    <div className="card-body">
                      <h5 className="card-title">name,bread</h5>
                      <p className="card-text">
                        trained vaccinated
                        {/* here add if trained nd vc of not */}
                      </p>
                      <p className="card-text">
                        <i
                          className="fa fa-address-book-o"
                          aria-hidden="true"
                        />
                        &nbsp Location
                        {/* here add location from backnd */}
                      </p>
                    </div>
                    {/* card body end */}
                    {/* card footer start */}
                    <div className="card-footer">
                      <span className="like-container">
                        <button
                          type="submit"
                          className="btn hvr-glow like-click"
                        >
                          <i className="fa fa-heart" style={{ color: "red" }} />
                        </button>
                        <span className="likes">
                          5{/* here add like count */}
                        </span>
                      </span>
                      <a
                        href="#petProfile"
                        className="btn more btn-outline-primary ml-3"
                      >
                        <i className="fa fa-info px-1" />
                      </a>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
      
    )
}

export default Selected

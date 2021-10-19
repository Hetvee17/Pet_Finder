import React from 'react'

function TitleButton({Title}) {
    return (
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
              <div className="row text-center">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                  <div
                    className="alert alert-primary py-3 mt-5"
                    style={{ backgroundColor: "#231942", color: "white" }}
                  >
                   {Title}
                  </div>
                </div>
              </div>
            </div>

    )
}

export default TitleButton

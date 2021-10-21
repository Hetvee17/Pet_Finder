import React, { useState } from "react";
import Edit from "./Edit";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
};

function Profile({ userData }) {
  const [editOpen, setEditOpen] = useState(false);
  return (
    <>
      <div className="row mb-5" style={OTHER_CONTENT_STYLES}>
        <div className="col-12 col-lg-12 col-xl-12 col-sm-12 col-md-12">
          <div className="jumbotron-fluid">
            {/* user profile image */}
            <form method="GET" id="userProfile">
              <div
                classNameName="prof-image card-img-top "
                style={{
                  backgroundImage: `url(${userData.avatar.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  top: "56px",
                  float: "left",
                  width: "100%",
                  height: "500px",
                  backgroundPosition: " 50% 50%",
                  position: " relative",
                }}
              >
                <div className="profile-tab text-center">
                  <p class="text-white">
                    <i className="fa fa-envelope mr-1 email text-white" />
                    &nbsp;
                    {userData.email}
                  </p>
                  <p class="text-white">
                    <i className="fa fa-user mr-1 username text-white" />
                    &nbsp;
                    {userData.name}
                  </p>
                  <p>
                    <a
                      onClick={() => {
                        setEditOpen(true);
                      }}
                      className="text-white"
                      //data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit profile"
                      style={BUTTON_WRAPPER_STYLES}
                    >
                      <i className="fa fa-pencil text-white" /> Edit
                    </a>
                  </p>
                  <p className="mb-5">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalUpload"
                      href="#Upload"
                      className="text-white mb-5"
                      //data-toggle="tooltip"
                      data-placement="bottom"
                      title="Change profile"
                    >
                      <i className="fa fa-upload mr-1 text-white"></i>Upload
                    </a>
                  </p>
                </div>
                {/**Profile tab */}
              </div>
            </form>
            {/**Profile pic*/}
          </div>
        </div>
      </div>
      <div className="container m-5 p-3">
        <Edit
          user={userData}
          open={editOpen}
          onClose={() => setEditOpen(false)}
        >
          sjndjn
        </Edit>
      </div>
    </>
  );
}

export default Profile;

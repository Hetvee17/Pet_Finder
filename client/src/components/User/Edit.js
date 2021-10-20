import React, { useEffect, useState } from "react";
import "../modernForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default function Edit({ open, children, onClose }) {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    avatar: {
      public_id: "",
      url: "",
    },
    _id: "",
  });

  const callUserProf = async () => {
    try {
      const res = await fetch(
        "/UserProf",
        {
          method: "GET",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
        []
      );
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200 || !data) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      History.push("/Login");
    }
  };
  useEffect(() => {
    callUserProf();
  }, []);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const updateInfo = async () => {
    try {
      const { name, email, _id } = userData;
      console.log(_id);
      const res = await fetch(`/UserProf/update/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("user not found");
        console.log("user not found");
      } else if (res.status === 201) {
        window.alert("Updated successful");
        console.log("Updated successful");
        console.log(res.user);
      } else {
        window.alert("unknown error");
        console.log("unknown error");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  if (!open) return null;
  return (
    <div>
      {children}
      <div
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        style={MODAL_STYLES}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Info</h5>&nbsp;
              <span className="text-muted text-danger"> * required field</span>
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body" id="userUpdateModalForm">
              <form
                id="userProfile"
                style={{ border: "1px", solid: "#ccc" }}
                enctype="multipart/form-data"
              >
                <div className="form-container">
                  <label for="Name">
                    <b>Name</b>
                    <span className="text-muted text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="updateUserInfo"
                    placeholder="Enter  name..."
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}
                    required
                  />
                  <label for="Email">
                    <b>Email</b>
                    <span className="text-muted text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="updateUserInfo"
                    placeholder="Enter Email..."
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputs}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                id="updateInfo"
                onClick={updateInfo}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../modernForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default function Edit({ open, children, onClose }) {
  const [avatar, setAvatar] = useState();
  const [_id, set_ID] = useState();
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
      //    console.log(data);
      set_ID(data._id);
      console.log("id :", _id);
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

  const handleFile = (e) => {
    console.log("image :", e.target.files[0]);
    const reader = new FileReader();
    // 0= initail 1= proce ssing 2== done
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const updateInfo = async () => {
    try {
        console.log("id from update :", avatar);
        const myForm = new FormData();
        myForm.set("avatar", avatar);
    //   const res = await fetch(, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body:myForm,
    //   });
        const config = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        };

        const { data } = await axios.post(
          `/updateProfile/${_id}`,
          myForm,
          config
        );

      if (data.success != true || !data) {
        window.alert("user not found");
        console.log("user not found");
      } else if (data.sucess==true) {
        window.alert("Updated successful");
        console.log("Updated successful");
        console.log(data.user);
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
      <div id="exampleModalUpload" style={MODAL_STYLES}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Change profile pic</h5>{" "}
              <button type="button" class="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                id="profile-upload"
                style={{ border: "1px", solid: "#ccc" }}
                enctype="multipart/form-data"
              >
                <div class="form-container">
                  <label for="File">
                    <b>Choose Profile</b>{" "}
                    <span class="text-muted text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleFile}
                    class="updateUserInfo"
                    required
                  />

                  <button
                    type="submit"
                    class="btn btn-primary btn-block py-3"
                    id="updateInfo"
                    onClick={updateInfo}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

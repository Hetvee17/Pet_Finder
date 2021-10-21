// import { Link } from "react-router-dom";
import { getUserPet } from "../../actions/petAction";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import "../modernForm.css";
import TitleButton from "./TitleButton";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";
import Cards from "../layouts/Cards";
export default function UserProf() {
  const alert = useAlert();
  const History = useHistory();
  const [userData, setUserData] = useState({
    email: "notDefind",
    name: "notDefind",
    avatar: {
      public_id: "notDefind",
      url: "notDefind",
    },
    _id: "",
  });

  const { pets, loading, error } = useSelector(
    (state) => state.userPets
  );
  const dispatch = useDispatch();

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
      //console.log(data);
      setUserData(data);
      if (!res.status === 200 || !data) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      //   console.log(error);
      History.push("/Login");
    }
  };
  useEffect(() => {
    callUserProf();
    if (error) {
      return alert.error(error);
    }
    dispatch(getUserPet());
  }, [dispatch]); //we cant use async fun in useEffect so defined it outside

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/*  */}
          <div className="container-fluid" id="wrapper-container">
            <div id="currentSection"></div>
            <div className="container-fluid  mb-5 ">
              {/* top image */}
              <Profile userData={userData} />
              <div className="row " id="Uploads">
                <TitleButton Title="Uploaded Pet" />
                {pets && pets.map((pet) => <Cards pet={pet} />)}
              </div>
            </div>
          </div>
          {/* profile modal and pet mmodal add nai kri hju */}
        </>
      )}
    </>
  );
}

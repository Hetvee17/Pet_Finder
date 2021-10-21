import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../layouts/Cards";
import HeroSection from "../layouts/HeroSection";
import MetaData from "../../MetaData";
import { getPet } from "../../actions/petAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/Loader";
import {useAlert} from 'react-alert';
function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, pets } = useSelector(
    (state) => state.pets
  );
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getPet());
  }, [dispatch,error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Home" />
          <HeroSection />
          <div
            className="container"
            id="container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justify: "center",
            }}
          >
            <div className="row mt-4 ml-3 mr-3 mb-5">
              {pets && pets.map((pet) => <Cards pet={pet} />)}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

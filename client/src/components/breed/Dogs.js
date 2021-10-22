import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import "./dogs.css";
import { getBreeds } from "../../actions/petAction";
function Dogs() {
  const [breed, setBreed] = useState("");
  const dispatch = useDispatch();
  const { pets, error, loading } = useSelector((state) => state.breeds);
  const [breedSelected, setBreedSelected] = useState(false);
  const handleBreed = (e) => {
    console.log(e.target.value);
    setBreedSelected(true);
    setBreed(e.target.value);
  };
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getBreeds(breed));
  }, [dispatch, breed]);
  return (
    <>
      {" "}
      {loading ? (
        <> </>
      ) : (
        <div className="container m-5 ">
          <div className="container ">
            <h1 className="display-3">Search Pet by Breed</h1>
            <div className="row">
              <div className="col-12 col-md-12">
                <form action="/dogs" method="GET">
                  <div className="form-group">
                    <select
                      name="breed"
                      id="breed_select"
                      onChange={handleBreed}
                      className="custom-select breed "
                      style={{ width: "100%", height: "50px" }}
                    >
                      <option value="" />
                      {pets &&
                        pets.map((pet) => {
                          return <option value={pet.breed}>{pet.breed}</option>;
                        })}
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container result m-3">
            <div className="row ">
              <div className="col-md-7 col-sm-7 col-7 ">
                <div className="jumbotron">
                  {!breedSelected ? (
                    <>
                      <p className="lead">Select a dog breed to get info.</p>
                    </>
                  ) : (
                    <>
                      {pets &&
                        pets.map((pet) => {
                          return (
                            <>
                              <h3 class="display-4">{pet.breed}</h3>
                              <hr class="my-4" />
                              <p>
                                <strong>Life Span</strong>
                                {pet.lifeSpan}
                              </p>
                              <p>
                                <strong>Temprament</strong>
                                {pet.temprament}
                              </p>
                              <p>
                                <strong>Average Weight</strong>
                                {pet.averageWeight}
                              </p>
                              <p>
                                <strong>Average Height</strong>
                                {pet.averageHeight}
                              </p>
                            </>
                          );
                        })}
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-5 col-7 col-sm-7 img-fluid">
                <div id="dogImg">
                  {!breedSelected ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      {pets &&
                        pets.map((pet) => {
                          return (
                            <>
                              <img src={pet.imageUrl} class="img-fluid" />
                            </>
                          );
                        })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dogs;

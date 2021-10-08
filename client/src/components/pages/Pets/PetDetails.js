import React, { useEffect } from "react";
import "./petDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getPetDetails , clearErrors} from "../../../actions/petAction";
import Loader from "../../layouts/Loader";
export default function PetDetails({ match }) {
  const dispatch = useDispatch();

  const { pet, loading , error ,alert} = useSelector((state) => state.petDetails);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getPetDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div class="container-individual  mb-5">
          <div class="card mb-3">
            <div class="inner">
              <img
                class="card-img-top"
                src={
                  pet.images !== undefined
                    ? pet.images.url
                    : "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1050&q=80"
                }
                width="400px"
                height="500px"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{pet.name}</h5>
              <hr />
              <div class="about">
                <span>
                  <ul>
                    <li class="inline">{pet.catagory}</li>
                    <li class="inline">{pet.breed}</li>
                    <li class="inline">{pet.age}</li>
                  </ul>
                </span>
              </div>

              <hr />
              <div class="look">
                <span>
                  <ul>
                    <li class="inline">{pet.color}</li>
                  </ul>
                </span>
              </div>
              <hr />
              <div class="location">
                <span>
                  <ul>
                    <li class="inline">{pet.location}</li>
                  </ul>
                </span>
                <hr />
              </div>

              <div class="desc">
                <p>{pet.description}</p>{" "}
              </div>
              <div class="other">
                <span>
                  {" "}
                  <ul>
                    Vaccinated:
                    <li class="inline">{pet.vaccinated}</li>
                    Trained:
                    <li class="inline">{pet.trained}</li>
                  </ul>
                </span>
              </div>
              <hr />
              <button
                type="button"
                // value="{{petprofile._id}}"
                class="btn btn-block btn-adopt"
              >
                Adopt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

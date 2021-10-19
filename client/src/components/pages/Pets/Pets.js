import React, { useState, useEffect } from "react";
import { getPet } from "../../../actions/petAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layouts/Loader";
// import { useAlert } from "react-alert";
import Cards from "../../layouts/Cards";
import "./Pets.css";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";

const Catagories = ["dog", "cat"];

export default function Pets({ match }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [catagory, setCatagory] = useState("");
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const { pets, loading, error, resultPerPage, filteredPetCount } = useSelector(
    (state) => state.pets
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getPet(keyword, currentPage, catagory));
  }, [dispatch, currentPage, catagory]);

  let count = filteredPetCount;
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="petsHeading">
            Pets
            {/* search:{keyword} */}
          </div>

          <br />
          <Typography>
            Catagories
            <ul className="catagoryBox" id="catagories">
              {Catagories.map((catagory) => (
                <li
                  clasName="catagory-link"
                  key={catagory}
                  onClick={() => setCatagory(catagory)}
                >
                  {catagory}
                </li>
              ))}
            </ul>
          </Typography>
          <div className="pets">
            <div className="row mt-4 ml-3 mr-3 mb-5">
              {pets && pets.map((pet) => <Cards pet={pet} key={pet.id} />)}
            </div>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              ></Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
}

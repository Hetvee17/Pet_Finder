import React, { useState, useEffect } from "react";
import { getPet } from "../../../actions/petAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layouts/Loader";
import { useAlert } from "react-alert";
import Cards from "../../layouts/Cards";
import "../../../App.css";
import Pagination from "react-js-pagination";

export default function Pets({ match }) {
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const { pets, loading, error, petsCount, resultPerPage } = useSelector(
    (state) => state.pets
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getPet(keyword, currentPage));
  }, [dispatch, currentPage]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="petsHeading">
            Pets search:{keyword}
            <br />
          </div>
          <div className="pets">
            <div className="row mt-4 ml-3 mr-3 mb-5">
              {/* <Cards pet={Pet} /> */}
              {pets && pets.map((pet) => <Cards pet={pet} key={pet.id} />)}
            </div>
          </div>
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={petsCount}
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
        </>
      )}
    </div>
  );
}

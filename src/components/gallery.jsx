import React from "react";
import CarouselBox from "./carousel";

export const Gallery = (props) => {
  return (


    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <h3>
            Commercial/Industrial Tenant Finishes & Remodels
          </h3>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >   <CarouselBox>

                  </CarouselBox>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
        <div className="section-title">
          <h3>
            Commercial/Industrial Ground Up Construction
          </h3>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <CarouselBox>

                  </CarouselBox>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

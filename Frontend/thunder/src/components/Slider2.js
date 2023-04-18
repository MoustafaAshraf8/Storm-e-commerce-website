import React from "react";

let promo = [
  "promo-0",
  "promo-1",
  "promo-2",
  "promo-3",
  "promo-4",
  "promo-5",
  "promo-6",
  "promo-7",
  "promo-8",
];

let checkfn = () => {
  if (promo.length !== 0)
    return (
      <>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </>
    );
};

let checkfn2 = () => {
  if (promo.length !== 0) {
    return (
      <>
        <div className="carousel-indicators">
          {promo.map((promo) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            );
          })}
        </div>
      </>
    );
  }
};

const Slider2 = () => {
  return (
    <div
      className="container-fluid p-0"
      style={{ height: "300px", width: "75%", border: "solid 3px black" }}
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-100 h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators d-none d-sm-block">
          {promo.map((promo) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner w-100 h-100">
          {promo.map((promo, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active w-100 h-100">
                  <img
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="d-block w-100 h-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-sm-block">
                    <h5>First slide label</h5>
                    <p>{promo}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item w-100 h-100">
                  <img
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="d-block w-100 h-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-sm-block">
                    <h5>First slide label</h5>
                    <p>{promo}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider2;

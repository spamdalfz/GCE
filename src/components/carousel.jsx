import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import sprite from "../sprite.svg";

/*
To ADD images to carousel, simply add image to 
/public/img/portfolio 
and add url to images array below.
 */

const images = [
  "/img/portfolio/01-large.jpg",
  "/img/portfolio/02-large.jpg",
  "/img/portfolio/02-small.jpg",
  "/img/portfolio/03-small.jpg",
  "/img/portfolio/04-large.jpg",
  "/img/portfolio/05-large.jpg",

];

function CarouselBox() {
  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position:
        state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${
          state.previousItem > state.selectedItem ? "-45deg" : "45deg"
        })`,
        opacity: "0",
        filter: `blur( ${
          state.previousItem === state.selectedItem ? "0px" : "5px"
        })`,
      },
    };
  };
  return (
    <div className="box">
      <Carousel
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <svg>
                  <use xlinkHref={sprite + "#right"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <svg>
                  <use xlinkHref={sprite + "#left"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
        statusFormatter={(currentItem, total) => {
          return (
            <p>
              image {currentItem} of {total}
            </p>
          );
        }}
        transitionTime={310}
        animationHandler={rotateAnimationHandler}
        swipeable={false}        
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default CarouselBox;

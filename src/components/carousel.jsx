import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "../sprite.svg";
import "../App.css";

const CustomCarousel = ({ project }) => {
  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    const rotateValue = state.previousItem > state.selectedItem ? "-45deg" : "45deg";
    const blurValue = state.previousItem === state.selectedItem ? "0px" : "5px";

    const slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position: state.previousItem === state.selectedItem ? "relative" : "absolute",
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
        transformOrigin: "0 100%",
        transform: `rotate(${rotateValue})`,
        opacity: "0",
        filter: `blur(${blurValue})`,
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
        statusFormatter={(currentItem, total) => (
          <p>{project.title}</p>
        )}
        transitionTime={310}
        animationHandler={rotateAnimationHandler}
        swipeable={false}
      >
        {project.images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt={`project_${index}`} src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CarouselBox = () => {
  const projects = [
    {
      title: "Affordable Dentures",
      images: [
        "/img/portfolio/affordable_dentures/IMG_6391.jpg",
        "/img/portfolio/affordable_dentures/IMG_6389.jpg",
        "/img/portfolio/affordable_dentures/IMG_6385.jpg",
        "/img/portfolio/affordable_dentures/IMG_6386.jpg",
        "/img/portfolio/affordable_dentures/IMG_6387.jpg",
        "/img/portfolio/affordable_dentures/IMG_6389.jpg",
        "/img/portfolio/affordable_dentures/IMG_6390.jpg"
      ],
    },
    {
      title: "Associates In Dental",
      images: [
        "/img/portfolio/associates_in_dental/AD-Progress.jpg",
        "/img/portfolio/associates_in_dental/AD-Progress-2.jpg",
        "/img/portfolio/associates_in_dental/AD-Progress-3.jpg"
      ],
    },
    // Add more projects as needed
    // {
    //   title: "Another Project",
    //   images: [
    //     "/img/portfolio/another_project/IMG_1.jpg",
    //     "/img/portfolio/another_project/IMG_2.jpg",
    //     // Add more images for Another Project if needed
    //   ],
    // },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <CustomCarousel key={index} project={project} />
      ))}
    </div>
  );
};

export default CarouselBox;

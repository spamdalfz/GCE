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
  "/img/portfolio/affordable_dentures/IMG_6389.jpg",
  "/img/portfolio/associates_in_dental/AD-Progress.jpg",
  "/img/portfolio/beauty_bar/IMG_6984.jpg",
  "/img/portfolio/beauty_bar/IMG_6985.jpg",
  "/img/portfolio/big_r/IMG_20170317_094745.jpg",
  "/img/portfolio/big_r/IMG_20170317_094820.jpg",
  "/img/portfolio/boot_barn/IMG_6468.jpg",
  "/img/portfolio/boot_barn/IMG_6463.jpg",
  "/img/portfolio/boot_barn/IMG_6459.jpg",
  "/img/portfolio/cav_west/IMG_6421.jpg",
  "/img/portfolio/cav_west/IMG_6434.jpg",
  "/img/portfolio/cav_west/IMG_6424.jpg",
  "/img/portfolio/cav_west/IMG_6427.jpg",
  "/img/portfolio/dollar_tree_aurora/IMG_6414.jpg",
  "/img/portfolio/dollar_tree_aurora/IMG_6415.jpg",
  "/img/portfolio/dollar_tree_colorado_springs/DT-3.jpg",
  "/img/portfolio/dollar_tree_colorado_springs/DT-4.jpg",
  "/img/portfolio/dollar_tree_mesa_ridge/IMG_6980.jpg",
  "/img/portfolio/ent/ENT-Exterior_-2.jpg",
  "/img/portfolio/ent/ENT-Exterior_-3.jpg",
  "/img/portfolio/get_clipped/IMG_7256.jpg",
  "/img/portfolio/harris_beam/20161111_104441.jpg",
  "img/portfolio/jaks_brewery/IMG_7009.jpg",
  "img/portfolio/longhorn_steak/IMG_6994.jpg",
  "img/portfolio/longhorn_steak/IMG_6998.jpg",
  "img/portfolio/longhorn_steak/IMG_7003.jpg",
  "img/portfolio/longhorn_steak/IMG_7005.jpg",
  "img/portfolio/mod_pizza/IMG_7268.jpg",
  "img/portfolio/navy_fcu/IMG_6455.jpg",
  "img/portfolio/navy_fcu/IMG_6450.jpg",
  "img/portfolio/oskar_blues/ft_building.jpg",
  "img/portfolio/oskar_blues/IMG_7286.jpg",
  "img/portfolio/oskar_blues/IMG_7287.jpg",
  "img/portfolio/oskar_blues/IMG_20170616_110303.jpg",
  "img/portfolio/oskar_blues/IMG_20170616_110909.jpg",
  "img/portfolio/oskar_blues/IMG_20171007_134839.jpg",
  "img/portfolio/oskar_blues/IMG_20171007_140651.jpg",
  "img/portfolio/oskar_blues/IMG_20171007_141204.jpg",
  "img/portfolio/oskar_blues/IMG_20171007_141224.jpg",
  "img/portfolio/quest_diagnostics/IMG_6395.jpg",
  "img/portfolio/quest_diagnostics/IMG_6400.jpg",
  "img/portfolio/ramona_retail/Ramona-Final-2.jpg",
  "img/portfolio/ramona_retail/Ramona-Final.jpg",
  "img/portfolio/whbm_cherry_creek/IMG_6403.jpg",
  "img/portfolio/whbm_cherry_creek/IMG_6404.jpg",
  "img/portfolio/whbm_cherry_creek/IMG_6405.jpg",




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
        transform: `rotate(${state.previousItem > state.selectedItem ? "-45deg" : "45deg"
          })`,
        opacity: "0",
        filter: `blur( ${state.previousItem === state.selectedItem ? "0px" : "5px"
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

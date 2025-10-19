import React from "react";
import "h8k-components";
import  "./slideShow.css";
import Slides from './Slides.jsx';
import { SLIDES_DATA } from "../../data/slideData.js";



function SlideShow() {
  return (
    <>
      <h8k-navbar header="Slideshow App"></h8k-navbar>
      <div className="App">
        <Slides slides={SLIDES_DATA} />
      </div>
    </>
  );
}

export default SlideShow;
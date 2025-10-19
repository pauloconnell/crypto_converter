import React, { useState } from "react";
import Slide from "./Slide"



function Slides({ slides }) {

  const [counter, setCounter] = useState(0);
  // const [showNext, setShowNext] = useState(true);
  // const [showPrev, setShowPrev] = useState(false);

  const handleRestart = () => {
    setCounter(0);
  //  setShowNext(true);
  }

  const handleNext = () => {
    
    setCounter(prev => {
      console.log({prev}, slides.length)
      // if (prev == slides.length - 2){
      //   setShowNext(false)
      // }else setShowNext(true)
      return(++prev);
        
    })
  }
 const handlePrev = () => {
    setCounter(prev => {
      return --prev;
    })

  }

  return (
    <div>
      <div id="navigation" className="text-center">

        <button data-testid="button-restart" className="small outlined" disabled={(counter == 0)}  onClick={handleRestart}>
          Restart
        </button>
  
          <button data-testid="button-prev" className="small" disabled={(counter == 0)} onClick={handlePrev}>
            Prev
          </button>
  
  
  
          <button data-testid="button-next" className="small" disabled={counter == slides.length-1} onClick={handleNext}>
            Next
          </button>
  
      </div>

      
       
       
          <Slide slide={slides[counter]}  />
       
      
      
      

    </div>
  );
}

export default Slides;

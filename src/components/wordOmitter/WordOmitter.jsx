import React, { useState, useEffect } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);
  const [output, setOutput] = useState("Ready");

  const handleInputChange = (e) => {
    
    setInputText(e.target.value);
    // would get called before react updates state => useEffect ;)  getProcessedText();
    
  }

  useEffect(() => {
    // inputText gets updated async by React, so must wait for update before calling getProcessedText()
    if (inputText) { // Prevents running on initial mount if state is empty
      getProcessedText();
    }
  }, [inputText, omitWords]); // Dependency Array: Rerun this effect whenever inputText changes

  const toggleOmitWords = () => {
    setOmitWords(prev=> !prev);
  
      getProcessedText();
  
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("")
    setOutput("")
  };

  const getProcessedText = () => {
    //console.log("called", inputText, omitWords)
    if(!omitWords){
      setOutput(inputText);
      return;
    } 
    let newArr = inputText.split(" ").filter(word => {
      let wordFound = false;
      OMITTED_WORDS.map(omit => {
        if (omit == word) wordFound = true
      })
    
      return !wordFound;    // include this word only if not found in omittedWords
    })
    setOutput(newArr.join(" "));
    
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{output}</p>
      </div>
    </div>
  );
}

export default WordOmitter ;

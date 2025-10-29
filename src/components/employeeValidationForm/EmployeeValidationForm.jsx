
import React, {useState, useEffect} from "react";

function EmployeeValidationForm() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [id, setId] = useState("")

const [date, setDate] = useState("")
const [showName, setShowName] = useState(true);
const [showEmail, setShowEmail] = useState(true);
const [showId, setShowId] = useState(true);
const [showDate, setShowDate] = useState(true);


useEffect(() => {     // watching name change trigger parent div length(children) to change as warning shows/hides
  const el = document.querySelector('[data-testid="input-name"]');
 console.log("name changed, now length is : ", el.children.length);
}, [name]);


const nameChange=(e) => {
  let testName=e.target.value;
  console.log("test sent:", testName)

  setShowName(false);   // clear error message for test


  const regex = /[^A-Za-z ]/; // 
  if(regex.test(testName)){
    setShowName(true);
    return;
  }
  
  if(testName.length<4){
    setShowName(true);
    //setName(e.target.value);
    //return;
  }else{
    setShowName(false);
  }
  setName(testName); 
}

const emailChange=(e) => {
  let testEmail=e.target.value;
  console.log("email changed",email, e.target.value)
  

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!regex.test(testEmail)){
    setShowEmail(true);

  }else{
    setShowEmail(false);


  } 
    setEmail(e.target.value);
 
}

const idChange=(e) => {
  let testId=e.target.value;
  let isNumber = /^[0-9]+$/;
  console.log("id changed", testId)
  if(testId.length!=6){
    setShowId(true);
  }else setShowId(false)

  if(!isNumber.test(testId)){ // if any non digits - fail and don't add to id
    setShowId(true)
    return;
  }
    setId(e.target.value);
}

const dateChange=(e)=>{
  console.log(e.target.value, typeof(e.target.value))
  let testDate= new Date(e.target.value);
  console.log(testDate.getTime()," ", new Date().getTime())
  if(!isNaN(testDate.getTime())){
    if(testDate.getTime() < new Date().getTime()){
      setDate(testDate) 
      setShowDate(false)
    }else setShowDate(true)
  }
    
}

const handleSubmit=()=>{
  setDate("");
  setEmail("");
  setId("");
  setName("");
}
 

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          onChange={(e)=>nameChange(e)}
          placeholder="Name"
          data-testid="input-name-test"
        />
        { showName && <p className="error mt-2">
          Name must be at least 4 characters long and only contain letters and spaces
        </p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e)=>emailChange(e)}
        />
        {showEmail && <p className="error mt-2">Email must be a valid email address</p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={id}
          onChange={e=>idChange(e)}
          placeholder="Employee ID"
        />
        {showId && <p className="error mt-2">Employee ID must be exactly 6 digits</p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={date ? date.toISOString().split('T')[0] : date}
          onChange={(e)=> dateChange(e)}
          placeholder="Joining Date"
        />
        { showDate && <p className="error mt-2">Joining Date cannot be in the future</p> }
      </div>
      <button data-testid="submit-btn" type="submit" onClick={handleSubmit} disabled={showDate || showEmail || showId || showName}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;

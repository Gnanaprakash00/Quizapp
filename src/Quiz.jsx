import React from "react";
import Questions from "./Questions";
import { useState} from "react";
import { Button } from "bootstrap";


const Quiz = ()=>{
   
 const [question, setQuestion] = useState(0);
 const task = Questions[question];

 const newUser = ()=>{
    setQuestion(question + 1)
 }

    return(
        <div>
            <h3>{task.Q1}</h3>
         {
             task.options.map((options)=>{return <button >{options}</button>})
         }
<br /><br />
       <button onClick={newUser}>next</button>
    
        </div>
    );
}

export default Quiz
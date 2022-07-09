import React from 'react'
import {useState} from 'react'
import App from './App.css'
import Question from './question.js'

const Charges = () => {
 
 const [question, setQuestion] = useState(0);
 const [score ,setScore] = useState(false);
 const currentQuestion = Question[question];
 
 const select = (i)=>{
  const nextQuestion = question + 1;
  if(nextQuestion < 4){
    setQuestion(question + 1);
  }else{
    console.log("done");
  }

 
  if(currentQuestion.answer == i){
    setScore(score + 1);
  }

 };
 const skip = ()=>{
  
    setQuestion(question + 1);
  
 }
 const restart = ()=>{
   setQuestion(0);
 }
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="container_question">
          <div className="card border border-info" style={{width:"30rem"}}>
            <div className="card-header">
              <p className='text-center font-monospace form-control-plaintext'>{currentQuestion.question}</p>
              </div>
              <div className="card-body" style={{width:"100%"}}>
               
                  <ul className='options_container'>
                    {
                      currentQuestion.options.map((options,i)=>{
                        return  <li className='me-5 list-unstyled btn btn-info' onClick={()=>select(i)}>{options}</li>
                      })
                    }
                   
                  </ul>
                
                
                </div>
                <div className="container d-flex justify-content-around card-footer">
                  <p className="btn btn-success">score :<span className=''>{score}</span></p>
                  <p className="btn btn-danger" onClick={restart}>restart</p>
                 </div>
            </div>
          </div>
        </div>

   
    </div>

    
  )
}

export default Charges
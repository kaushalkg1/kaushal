


import state from './state';

import questionstate from './setQuestionNumberStatus';
import buttonSidebar from './buttonSidebar';

class QuestionInfo{

get getQuestionContents(){
    document.getElementById('quizButtons').innerHTML = '';
state.testObject.forEach((element ,index)=> {
      
   // 

    let queClicked=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.questionId??'responseNotSet';

    // check if 
    
   
    document.getElementById('quizButtons').innerHTML += `<div class="quizButton ${(queClicked!=='responseNotSet')?'buttonAttempted':''} " 
    id="que${index+1}">${index+1}</div>`;


    //console.log(state.testObject[index]['id'])
});


let countAttempted=0;
state.testObject.forEach((element ,index)=> {
    let queClicked=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.questionId??'responseNotSet';

    (queClicked!=='responseNotSet')?(countAttempted++):'';
    
   
   


    //console.log(state.testObject[index]['id'])
});
document.getElementById('quizPallet').innerHTML = `<div class="  " 
> Total Attempted: ${countAttempted} </div>`;


document.getElementById('clickSubmit').addEventListener('click',()=>{
    let countAttempted=0;
    let correctQueCount=0;
    let inCorrectQueCount=0;
    let myScoreCount=0;
state.testObject.forEach((element ,index)=> {
    let queClicked=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.questionId??'responseNotSet';

    let queCorrect=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.isCorrect=='correct'?(correctQueCount++):'';
    let queInCorrect=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.isCorrect=='Incorrect'?(inCorrectQueCount++):'';
    let myScore=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.score?(myScoreCount++):'';
 
    (queClicked!=='responseNotSet')?(countAttempted++):'';
    
   
   


    //console.log(state.testObject[index]['id'])
}); 

document.getElementById('quizPallet').innerHTML = `<div class="  " 
> ${countAttempted===state.testObject.length?'Test Submitted':'You sill need to attempt '+(state.testObject.length-countAttempted)+' questions!'} </div>`;
;

if(countAttempted===state.testObject.length){
// submit Test

let responseOverallTest={
    "testIndex":state.setTestIndex,
        "testName":state.setTestName,
        "testStatus":'submittedAndLocked',
    // if your test is running and you choose another test to start-> 
    //check if any test is already running -> ask to discard & start new. 
    "totalQuestions":state.testObject.length,
     "totalCorrect":correctQueCount,
    "totalIncorrect":inCorrectQueCount,
    "totalScore":myScoreCount,
    "totalTimeTaken":'',
     
    "setListView":'onof',
    "setReAttemptModeOn":'onof',
    "progressStatus":'weak_Strong',
    "testRating":'1-5',
    
    

  }

  localStorage.setItem(`test${state.setTestIndex+1}`,JSON.stringify(responseOverallTest));

  


}else{


    
}





}) ;





buttonSidebar.getbuttonSidebar;

  //console.log(state.currentQuestion);
    // set Current Question 
    
    document.getElementById('getTestTitle').innerHTML=` <div class="testTitle testInfoAnim"> Test-${state.setTestIndex+1} : 
    ${state.setTestName.toUpperCase()} 
   </div> `
    document.getElementById('questionsAllContents').innerHTML=` Q ${questionstate.QuestionNumberValue+1} : 
      ${state.currentQuestion['question']}    `;
      document.getElementById('optionsAllContents').innerHTML = '';
      state.currentQuestion['options'].forEach((element,index) => {
        document.getElementById('optionsAllContents').innerHTML += `<div class="optionOuter testInfoAnim${index+1}">
        <label class="inputCard">( ${index+1} ) :       ${state.currentQuestion['options'][index]} 
        <input type="radio"   id="test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}"  name="radio">
        <span class="radio"></span>
      </label>
  </div> `; })
   // get option attempt status  from response from local storage  (converting string to object using JSON.parse())
    //-> set  option check , if it is present in localStorage , otherwise not

   // using optional chaining operator to detect absence of object property & null coeleascing operator to set it as responseNotSet
   let setOptiion=JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}`))?.optionId??'responseNotSet';

   // check if 
  if(setOptiion!=='responseNotSet'){
    // set response option checked
    document.getElementById(setOptiion).checked = true;
    // disable All Options
    state.currentQuestion['options'].forEach((element,index) => {

        document.getElementById(`test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}`).disabled=true;

      })
  }else{
     // do nothing

  }

  state.currentQuestion['options'].forEach((element,index) => {


  


          document.querySelector(`#test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}`).addEventListener('click',()=>{
        // put this option in localStorage object
        
   let isCorrectStatus='';
    let myScore=0;
    if(state.currentQuestion['answer']==element) {
        isCorrectStatus='correct'; 
        myScore=1;
    }else{
        isCorrectStatus='Incorrect';
        myScore=0;
    }
  
    console.log(`test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}`)
      
    let myResponse={
        "testIndex":state.setTestIndex,
        "testName":state.setTestName,
        "questionId": state.currentQuestion['id'],
        "optionId": `test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}`,
        "questionNumber": questionstate.QuestionNumberValue,
         "hasOptionsLocked": 'yes',
        
        "yourResponse":element,
        "yourResponseIndex":index,
        "correctAnswer":state.currentQuestion['answer'],
        
         
        "hasMarkedForReview":'no',
        "isCorrect":isCorrectStatus,
        
        "score":myScore,


              
    };

// set response object in localstorage (in string format)

 localStorage.setItem(`test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}`,JSON.stringify(myResponse));
 // disabling All options once clicked any option.
      state.currentQuestion['options'].forEach((element,index) => {

        document.getElementById(`test${state.setTestIndex+1}Que${questionstate.QuestionNumberValue+1}Option${index+1}`).disabled=true;

      })


  })
      });
      



}





}
export default new QuestionInfo();


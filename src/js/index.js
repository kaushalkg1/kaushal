
'use strict' 

import data from './dataset.json';
import state from './state';
import testInfoCard from './testInfoCard';

import questionContents from './Question';
import questionstate from './setQuestionNumberStatus';

import image from '../images/popquizImg.gif';
document.getElementById('defaultImage').innerHTML=`<div class="defaultImgOuter testInfoAnimRight">
<img src="${image}" style="width:100%;"></div>`
// Display All Exams Available In Dataset Json  


   let testNames = document.querySelector('#testNames'); 
          Object.keys(data).forEach((element,index) => {
         // Showing  All Tests with clickable ids

         let getOverAllResponse = JSON.parse(localStorage.getItem(`test${index+1}`))?.testIndex??'responseNotSet';

   
   testNames.innerHTML += `<div class="testNamesCard testInfoAnim${index+1} 
    ${(getOverAllResponse===index)?'disableTest':''}"id="click${index}">
                           <b> ${(getOverAllResponse===index)?'&#x2714;   ':''}Test ${index+1} </b>:  ${element.toUpperCase() }</div>`;
 
                           if(getOverAllResponse!==index){ 
                             localStorage.removeItem(`test${index+1}`) 
                           }
                           
                           
                           ;
                           


});






            // getting All Available Clickable Events
         Object.keys(data).forEach((element,index) => {
               // Selecting Test And Setting Its Object In State.
              
            document.querySelector('#click'+index+'').addEventListener('click',()=>{
             let  getOverAllResponsetw = JSON.parse(localStorage.getItem(`test${index+1}`))?.testIndex??'responseNotSet';
       
             // Setting test Object  in Current State
              state.testObject= data[element];
             // Setting test Object name in Current State
             state.setTestName = element; 
             // Setting test Index in Current State
            
             state.setTestIndex= index;
             // Showing Current Test Card.
             
             let getOverAllScore= JSON.parse(localStorage.getItem(`test${index+1}`))?.totalScore??'None';
             let gettotalCorrect = JSON.parse(localStorage.getItem(`test${index+1}`))?.totalCorrect??'None';
             let gettotalIncorrect = JSON.parse(localStorage.getItem(`test${index+1}`))?.totalIncorrect??'None';

              (getOverAllResponsetw!==index)?(testInfoCard.showTestInfoObject):(document.querySelector('#testInfoCard').innerHTML=`
             <div class="textCard "> <div  class="flexImg testInfoAnimLeft">  <img src="${image}" style="width:100%;"></div>
             <div class="flexTestCard testInfoAnimRight">  
             <div class="textCardName testInfoAnim4"> Pop Quiz - Test </br> ${state.setTestName.toUpperCase()}</div>
             <div class="textCardTotalQuestions"> Total Score:  ${getOverAllScore} </div>
             <div class="textCardTotalQuestions"> Total Correct:  ${gettotalCorrect} </div>
             <div class="textCardTotalQuestions"> Total Incorrect:  ${gettotalIncorrect} </div>
             
             </div>
             </div>
             ` );
       
             
             questionstate.QuestionNumberValue = 0;
          
             state.currentQuestion=state.testObject[0];
             questionContents.getQuestionContents;
             state.testObject.forEach((element ,index)=> {

let getQuestionResponse = JSON.parse(localStorage.getItem(`test${state.setTestIndex+1}Que${index+1}`))?.questionNumber??'responseNotSet';

                           if(getQuestionResponse===index){ 
                            //localStorage.removeItem(`test${state.setTestIndex+1}Que${index+1}`);
                           
                            }else{  

                               };


                            }) 
                          }) 
              // 
              
               

           })

           document.querySelector('#closeButton').addEventListener('click',()=>{
            document.getElementById('popUpCard').style.display='none';
            document.getElementById('bgPopUp').style.display='none';
           })
          
           document.querySelector('#closeButtonSidebar').addEventListener('click',()=>{
            document.getElementById('quizOuter').style.display='none';
            document.getElementById('openButtonSidebar').style.display='block';
            
           })
           document.querySelector('#openButtonSidebar').addEventListener('click',()=>{
            document.getElementById('quizOuter').style.display='block';
            document.getElementById('openButtonSidebar').style.display='none';
          
           })

           
           document.querySelector('#clickNext').addEventListener('click',()=>{
            questionstate.QuestionNumberValue += 1;
            
            // get  array index
            //console.log(state.countTwo)
            // get question object
            //console.log(state.testObject[state.countTwo]);
            // setting next question object in a state 
            state.currentQuestion=state.testObject[questionstate.QuestionNumberValue];
            // getting  the question 
          questionContents.getQuestionContents;
            //set it as a state  & use this question object in another module
            // (1. set responses in localstorage in this module , disable btn after seting response
            // timer -> play pause as per question , when All questions are attempted auto submit .     )->  
           
                        })
                       
            
                        document.querySelector('#clickPrev').addEventListener('click',()=>{
           
                          questionstate.QuestionNumberValue -= 1;
                          // console.log(state.countTwo)
                          // get  array index
                          //console.log(state.countTwo)
                          // get question object
                          //console.log(state.testObject[state.countTwo]);

                          state.currentQuestion=state.testObject[questionstate.QuestionNumberValue];
                          
                          questionContents.getQuestionContents;
                          //set it as a state  & use this question object in another module
                          // (1. set responses in localstorage in this module , disable btn after seting response
                          // timer -> play pause as per question , when All questions are attempted auto submit .     )->  
                          
                                      })
                                     
                          
              
            

// // Set Item
// localStorage.setItem('lastname',JSON.stringify(obj));
// // Retrieve
// document.getElementById("demo").innerHTML = JSON.parse(localStorage.getItem("lastname")).lastname;
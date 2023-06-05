


import state from './state'

import questionstate from './setQuestionNumberStatus';

import image from '../images/QuizPoPTest.png';

 let showTestInfoObject=null;
class showTestInfo{

    get  showTestInfoObject(){
        

        // get total number of questions to show it in Test Info Card
//console.log(image)
//console.log(state.testObject.length)



//console.log(state.setTestName);
document.querySelector('#testInfoCard').innerHTML=`
<div class="textCard "> <div  class="flexImg testInfoAnimLeft">  <img src="${image}" style="width:100%;"></div>
<div class="flexTestCard testInfoAnimRight">  
<div class="textCardName testInfoAnim4"> Pop Quiz - Test </br> ${state.setTestName.toUpperCase()}</div>
<div class="textCardTotalQuestions"> Total Questions:  ${state.testObject.length} </div>

<div class="textCardStarttest testInfoAnimButton">

<div class="buttonStartNew" id="StartNew${state.setTestIndex}">Start Quiz</div>
</div></div>
</div>
`; 


//Add logic to start this test -> 
document.querySelector(`#StartNew${state.setTestIndex}`).addEventListener('click',()=>{
    document.getElementById('bgPopUp').style.display='block';
    document.getElementById('popUpCard').style.display='block';
    //console.log(state.setTestIndex)
    
    // statek.QueNo=state.testObject;
    // set index =0 for first question when you start test.
    questionstate.QuestionNumberValue = 0;

    // calling module instannce/
    // statetw.ShowQues
    // statetw.ShowQuestwo
   // console.log(state.testObject[state.countTwo]);
  
 
})
// state.testObject.forEach((element,index) => {
//     console.log(index);
// })

// use this test object to show Information about the Test //



}
}
export default  new showTestInfo()
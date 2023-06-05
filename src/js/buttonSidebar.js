
import state from './state';

import questionContents from './Question';
import questionstate from './setQuestionNumberStatus';
class buttonSidebarClass{
    get getbuttonSidebar(){


        
state.testObject.forEach((element ,index)=> {
    document.querySelector(`#que${index+1}`).addEventListener('click',()=>{
  questionstate.QuestionNumberValue = index;
  
                 state.currentQuestion=state.testObject[questionstate.QuestionNumberValue];
          
          questionContents.getQuestionContents; 

        
    })
})
}}
export default new buttonSidebarClass();
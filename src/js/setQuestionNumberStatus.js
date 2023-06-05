
import state from './state'

let currentQuestionNo=0;
class QuestionNumber{

    get QuestionNumberValue(){
        return  currentQuestionNo;
     }
    set QuestionNumberValue(value){
           // getting current test object as value . 

            if((value >= 0)&&(value < state.testObject.length)) { 
                // checking for question number length (total questions)
                 // setting the value of a current state for question ( after clicking next or previous )
               
                 currentQuestionNo = value ;  
                
               
             }else{
                //  go to first question after
                currentQuestionNo = 0 ; 
                
                 
             //  You have Reached last Question  //  you still have 2 questions unanswered  &  2 marked  
            //  view unanswered questions -> popup  // click on that questiontext  to open it directly 
            // see marked quest -> popup // click on that questiontext  to open it directly 
            // go back to first question . ->  countTwo =0;
              ; 
   
            } 
                  
                 
            
    }
}
export default new QuestionNumber();



import state from './state'
let countTwo=0;
let setTestName='';
let setTestIndex=0;
let currentQuestionObject=null;
class State{
    
    get currentQuestion(){
     return currentQuestionObject;
    }
    set currentQuestion(value){
        currentQuestionObject= value;
    }
    get setTestName(){
     return setTestName;
    }
   set setTestName(value){
    setTestName=value;
   }
   get setTestIndex(){
    return setTestIndex;
   }
  set setTestIndex(value){
   setTestIndex=value;
  }
}
export default new State();
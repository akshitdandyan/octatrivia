import { useEffect, useState } from "react";
import { checkAnswer, getNewQue } from "./helpers";
import Header from "./ui_components/Header/Header";
import Main from "./ui_components/Main/Main";

function App() {

  const [ queAns, setQueAns ] = useState({ question: "", answer: "" });
  const [ userAnswer, setUserAnswer] = useState( "" );
  const [ quizState, setQuizState ] = useState("attempting");

  const setNewQa = async() => {
    setQuizState("attempting")
    setUserAnswer("");
    setQueAns({ question: "", answer: "" })
    const new_qa = await getNewQue();
    if( new_qa === undefined ) return;
    setQueAns(new_qa)
  }

  const checkSolution = () => {
    if( checkAnswer( userAnswer, queAns.answer )) return setQuizState("correct");
    return setQuizState("incorrect");
  }

  useEffect( () => {
    setNewQa();
  }, [])

  return (
    <div className="App">
      <Header />
      <Main 
        { ...{ 
          que: queAns.question , 
          userAnswer, 
          setUserAnswer, 
          quizState ,
          checkSolution,
          setNewQa
        }} 
      />
    </div>
  );
}

export default App;

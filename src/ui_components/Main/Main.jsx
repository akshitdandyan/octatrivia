import "./styles.css";

const Main = ({ que, userAnswer, setUserAnswer, quizState, checkSolution, setNewQa }) => {
    
    if ( que !== "" ) return (
        <div className="main_wrapper mid">
            <div className="content">
                <div className="question_wrapper">
                    { que }
                </div>
                <div className="inputanswer_wrapper">
                    <input 
                        placeholder="Type Answer Here"
                        value={ userAnswer }
                        onChange={ e => setUserAnswer(e.target.value)}
                     />
                </div>
                <div 
                    className="checkanswer_btn" 
                    onClick={ () => userAnswer && quizState === "attempting" && checkSolution() }
                    style={{ cursor: userAnswer ? "pointer" : "not-allowed", filter: userAnswer ? "brightness(100%" : "brightness(80%)"}}
                >
                    { quizState === "attempting" ? "Check Answer" : quizState === "correct" ? "Correct ✅" : "Incorrect ❌"}
                </div>
                {
                    quizState !== "attempting" &&
                    <div className="new_quiz" onClick={setNewQa} >New Quiz 👉</div>
                }
            </div>
        </div>
    )
    else return(
        <div className="main_wrapper mid">
            <div className="content">
                <div className="game_icon">🎲</div>
                <h1 className="loading">Loading Quiz</h1>
            </div>
        </div>
    )
}

export default Main

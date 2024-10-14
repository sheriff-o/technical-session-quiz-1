import React, { useState, useEffect } from "react";
import "./App.css";
import questions from './Data';

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Function to shuffle the questions and select the first 5
  const shuffleAndSelectQuestions = (questionsArray) => {
  const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10); // Select the first 5 shuffled questions
  };
  

  // Use useEffect to initialize the quizQuestions when the component mounts
  useEffect(() => {
    const selectedQuestions = shuffleAndSelectQuestions(questions);
    setQuizQuestions(selectedQuestions);
    
  }, []);

  console.log(quizQuestions)


  const optionClicked = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);

    if (option.isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } 
  };

  const submitClicked = () => {
    setFinalResults(true);
  };

  //restartQuiz
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelectedOptions([]);
    setQuizQuestions(shuffleAndSelectQuestions(questions));
  };

  if (quizQuestions.length === 0) return <div>Loading...</div>;

  return (
    <div className="App">
      {/* Heading */}
      {showFinalResults ? (<div className="msg">Congratulations!</div>) : (
        <div>
          <img className="p-2" src="https://cdn-icons-png.flaticon.com/512/807/807281.png" width="80px" height="80px" alt="img3" />
          <h2 className="header"> Attempt Qestion Here 👍</h2>
        </div>
      )}

      {/* Final Result Section  */}

      {showFinalResults ? (
        <div className="final-results">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" />
          <h2> You have successfully completed the quiz </h2>
          <p> <b>Question asked :</b> {quizQuestions.length}</p>
          <p> <b>Correct answers :</b> {score}</p>
          <p> <b>Your Score : </b>{(score / quizQuestions.length).toFixed(2) * 100} %</p>
          <button onClick={() => restartGame()}> Restart Quiz </button>
        </div>
      ) : (


        // Main Page section


        <div className="row p-3">


          {/* Review Answer Section - Left Side of Screen */}

          <div className="col-sm-6 review-card p-3 ">
            <img src="https://cdn-icons-png.flaticon.com/512/9792/9792969.png" width="80px" height="80px" alt="img" />
            <h2 className="p-4">Review Answer</h2>
            <div className="card text-dark p-3">
              {selectedOptions.map((option) => (
                <h3 key={option.id}>{option.text}</h3>
              ))}
            </div>

          </div>

          {/* Quiz section - Qestion with Answer and Prev, Next  and submit button */}

          <div className="col-md-6 question-card p-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <div className="button-section text-right mb-3">

                {/* Previous Button  */}
                {currentQuestion > 0 && (
                  <button
                    className="text-light btn btn-info  me-md-4"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    Prev
                  </button>
                )}

                {/* Next Button  */}
                {currentQuestion < quizQuestions.length - 1 && (
                  <button
                    className="text-light btn btn-info"
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>


            {/* Quiz Section Qestion and Option */}
            <h3> Question :  {currentQuestion + 1} out of {quizQuestions.length} </h3>
            <h4 className="question-text p-3">
              Q. {currentQuestion + 1}. {quizQuestions[currentQuestion].text}
            </h4>
            <ul>
              <div className="justify-content-md-end">
                {quizQuestions[currentQuestion].options.map((option) => {
                  return (
                    <li onClick={() => optionClicked(option)} key={option.id}>
                      {option.text}
                    </li>
                  );
                })}
              </div>

            </ul>

            {/* Submit Button */}
            {currentQuestion === quizQuestions.length - 1 && (
              <button
                className="text-light btn btn-primary"
                onClick={() => submitClicked()}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

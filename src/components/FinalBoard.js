import React from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { Line, Start } from "../images";

const FinalBoard = () => {
  let navigate = useNavigate()
  const {
    questionState: { score, tour, question, questions },
    setQuestionState,
  } = useGameContext();

  console.log("questions", questions);

  const handleReStart = () => {
    
    navigate('/question/1');
    setQuestionState((prevState) => {
        return {
            ...prevState,
            score: 0,
            question: 1,
            questions: []
        }
    })
  }

  return (
    <div className="totalTable">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="gameBoard d-flex flex-column justify-content-center">
              <div className="row">
                <h1>Final</h1>
              </div>
              <div className="row">
                <Line />
              </div>
              <div className="d-flex justify-content-center">
                <div className="">
                  <h2 className="">Point:</h2>
                </div>
                <div className="">
                  <h2 className=" ">{score}</h2>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="">
                  <h2 className="">Question:</h2>
                </div>
                <div className="">
                  <h2 className=" ">{question - 1}</h2>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="">
                  <h2 className="">Correct Answer:</h2>
                </div>
                <div className="">
                  <h2 className=" ">
                    {
                      questions.filter((item) => {
                        return item?.status === "✔️";
                      }).length
                    }
                  </h2>
                </div>
              </div>
              <div onClick = {handleReStart} className="d-flex justify-content-center">
                <Start />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="gameBoard d-flex flex-column justify-content-center">
              <div className="row">
                <h1>All Question</h1>
              </div>
              <div className="row">
                <Line />
              </div>
              <div className="">
                {
                    questions.map((item, id) => {
                        return <div key={id} className='d-flex gap-3 justify-content-center text-white'>
                            <div>{item.question}</div>
                            <div>{item.answer}</div>
                            <div>{item.status}</div>
                        </div>
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalBoard;

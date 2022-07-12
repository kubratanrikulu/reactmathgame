import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Line } from "../images";

const OpeningPage = () => {
  let navigate = useNavigate();
  const [gameState, setGameState] = useState({
    totalScore: 0,
    totalQuestion: 0,
    correctAnswer: 0,
  });

  const {totalScore, totalQuestion, correctAnswer} = gameState;

  useEffect(() => {
    let ignore = false;

    const localTotalScore = localStorage.getItem('totalScore');
    const localTotalQuestion = localStorage.getItem('totalQuestion');
    const localCorrectAnswer = localStorage.getItem('correctAnswer');

    if (
      !ignore && (localCorrectAnswer || localTotalScore || localTotalQuestion)
    ) {
      setGameState({
        totalScore: JSON.parse(localTotalScore),
        totalQuestion: JSON.parse(localTotalQuestion),
        correctAnswer: JSON.parse(localCorrectAnswer)
      });
    }

    return () => {
      ignore = true;
    }
  }, [])
  

  return (
    <div>
      <div className="totalTable ">
        <div className="container">
          <div className="gameBoard d-flex flex-column justify-content-center">
            <div className="row">
              <h1>Mathematics Game</h1>
            </div>
            <div className="row">
              <Line />
            </div>
            <div className="d-flex justify-content-center">
              <div className="">
                <h2 className="">Total Score:</h2>
              </div>
              <div className="">
                <h2 className=" ">{totalScore}</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="">
                <h2 className="">Total Question:</h2>
              </div>
              <div className="">
                <h2 className=" ">{totalQuestion}</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="">
                <h2 className="">Correct Answer:</h2>
              </div>
              <div className="">
                <h2 className=" ">{correctAnswer}</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <span onClick={() => navigate('/question/1')} className="">Start</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;

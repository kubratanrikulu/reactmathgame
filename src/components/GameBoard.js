import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGameContext } from "../contexts/GameContext";
import { Circle, Union } from "../images";
import { shuffle } from "../utils";

const randomNumberGenerate = () => Math.ceil(Math.random() * 10);

const initialState = {
  answer: null,
  isAnswerCorrect: false,
  bgColor: undefined,
  shoudBeRefresh: false,
  shouldCalculated: false,
};

const GameBoard = () => {
  let { questionId } = useParams();
  const navigate = useNavigate();
  const {
    questionState: { score, tour, question },
  } = useGameContext();

  const [gameBoardState, setGameBoardState] = useState(initialState);
  const { answer, isAnswerCorrect, bgColor,  shouldCalculated } =
    gameBoardState;

  const randomNumberOne = useMemo(() => randomNumberGenerate(), [questionId]);
  const randomNumberTwo = useMemo(() => randomNumberGenerate(), [questionId]);

  const result = randomNumberOne * randomNumberTwo;
  const resultOne = (randomNumberOne + 1) * randomNumberTwo;
  const resultTwo = (randomNumberTwo - 1) * randomNumberOne;

  const handleAnswer = (answer) => {
    setGameBoardState({
      answer,
      isAnswerCorrect: result === answer,
      bgColor: result === answer ? "green" : "red",
      shouldCalculated: true,
    });
  };

  const createChoices = useMemo(() => {
    return shuffle([result, resultTwo, resultOne]).map((number) => {
      return (
        <div
          key={number}
          onClick={() => handleAnswer(number)}
          className="row circle circle3 mt-5"
        >
          <Circle />
          <span>{number}</span>
        </div>
      );
    });
  }, [questionId]);

  useEffect(() => {
    let id;
    if (answer && shouldCalculated) {
      console.log("tetiklendi");
      id = setTimeout(() => {
        setGameBoardState({
          ...gameBoardState,
          answer: null,
          bgColor: undefined,
          shouldCalculated: false,
        });
        navigate(`/question/${Number(questionId) + 1}`);
      }, 3000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [shouldCalculated]);

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="row">
          <div className="col-6 mt-5 board">
            <Union className="position-relative" />
            <span className="position-absolute">{`${randomNumberOne} * ${randomNumberTwo}`}</span>
          </div>
          <div className="col-6 circles">
            <div className="row justify-content-center">
              <div className="col d-flex">
                <h2 className="">Score:</h2>
                <h2 className=" ">{score}</h2>
              </div>
              <div className="col d-flex">
                <h2 className="">Tour:</h2>
                <h2 className=" ">{tour}</h2>
              </div>
              <div className="col d-flex">
                <h2 className="">Question:</h2>
                <h2 className=" ">{question}</h2>
              </div>
            </div>
            {createChoices}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

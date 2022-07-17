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

// todo context guncelle

const GameBoard = () => {
  let { questionId } = useParams();
  const navigate = useNavigate();
  const {
    questionState: { score, tour, question },
    setQuestionState
  } = useGameContext();

  const [gameBoardState, setGameBoardState] = useState(initialState);
  const { answer, isAnswerCorrect, bgColor, shouldCalculated } = gameBoardState;

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
      id = setTimeout(() => {
        setGameBoardState({
          ...gameBoardState,
          answer: null,
          bgColor: undefined,
          shouldCalculated: false,
        });
       
        const pageNumber = parseInt(questionId, 10);
        let navigateToUri = `/question/${pageNumber + 1}`;
        // onceki state degerlerini kullanmak istiyorsak
        // prevState ile kullaniyor olmak daha dogru olur

        if (pageNumber === 10) {
          navigateToUri = '/final';

          const localTotalScore = JSON.parse(localStorage.getItem('totalScore')) ?? 0;
          const localTotalQuestion = JSON.parse(localStorage.getItem('totalQuestion')) ?? 0;
          const localCorrectAnswer = JSON.parse(localStorage.getItem('correctAnswer')) ?? 0;
      
          // localStorage.setItem('totalScore', localTotalScore + score);
          // localStorage.setItem('totalQuestion', localTotalQuestion + pageNumber);
          // localStorage.setItem('correctAnswer', localCorrectAnswer + answer);
      
        }

        setQuestionState((prevState) => ({
          score: isAnswerCorrect ? prevState.score + 20 : prevState.score,
          tour: pageNumber === 10 ? prevState.tour + 1 : prevState.tour,
          question: pageNumber + 1,
          questions: [...prevState.questions, {
            question: `${randomNumberOne} * ${randomNumberTwo}`,
            answer,
            status: result === answer ? '✔️' : '❌'
          }]
        }))

        navigate(navigateToUri);
      }, 1000);
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

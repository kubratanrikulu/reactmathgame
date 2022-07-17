import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [questionState, setQuestionState] = useState({
    score: 0,
    tour: 1,
    question: 1,
    questions: [],
  });

  const values = { questionState, setQuestionState };

  useEffect(() => {
    let ignore = false;
    if (
      !ignore &&
      questionState.question !== 1 &&
      (questionState.question - 1) % 10 === 0
    ) {
      const localTotalScore =
        JSON.parse(localStorage.getItem("totalScore")) ?? 0;
      const localTotalQuestion =
        JSON.parse(localStorage.getItem("totalQuestion")) ?? 0;
      const localCorrectAnswer =
        JSON.parse(localStorage.getItem("correctAnswer")) ?? 0;

      const totalCorrectAnswers = questionState.questions.filter((item) => {
        return item?.status === "✔️";
      });

      localStorage.setItem("totalScore", localTotalScore + questionState.score);
      localStorage.setItem(
        "totalQuestion",
        localTotalQuestion + questionState.question - 1
      );
      localStorage.setItem(
        "correctAnswer",
        localCorrectAnswer + totalCorrectAnswers.length
      );
    }
    return () => {
      ignore = true;
    };
  }, [questionState.question]);

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const gameContextValues = useContext(GameContext);

  return gameContextValues;
};

export { GameContextProvider, useGameContext };

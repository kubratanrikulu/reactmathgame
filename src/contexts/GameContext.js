import { createContext, useContext, useState } from 'react'

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [questionState, setQuestionState] = useState({
    score: 0,
    tour: 1,
    question: 1
  });

  const values = {questionState, setQuestionState};

  return (
    <GameContext.Provider value={values}>
      {children}
    </GameContext.Provider>
  )
}

const useGameContext = () => {
  const gameContextValues = useContext(GameContext);

  return gameContextValues;
}

export {GameContextProvider, useGameContext}
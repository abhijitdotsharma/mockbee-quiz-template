
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import {MCQS, Question} from "../types" ;

type McqsContextType = {
    mcqs : MCQS,
    setMcqs: Dispatch<SetStateAction<MCQS>>
    correctCount: number,
    setCorrectCount: Dispatch<SetStateAction<number>>
  
}; 

//create context
const QuizContext = createContext<McqsContextType>({} as McqsContextType);



//provide context 
const QuizProvider = ({ children } : any) => {

    const [correctCount, setCorrectCount] = useState<McqsContextType["correctCount"]>(0);

    const [mcqs, setMcqs] = useState<McqsContextType["mcqs"]>({
        step: 0,
        questions: [],
    })

    return (
        <QuizContext.Provider value={{ mcqs, setMcqs, correctCount, setCorrectCount }}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)


export { useQuiz, QuizProvider }


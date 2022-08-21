import { createContext, useContext, useState } from "react";

//create context
const QuizContext = createContext();


//provide context 
const QuizProvider = ({ children }) => {

    const [correctCount, setCorrectCount] = useState(0)
    const [mcqs, setMcqs] = useState({
        // step: 0,
        // questions: [
        // { id: 1, title: '?' },
        // { id: 2, title: '?' },
        // { id: 3, title: '?' }
        // ]
    })

    return (
        <QuizContext.Provider value={{ mcqs, setMcqs, correctCount, setCorrectCount }}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export { useQuiz, QuizProvider }
import { createContext, useContext, useState } from "react";

//create context
const QuizContext = createContext();


//provide context 
const QuizProvider = ({children}) => {


    const [mcqs, setMcqs] = useState({
        step: 0,
        // step: 0,
        // questions: [
        // { id: 1, title: 'What is your name?' },
        // { id: 2, title: 'What do you do?' },
        // { id: 3, title: 'Where you from?' }
        // ]
    })

    return(
        <QuizContext.Provider value={{mcqs, setMcqs}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export {useQuiz, QuizProvider}
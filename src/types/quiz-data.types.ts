export type Question = {
    _id: string,
    question: string,
    options: string[],
    answer: string,
};

export type MCQS = {
    step: number,
    questions: Question[]
}

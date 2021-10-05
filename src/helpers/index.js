export const getNewQue = async() => {
    const response = await fetch("https://jservice.io/api/random");

    if(!response.ok){
        console.log("Error in fetching api");
        return undefined;
    }

    const data = await response.json();
    console.log("Answer: ",data[0].answer);
    return {
        question: data[0]?.question,
        answer: data[0]?.answer
    }
}

export const checkAnswer = ( userAns, correctAns ) => userAns.toLowerCase() === correctAns.toLowerCase();
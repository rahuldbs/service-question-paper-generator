const data = require('./questionStore.json');

const getQuestionPaper = function(marks, deasy, dmedium, dhard) {
    const easy = (parseFloat(deasy) / 100) * marks;
    const medium = (parseFloat(dmedium) / 100) * marks;
    const hard = (parseFloat(dhard) / 100) * marks;
    let easyMarks = 0;
    let mediumMarks = 0;
    let hardMarks = 0;
    //console.log(easy);
    const result = data.filter((question) => {
        if (question.difficulty === "hard" && (hardMarks < hard)) {
            hardMarks += question.marks
            return true;
        } else if (question.difficulty === "medium" && (mediumMarks < medium)) {
            mediumMarks += question.marks
            return true;
        } else if (question.difficulty === "easy" && (easyMarks < easy)){
            easyMarks += question.marks
            return true;
        }
    });
    return result;
}

module.exports = {
    'getQuestionPaper': getQuestionPaper
}
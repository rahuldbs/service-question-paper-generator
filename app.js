const yargs = require('yargs');
const questions = require('./questions.js');

// generate command
yargs.command({
    command: 'generate',
    describe: 'generate a question paper',
    builder: {
        marks: {
            'describe': 'Total marks',
            'demandOption': true,
            'type': 'number'
        },
        easy: {
            'describe': 'Difficulty easy',
            'demandOption': true,
            'type': 'string'
        },
        medium: {
            'describe': 'Difficulty medium',
            'demandOption': true,
            'type': 'string'
        },
        hard: {
            'describe': 'Difficulty hard',
            'demandOption': true,
            'type': 'string'
        }
    },
    handler: function(argv) {
        console.log("------------generate question papers-------------");
        const result = questions.getQuestionPaper(argv.marks, argv.easy, argv.medium, argv.hard);
        console.log(result);
    }
});

yargs.parse();

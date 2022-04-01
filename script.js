const list = document.querySelector('ul');
const button = document.querySelector('button');
const answers = document.getElementsByName('answers');
let question = document.getElementById('question');
let q = 0; // question controller
let score = 0;

let answer;

let allQuestions = [{
        question: 'How many planets are there in our solar system?',
        choices: ['8', '10', '9', '11'],
        correctAnswer: '8',
    },
    {
        question: 'How old is the oldest human in the world?',
        choices: ['92', '81', '111', '119'],
        correctAnswer: '119',
    },
    {
        question: 'What is the name of facebook founder?',
        choices: ['Linus Torvalds', 'Stefan Löfven', 'Mark Zuckerberg', 'Jensen Huang'],
        correctAnswer: 'Mark Zuckerberg',
    },
    {
        question: 'Vhat is 12 + 7 - 5 * 3 ?',
        choices: ['42', '41', '52', '72'],
        correctAnswer: '42',
    },
    {
        question: 'which is the world\'s oldest car brand?',
        choices: ['BMW', 'Audi', 'Volvo', 'Peugeot'],
        correctAnswer: 'Peugeot',
    },
    {
        question: 'Which is Sweden\'s fourth largest city?',
        choices: ['Uppsala', 'Sundsvall', 'Eskilstuna', 'Stockholm'],
        correctAnswer: 'Uppsala'
    }
];


function renderQuestion() {
    if (q >= allQuestions.length) {
        list.style.color = 'green';
        question.innerHTML = 'Game Over!';
        list.innerHTML = `You got ${score} points! of ${allQuestions.length}`;
        button.textContent = 'Gave over!'
    } else {

        for (let i = 0; i < allQuestions[q].choices.length; i++) {
            // Create radio button
            let radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'answers');
            radio.setAttribute('id', allQuestions[q].choices[i]);
            radio.setAttribute('value', allQuestions[q].choices[i]);
            // Create text of radio buttons
            let label = document.createElement('label');
            label.setAttribute('for', allQuestions[q].choices[i]);
            label.innerHTML = allQuestions[q].choices[i] + '<br>';
            list.appendChild(radio);
            list.appendChild(label);
            question.textContent = allQuestions[q].question;
        }
    }
}

        button.addEventListener('click', function () {
            checkQuestion();

            const radios = document.getElementsByName('answers');
            if (!radios[0].checked && !radios[1].checked && !radios[2].checked && !radios[3].checked) {
                alert('You must select an option!')
            } else {
                q++;

                // Remove old question
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }
                renderQuestion();
            }
        });


        function checkQuestion() {
            for (let k = 0; k < answers.length; k++) {
                if (answers[k].checked) {
                    answer = answers[k].value;
                }
            }
            if (answer == allQuestions[q].correctAnswer) {
                console.log('correct');
                score++;
            }
        }

        renderQuestion()
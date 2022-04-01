const list = document.querySelector('li');
const button = document.querySelector('button');
let question = document.getElementById('question');
let q = 0; // question controller
let score = 0;
const answers = document.getElementsByName('answers');
let answer;

let allQuestions = [{
        question: 'Hur många planeter finns det?',
        choices: ['8', '10', '9', '11'],
        correctAnswer: '8',
    },
    {
        question: 'Hur många år är världens äldsta människa?',
        choices: ['92', '81', '111', '119'],
        correctAnswer: '119',
    },
    {
        question: 'Vad heter Fb grundaren?',
        choices: ['Kajsa Lindholm', 'Stefan Löfven', 'Mark Zuckerberg', 'Markoolio'],
        correctAnswer: 'Mark Zuckerberg',
    },
    {
        question: 'Vad är 12 + 7 - 5 * 3 ?',
        choices: ['42', '41', '52', '72'],
        correctAnswer: '42',
    },
    {
        question: 'Världens äldsta bilmärke?',
        choices: ['BMW', 'Audi', 'Volvo', 'Peugeot'],
        correctAnswer: 'Peugeot',
    },
    {
        question: 'Sveriges fjärde största stad?',
        choices: ['Uppsala', 'Sundsvall', 'Eskilstuna', 'Stockholm'],
        correctAnswer: 'Uppsala',
    },
    {
        question: 'Sveriges fjärde största stad?',
        choices: ['Uppsala', 'Sundsvall', 'Eskilstuna', 'Stockholm'],
        correctAnswer: 'Uppsala',
    }
];


function renderQuestion() {
    if (q >= allQuestions.length) {
        list.style.color = 'green';
        question.innerHTML = 'Spelet är över!';
        list.innerHTML = `Du fick ${score} poäng! av ${allQuestions.length}`;
        button.textContent = 'Tillverkad av Bertil Rövsång'
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
                alert('Du måste välja ett alternativ')
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
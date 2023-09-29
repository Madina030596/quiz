//создаем массив объектов
const questions = [
{
    text: "В каком органе образуется желчь?",
    answers: ["Печень", "Желчный пузырь", "Поджелудочная железа", "Желудок"],
    right: "Печень",
},

{
    text: "Какой из этих языков является вторым по распространенности в мире?",
    answers: ["Английский", "Испанский", "Арабский", "Хинди"],
    right: "Испанский",
},

{
    text: "В каком году прекратила свое существование Османская империя?",
    answers: ["В 1453 году", "В 1792 году", "В 1812 году", "В 1922 году"],
    right: "В 1922 году",
},

{
    text: "Флаг какой страны единственный в мире имеет непрямоугольную форму?",
    answers: ["Бутан", "Непал", "Камбоджа", "Шри-Ланка"],
    right: "Непал",
},

{
    text: "Кто из этих персонажей не является вымышленным?",
    answers: ["Робин Гуд", "Король Артур", "Шерлок Холмс", "Д’Артаньян"],
    right: "Д’Артаньян",
},

{
    text: "Как называется единственная в мире крупная река, которая дважды пересекает экватор?",
    answers: ["Нил", "Амазонка", "Нигер", "Конго"],
    right: "Конго",
},

{
    text: "Сколько спутников у Венеры?",
    answers: ["Ни одного", "Один", "Два", "Три"],
    right: "Ни одного",
},

{
    text: "Какая страна находится между Испанией и Францией?",
    answers: ["Андорра", "Лихтенштейн", "Люксембург", "Сан-Марино"],
    right: "Андорра",
},

{
    text: "Какой континент целиком покрыт льдом?",
    answers: ["Арктика", "Антарктика", "Антарктида", "Северный полюс"],
    right: "Антарктида",
},

{
    text: "Какая фамилия у Петра I?",
    answers: ["Кипренский", "Романов", "Бадаев", "Рюрикович"], 
    right: "Романов",
},

{
    text: "Какая рыба самая большая на Земле?",
    answers: ["Сом", "Китовая акула", "Касатка", "Большая слоновая акула"],
    right: "Китовая акула",
},

{
    text: "Как называется проволока, которая держит пробку шампанского?",
    answers: ["Мюзле", "Декантер", "Аббокато", "Шопен"],
    right: "Мюзле",
},

{
    text: "Что изучает энтомология?",
    answers: ["Насекомых", "Рыб", "Птиц", "Древние тексты"],
    right: "Насекомых",
},

{
    text: "Кто был последним русским императором?",
    answers: ["Петр I", "Николай II", "Александр II", "Иван IV"], 
    right: "Николай II",
},

{
    text: "Какой газ самый легкий?",
    answers: ["Гелий", "Азот", "Кислород", "Водород"],
    right: "Водород",
}
];

//выбираем нужные элементы
let numberOfAllQuestions = document.querySelector("#numberOfAllQuestions");
let numberOfQuestion = document.querySelector("#numberOfQuestion");
let inputs = document.querySelectorAll('input');
const nextBtn = document.querySelector("#submitBtn");
const reloadBtn = document.querySelector("#reloadBtn")
const userResultList = document.querySelector("#user-result-list");
const rightResultList = document.querySelector("#right-result-list");
const scoreText = document.querySelector("#score");

const questionText = document.querySelector("#question");

const answerA = document.querySelector("#a");
const answerB = document.querySelector("#b");
const answerC = document.querySelector("#c");
const answerD = document.querySelector("#d");

const answerTextA = document.querySelector("#a-text");
const answerTextB = document.querySelector("#b-text");
const answerTextC = document.querySelector("#c-text");
const answerTextD = document.querySelector("#d-text");

let currentQuestion = 0;
let score = 0;

//ф-ция: выводим текст на экран при условии, если индекс вопроса меньше длины массива объектов 
function startTest() {
    if(currentQuestion <= questions.length - 1) {
        const currentQuestionData = questions[currentQuestion];
        questionText.textContent = currentQuestionData.text;

        answerA.value = currentQuestionData.answers[0];
        answerB.value = currentQuestionData.answers[1];
        answerC.value = currentQuestionData.answers[2];
        answerD.value = currentQuestionData.answers[3];

        answerTextA.textContent =  currentQuestionData.answers[0];
        answerTextB.textContent =  currentQuestionData.answers[1];
        answerTextC.textContent =  currentQuestionData.answers[2];
        answerTextD.textContent =  currentQuestionData.answers[3];

        //сохраняем список верных ответов
        let liElementRight = document.createElement("li");
        liElementRight.textContent = currentQuestionData.right;
        rightResultList.appendChild(liElementRight);

        //выводим на экран номер вопроса
        numberOfQuestion.textContent = currentQuestion + 1;

        //выводим на экран общее кол-во вопросов 
        numberOfAllQuestions.textContent = questions.length;

        //сохраняем кол-во набранных очков
        scoreText.textContent = score;
        }
    
    else {
        questionText.style.display = "none";
        document.querySelector(".container-quiz__answers").style.display = "none";
        nextBtn.style.display = "none";
        document.querySelector(".container-test__title").style.display = "none";
        reloadBtn.style.display = "block";
        document.querySelector("#user-result").style.display = "block";
        userResultList.style.display = "block";
        document.querySelector("#right-result").style.display = "block";
        rightResultList.style.display = "block";

        Swal.fire({
            title: `Количество очков: ${score}`,
            text: `Вы завершили тест!`,
            imageUrl: 'https://images.unsplash.com/photo-1499233983070-99a5f004e720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Firework',
            color: 'black',
            confirmButtonColor: '#125f5f',
        })
    }
}

startTest();

//работаем с кнопкой
nextBtn.addEventListener("click", function(e) {
    e.preventDefault();

    //если не выбран вариант ответа
    if (answerA.checked === false && answerB.checked === false && answerC.checked === false && answerD.checked === false) {
        Swal.fire({
            icon: 'warning',
            title: 'Выберите вариант ответа!',
            confirmButtonColor: '#125f5f',
            color: 'black',
            iconColor: '#125f5f',
        })
    }
    
    //сохраняем ответ пользователя
    else {
        if(answerA.checked) {
            userAnswer = answerA.value;
        }
    
        else if(answerB.checked) {
            userAnswer = answerB.value;
        }
    
        else if(answerC.checked) {
            userAnswer = answerC.value;
        }
    
        else if(answerD.checked) {
            userAnswer = answerD.value;
        }

        //сравниваем с верным ответом
        questions.forEach(item => {
            if(item.right === userAnswer) {
                score++;
            }
        })

        //сохраняем ответы пользователя
        let liElement = document.createElement("li");
        liElement.textContent = userAnswer;
        userResultList.appendChild(liElement);

        //переходим к следующему вопросу
        currentQuestion++;
        startTest();
    }

    //условие, чтобы при нажатии на следующий вопрос инпут(радио), на который мы нажали в предыдущем вопросе, не был выбран
    inputs.forEach(input => {
        input.checked = false;
    })
})

//кнопка перезагрузки
reloadBtn.addEventListener("click", () => {
    location.reload();
})
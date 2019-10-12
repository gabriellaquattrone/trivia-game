let questionsAndAnswers = [ 
    { question: 'What is the word for this piece of Japanese clothing?', a: 'haori', b: 'kimono', c: 'batik', correct: 'b'},
    { question: 'What is the tallest mountain in Japan?', a: 'Mount Fuji', b: 'Mount Haono', c: 'Mount Kaori', correct: 'a'},
    { question: 'What was the most popular movie in Japan in 2002?', a: 'Sprited Away by Hayao Miyazaki', b: 'The Cat Returns by Hiroyuki Morita', c: 'Godzilla Against Mechagodzilla by Masaaki Tezuka', correct: 'a'},
    { question: 'About how many vending machines are in Japan?', a: 'about 3 million', b: 'only 1 million', c: 'over 5 million', correct: 'c'},
    { question: 'What is a festival in Japan called?', a: 'tegami', b: 'matsuri', c: 'ringo', correct: 'b'},
    { question: 'Where is Tokyo Disneyland actually located?', a: 'In Tokyo, of course.', b: 'In Chiba, very near Tokyo. They use the name of Tokyo for tourist purposes.', c: 'In Kyoto.', correct: 'b'},
    { question: 'What is the biggest industry in Japan?', a: 'Anime', b: 'Construction', c: 'Manga', correct: 'b'},
    { question: 'The oldest novel in the world was written in Japan. What is it?', a: 'The Tale of Genji by Murasaki Shikibu', b: 'Pillow Sketches by Sei Shonagon', c: 'The Kojiki', correct: 'a'},
    { question: 'Japan has a word for death from overwork. What is it?', a: 'isu', b: 'monogatari', c: 'karoushi', correct: 'c'},
    { question: 'What can prevent you from being in a Japanese bathhouse?', a: 'Having a tattoo. It can associate you with the yakuza.', b: 'Putting the towel on your head while in the onsen.', c: 'Showering first before entering the bathhouse.', correct: 'a'}
]
    
let numberCorrect = 0;
let numberWrong = 0;
let number = 0;
let time = 15;
let intervalID;


$(document).ready(function() {

    $('#start').on("click", function() {
        $('#start').remove();
        displayQuestion();
        startTimer();
    });

    $('#a').on("click", function() {
        checkIfRightAnswer('a');
    });

    $('#b').on("click", function() {
        checkIfRightAnswer('b');
    });

    $('#c').on("click", function() {
        checkIfRightAnswer('c');
    });

});

function startTimer(){
    $('#timer').show();
    $('#timer').text(time);
    intervalID = setInterval(count, 1000);
}
function count(){
    time--;
    $('#timer').text(time);
    if (time <= 0){
        stop();
        $('#correct-incorrect').text("Jikan desu! Time's up! The correct answer is hilighted.");
        $('#' + questionsAndAnswers[number].correct).addClass("highlight");
        setTimeout(goToNextQuestion, 3000);
    }
}
function stop() {
    clearInterval(intervalID);
}
function goToNextQuestion(){
    $('#correct-incorrect').empty();
    $('#' + questionsAndAnswers[number].correct).removeClass("highlight");
    number++;
    displayQuestion();
}
function displayQuestion(){
    $('#question').text(questionsAndAnswers[number].question);
    $('#a').text(questionsAndAnswers[number].a);
    $('#b').text(questionsAndAnswers[number].b);
    $('#c').text(questionsAndAnswers[number].c);    
}

function checkIfRightAnswer(userAnswer) {
    if (questionsAndAnswers[number].correct == userAnswer) {
        $('#correct-incorrect').text("Pin-pon! You got it right.");
        number++;
        numberCorrect++;
        displayQuestion();
    }
    else {
        $('#correct-incorrect').text("Chigaimasu. That was wrong. The correct answer is hilighted.");
        numberWrong++;
        // Helped me with below: https://api.jquery.com/first/#entry-examples
        $('#' + questionsAndAnswers[number].correct).addClass("highlight");
    }
}

let questionsAndAnswers = [ 
    { question: 'What is the word for this piece of Japanese clothing?', a: 'haori', b: 'kimono', c: 'batik', correct: 'b'},
    { question: 'What is the tallest mountain in Japan?', a: 'Mount Fuji', b: 'Mount Haono', c: 'Mount Kaori', correct: 'a'},
    { question: 'What was the most popular movie in Japan in 2002?', a: 'Sprited Away by Hayao Miyazaki', b: 'The Cat Returns by Hiroyuki Morita', c: 'Godzilla Against Mechagodzilla by Masaaki Tezuka', correct: 'a'},
    { question: 'About how many vending machines are in Japan?', a: 'about 3 million', b: 'only 1 million', c: 'over 5 million', correct: 'c'},
    { question: 'What is a festival in Japan called?', a: 'tegami', b: 'matsuri', c: 'ringo', correct: 'b'},
    { question: 'Where is Tokyo Disneyland actually located?', a: 'In Tokyo, of course.', b: 'In Chiba, very near Tokyo. They use the name of Tokyo for tourist purposes.', c: 'In Kyoto.', correct: 'b'},
    { question: 'What is the biggest industry in Japan?', a: 'Anime', b: 'Construction', c: 'Manga', correct: 'b'},
    { question: 'The oldest novel in the world was written in Japan. What is it?', a: 'The Tale of Genji by Murasaki Shikibu', b: 'Pillow Sketches by Sei Shonagon', c: 'The Kojiki', correct: 'a'},
    { question: 'Japan has a word for death from overwork. What is it?', a: 'isu', b: 'monogatari', c: 'karoushi', correct: ''},
    { question: 'What can prevent you from being in a Japanese bathhouse?', a: 'Having a tattoo. It can associate you with the yakuza.', b: 'Putting the towel on your head while in the onsen.', c: 'Showering first before entering the bathhouse.', correct: 'a'}
]
    

let number = 0;


$(document).ready(function() {

    $('#start').on("click", function() {
        $('#start').remove();
        displayQuestion();
    });

});

function displayQuestion(){
    $('#question').text(questionsAndAnswers[number].question);
    $('#a').text(questionsAndAnswers[number].a);
    $('#b').text(questionsAndAnswers[number].b);
    $('#c').text(questionsAndAnswers[number].c);
    
}

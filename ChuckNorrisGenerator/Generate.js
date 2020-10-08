var url = 'https://api.chucknorris.io/jokes/random';

var button = document.createElement('input');
var paragraph = document.createElement('p');
var image = document.createElement('img');
var body = document.querySelector('body');
var div = document.querySelector('div');

button.setAttribute('type', 'submit');
button.setAttribute('class', 'btn');
button.value = 'Get Joke';

paragraph.setAttribute('class', 'paragraph');
paragraph.innerHTML += 'Press button to get a random Chuck Norris joke!';
image.setAttribute('class', 'image');
image.src = "ChuckNorrisSplashImage.jpg";
div.setAttribute('id', 'main');

button.addEventListener('click', function(){

    event.preventDefault();
    getJoke(url);
});

div.appendChild(image);
div.appendChild(paragraph);
div.appendChild(button);
body.appendChild(div);

function getJoke(url){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        paragraph.innerHTML = data.value;
    })
    .catch(err => console.log('Request Failed', err));
}

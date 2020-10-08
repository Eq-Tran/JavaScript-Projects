var url = 'https://api.chucknorris.io/jokes/random';

var button = document.createElement('input');
var paragraph = document.createElement('p');
var image = document.createElement('img');
var body = document.querySelector('body');

button.setAttribute('type', 'submit');
button.setAttribute('class', 'btn');
button.value = 'Get Joke';

paragraph.setAttribute('class', 'paragraph');
image.setAttribute('class', 'image');

button.addEventListener('click', function(){
    getJoke(url)
});

body.appendChild(button);
body.appendChild(paragraph);
body.appendChild(image);

function getJoke(url){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        paragraph.innerHTML = data.value;
        image.src = data.icon_url;
    })
    .catch(err => console.log('Request Failed', err));

}

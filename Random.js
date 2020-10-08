var button = document.querySelector('input[type=submit]')
let data = {

    title: "mr",
    first: "first name",
    last: "last name",
    id: 123449
};

button.addEventListener('click', e =>{

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(data =>{

    data.forEach(movies => {
        
        var titles = document.createElement('h1');
        titles.setAttribute('class', 'titles');
        titles.innerHTML = movies.title;

        var description = document.createTextNode(movies.description)
        var body = document.querySelector('body');
        body.appendChild(titles);
        body.appendChild(description)
    });

})
.catch(err => console.log('Request Failed', err));

});


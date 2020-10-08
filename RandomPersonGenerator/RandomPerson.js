let url = 'https://randomuser.me/api/';

var image = document.querySelector("#image");

getRandomUser(url);
function getRandomUser(url){
// Fetch API provides better support than XMLHttpRequest
// Fetch API uses promises rather than callbacks = better support for RESTful API
    fetch(url)
    .then(response => response.json())
    .then(data =>{

        console.log(data);
        console.log(data.results[0].dob.age);
        console.log(data.results[0].dob.date);
        console.log(data.results[0].name.first);
        console.log(data.results[0].picture.thumbnail)
    })
}
var textInput = document.querySelector('.textbox');
var paragraph = document.querySelector('.paragraph');
var button = document.querySelector('input[type=submit]');

textInput.value = textInput.defaultValue;
button.addEventListener('click', function(){

    event.preventDefault();
    paragraph.innerHTML = getCharCount(textInput);
})

function getCharCount(textInput){

    var txtString = textInput.value.length;
    return txtString;
}
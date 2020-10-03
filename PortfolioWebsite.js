function time(){

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

h = standardTime(h);
m = checkTime(m);
s = checkTime(s);

if(h >= 12){
    h = h - 12;
}else {
    h = h + 12;
}

document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

var runningTime = setTimeout(function(){time()}, 500); // Anonymous function to continuously set time
console.log(day, month, year);
}

function standardTime(hour){

    var d = new Date();
    hours = d.getHours() % 12 || 12;
 
    return hour;
    
}

function checkTime(i){

    if(i < 10){
        i = "0" + i;
    }
    return i;
}


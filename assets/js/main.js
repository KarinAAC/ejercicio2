
var fah = document.getElementById('fahrenheit');
var cel = document.getElementById('celcius');


function converToCelcius(){
 cel.value = (5/9)*(fah.value-32);
};

function convertToFarenheit(){
 fah.value = (cel.value*9/5)+32;
};

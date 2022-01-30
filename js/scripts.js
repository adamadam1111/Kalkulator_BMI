'use strict';

function calc() {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    const result= Math.round(parseFloat(weight) /(parseFloat(height)/100)**2);
    const resultPlace =  document.querySelector("#result");

    if(!isNaN(result)){

        document.querySelector("#output").innerHTML = result;

        if(result < 18.5){
            resultPlace.innerHTML = "Masz niedowagę - zgłoś się do lekarza!";
        }
        else if(result < 25){
            resultPlace.innerHTML = "Masz prawidłową wagę";
        }
        else if(result < 30){
            resultPlace.innerHTML = "Masz nadwagę - zmień dietę, więcej ruchu";
        }
        else{
            resultPlace.innerHTML = "Masz otyłość, koniecznie zgłoś się do lekarza!";
        }
    }
}
const button = document.querySelector('#btn');
button.addEventListener("click", calc);


const advice_1 = document.querySelector('#btn_1');
advice_1.addEventListener("click", function() {
    message.innerHTML = 'Im wyższy stopień otyłości, tym większe ryzyko wystąpienia miażdżycy, choroby niedokrwiennej serca, udaru mózgu. Kalkulator BMI nie jest wskaźnikiem precyzyjnym.<br>Dla dokładniejszego określenia stanu zdrowia konieczna jest konsultacja z lekarzem i wykonanie odpowiednich badań.<br>W przypadku niektórych osób pomiar BMI może być obarczony pewnym błędem. Osoby aktywne fizycznie, posiadające dużą masę mięśniową, mogą mieć wynik BMI wskazujący na nadwagę, a w rzeczywistości mieć prawidłową masę ciała. Dlatego tak ważna jest konsultacja z lekarzem, dietetykiem lub trenerem personalnym';
});

const advice_2 = document.querySelector('#btn_2');
advice_2.addEventListener("click", function() {
    message.innerHTML = 'Pamiętaj: przede wszystkim dieta, potem dopiero aktywność. Obie te rzeczy muszą być ze sobą zgrane, bo są od siebie zależne.<br>Nie na wszystko mamy wpływ - nie zmienimy swoich genów. Jednak zmiana nawyków jest w zasięgu ręki. Teraz jest ten czas na zmianę i kontakt z dietetykiem!!!';
});

 
 